from flask import Flask,request,jsonify
from werkzeug.utils import secure_filename
import fitz
import os
from useModel import getJobs,rank_resume
import spacy

app = Flask(__name__)
nlp = spacy.load("./output/model-best")

def get_entities(text):
    doc = nlp(text)
    return doc

def get_text(file):
    text = ""
    for pages in file:
        text = text + str(pages.get_text())
    return text

def linkedIn(resume_file):
    links = []
    for page in resume_file:
        link = page.load_links()
        while link:
            links.append(link.uri)
            if link.next:
                link = link.next
            else:
                break
    link = ""
    for i in links:
        if i[12:20]=='linkedin':
            link = i
            break
    return link

@app.route('/user', methods=['POST'])
def user():
    file = request.files['file']
    filename = secure_filename(file.filename)
    filepath = os.path.join('resume', filename)
    file.save(filepath)
    file = fitz.open(filepath)
    resume_text = get_text(file)
    doc = get_entities(resume_text)
    jobs = getJobs(resume_text,doc)
    return jsonify(jobs)

@app.route('/recruiter', methods=['POST'])
def recruiter():
    files = []
    files_length = int(request.form.get("length"))
    required_skills = request.form.get("skills")
    for i in range(files_length):
        file = request.files[f"file{i+1}"]
        filename = secure_filename(file.filename)
        filepath = os.path.join('resume', filename)
        files.append(filepath)
        file.save(filepath)
    resume_docs = []
    for filepath in files:
        file = fitz.open(filepath)
        resume_text = get_text(file)
        doc = get_entities(resume_text)
        linkedIn_link = linkedIn(file)
        resume_docs.append((doc,resume_text,linkedIn_link))
    ranked_resumes = rank_resume(resume_docs,required_skills)
    return jsonify({"ranked_resume":ranked_resumes})

if __name__ == '__main__':
	app.run(debug=True)
