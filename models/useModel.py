from selenium import webdriver
from bs4 import BeautifulSoup
import json
import pandas as pd
import re
import spacy
from api_key import key
import requests
from selenium.webdriver.chrome.options import Options
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

nlp = spacy.load('en_core_web_md')
def domainJobs(user_domain):
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")
    driver = webdriver.Chrome(options=chrome_options)
    driver.get("https://www.glassdoor.com/Job/india-{}-jobs-SRCH_IL.0,5_IN115_KO6,{}.htm".format(user_domain,len(user_domain)+6))
    resp = driver.page_source
    soup=BeautifulSoup(resp,'html.parser')
    allJobsContainer = soup.find("ul",{"class":"JobsList_jobsList__Ey2Vo"})
    allJobs = allJobsContainer.find_all("li")
    l = []
    o = {}
    for job in allJobs:
        try:
            name = job.find("span",{"class":"EmployerProfile_employerName__8w0tV"}).text
            if name[-1].isdigit():
                name = name[:-3]
            o["company"] = name
        except:
            o["company"]=None
        try:
            o["job"]=job.find("a",{"class":"JobCard_jobTitle__rbjTE"}).text
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
            salary = salary.split(' ')
            processed_salary = 0
            for i in salary:
                if i[0].isdigit():
                    if i[-1]=='K':
                        processed_salary += int(i[:-1])*1000
                    elif i[-1]=='M':
                        processed_salary += int(i[:-1])*1000000
            o["salary"]="INR "+str(processed_salary//2)
        except:
            o["salary"]=None
        try:
            link = job.find("a",{"class":"JobCard_jobTitle__rbjTE"})
            o["apply"]= link["href"]
        except:
            o["apply"]=None
        try:
            logo = job.find("img")
            o["logo"] = logo["src"]
        except:
            o["logo"] = None
        if o["company"]:
            l.append(o)
        o={}
    return l

def cosine_simil(req : str, given : str) -> int:
    cv = CountVectorizer()
    content = [given, req]
    matrix = cv.fit_transform(content)
    similarity_matrix = cosine_similarity(matrix)
    return similarity_matrix[0][1]*100

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

def domain_similarity(cand_skills,keywords):
    similarities = []
    for i,(domain,keyword) in enumerate(keywords.items()):
        similarities.append((domain,keyword,cosine_simil(keyword,cand_skills)))
    similarities.sort(key = lambda x: x[2],reverse=True)
    return similarities

def getCourses(user_skill):
    url = "https://www.udemy.com/api-2.0/courses/"
    headers = {
    "Accept": "application/json, text/plain, */*",
    "Authorization": key,
    "Content-Type": "application/json"
    }
    params = {
        "search": user_skill,
        "page_size": 1
    }
    res = requests.get(url,headers=headers,params=params)
    data = res.json()['results']
    courses = []
    user_skill = user_skill.upper()
    for course in data:
        courses.append({'title':course['title'],'link':f"https://www.udemy.com{course['url']}",'headline':course['headline'],'price':course['price'],'image':course['image_480x270'],'skill':user_skill})
    return courses

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
    domainSimilarity = domain_similarity(cand_skills,keywords)
    user_domain = domainSimilarity[0][0]
    user_domain = user_domain.replace(' ','-')
    user_jobs = domainJobs(user_domain)
    domain_courses = []
    for i,(domain,keyword,_) in enumerate(domainSimilarity,0):
        if i and i<=3:
            cnt = 0
            keyword_list = keyword.split(' ')
            curr_skills = {"domain":domain,"course":[]}
            for skill in keyword_list:
                if skill not in cand_skills:
                    curr_skills["course"].append(getCourses(skill)[0])
                    cnt+=1
                if cnt==3:
                    break
            domain_courses.append(curr_skills)
    return user_jobs,domain_courses,user_domain
            

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
        score = round(get_similarity(required_skills,cand_skills),2)
        domain = domain_similarity(cand_skills,keywords)[0][0]
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