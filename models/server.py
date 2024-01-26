# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask,request,jsonify
from pdfminer.high_level import extract_text
from werkzeug.utils import secure_filename
import os
app = Flask(__name__)

UPLOAD_FOLDER = os.path.join('models', 'resume')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['POST'])
def hello_world():
    file = request.files['file']
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)
    text = extract_text(filepath)
    return jsonify({'msg': 'done'})

if __name__ == '__main__':

	app.run(debug=True)
