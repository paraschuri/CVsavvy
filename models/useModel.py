from selenium import webdriver
from bs4 import BeautifulSoup
import json
import pandas as pd
import re
import spacy
from api_key import key
import requests

nlp = spacy.load('en_core_web_md')
def domainJobs(user_domain):
    # options = webdriver.ChromeOptions()
    # options.debugger_address = "127.0.0.1:9222"
    # driver = webdriver.Chrome(options=options)
    print(user_domain)
    driver = webdriver.Chrome()
    driver.get("https://www.glassdoor.com/Job/india-{}-jobs-SRCH_IL.0,5_IN115_KO6,{}.htm".format(user_domain,len(user_domain)+6))
    resp = driver.page_source
    soup=BeautifulSoup(resp,'html.parser')
    allJobsContainer = soup.find("ul",{"class":"JobsList_jobsList__Ey2Vo"})
    allJobs = allJobsContainer.find_all("li")
    l = []
    o = {}
    for job in allJobs:
        try:
            name = job.find("span",{"class":"EmployerProfile_employerName__Xemli"}).text
            if name[-1].isdigit():
                name = name[:-3]
            o["company"] = name
        except:
            o["company"]=None
        try:
            o["job"]=job.find("a",{"class":"JobCard_seoLink__WdqHZ"}).text
        except:
            o["job"]=None
        try:
            o["location"]=job.find("div",{"data-test":"emp-location"}).text
        except:
            o["location"]=None
        try:
            salary = job.find("div",{"data-test":"detailSalary"}).text
            salary = salary.split('\xa0')
            salary = ' '.join(salary[:-1])
            o["salary"]=salary
        except:
            o["salary"]=None
        try:
            link = allJobs[0].find("a",{"class":"JobCard_seoLink__WdqHZ"})
            o["apply"]= link["href"]
        except:
            o["apply"]=None
        try:
            logo = job.find("img",{"class":"EmployerLogo_logo__8KXYt"})
            o["logo"] = logo["src"]
        except:
            o["logo"] = None
        l.append(o)
        o={}
    return l


def merge_skills(pred_skills,resume_text,skills_df):
    skills = skills_df.columns
    skills_pattern = re.compile(r'\b(?:' + '|'.join(re.escape(skill) for skill in skills) + r')\b', flags=re.IGNORECASE)
    skills = re.findall(skills_pattern, resume_text) + pred_skills
    skills = list(set(i for i in skills))
    cand_skills = ""
    for skill in skills:
        cand_skills = cand_skills + str(skill) + ' '
    return cand_skills

def get_similarity(cand_skills,req_skills):
    doc1 = nlp(cand_skills)
    doc2 = nlp(req_skills)
    return (doc1.similarity(doc2))*100

def get_domain(cand_skills,keywords):
    mx = 0
    for domain,keyword in keywords.items():
        similarity = get_similarity(keyword,cand_skills)
        if(similarity>mx):
            user_domain = domain
            mx = similarity
    return user_domain

def getCourses(user_domain):
    url = "https://www.udemy.com/api-2.0/courses/"
    headers = {
    "Accept": "application/json, text/plain, */*",
    "Authorization": key,
    "Content-Type": "application/json"
    }
    params = {
        "search": user_domain,
        "page_size": 5
    }
    res = requests.get(url,headers=headers,params=params)
    data = res.json()['results']
    courses = []
    for course in data:
        courses.append({'title':course['title'],'link':f"https://www.udemy.com{course['url']}",'headline':course['headline'],'price':course['price']})
    return {user_domain:courses}

def getJobs(resume_text,doc):
    pred_skills = []
    for ent in doc.ents:
        if ent.label_ == 'SKILLS':
            pred_skills.append(ent.text)
    skills_df = pd.read_csv('skills.csv')
    cand_skills = merge_skills(pred_skills,resume_text,skills_df)
    f = open("keywords.json")
    keywords = json.load(f)
    f.close()
    user_domain = get_domain(cand_skills,keywords)
    user_domain = user_domain.replace(' ','-')
    return domainJobs(user_domain)

def rank_resume(resume_docs,required_skills):
    processed_resume = []
    f = open("keywords.json")
    keywords = json.load(f)
    f.close()
    skills_df = pd.read_csv('skills.csv')
    for doc,text,linkedIn in resume_docs:
        pred_skills = []
        name = ""
        email = ""
        degree = ""
        experience = 0
        for ent in doc.ents:
            match ent.label_:
                case 'SKILLS':
                    pred_skills.append(ent.text)
                case 'NAME':
                    name = ent.text
                case 'EMAIL ADDRESS':
                    email = ent.text
                case 'DEGREE':
                    degree = ent.text
                case 'YEARS OF EXPERIENCE':
                    experience = 1
                case 'WORKED AS':
                    experience = 1
                case 'COMPANIES WORKED AT':
                    experience = 1
        cand_skills = merge_skills(pred_skills,text,skills_df)
        cand_skills = cand_skills.lower().strip()
        score = get_similarity(required_skills,cand_skills)
        domain = get_domain(cand_skills,keywords)
        if experience:
            score = float(min(100.0,score+3.0))
        if not email:
            email_pattern = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b')
            found_emails = email_pattern.findall(text)
            if found_emails:
                email = found_emails[0]
        processed_resume.append({"score":score,"name":name,"email":email,"degree":degree,"domain":domain,"linkedIn":linkedIn})
    processed_resume.sort(key = lambda x:x["score"],reverse=True)
    return processed_resume