from flask import Flask, render_template, request, redirect, url_for, session
from flask_session import Session
import numpy as np

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route("/", methods=['POST', 'GET'])
def main_page():
    if 'name' not in session:
        session['name'] = ""

    if 'matrix' not in session:
        session['matrix'] = np.array([])

    if request.method == 'POST':
        print("POST")
        print(request.form)
        rows = int(request.form['rows'])
        cols = int(request.form['cols'])
        list = []
        el_count = 0
        for thing in request.form:
            el_count+=1
            list.append(int(request.form[f'{thing}']))
            if el_count == rows * cols: break
        print(list)
        matrix = np.array(list).reshape(rows, cols)
        session['matrix'] = matrix
        print(matrix)
        inverted_matrix = invert_matrix(matrix)
        return {"matrix": str(inverted_matrix)}
        
    print("end")
    print(session['matrix'])
    return render_template('index.html', name=session['name'], data = session['matrix'])

def invert_matrix(matrix):
    try:
        return np.linalg.inv(matrix)
    except:
        return "Matrix is not invertible"
    
