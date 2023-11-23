from flask import Flask, render_template, request, redirect, url_for, session
from flask_session import Session

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/", methods=['POST', 'GET'])
def main_page():
    if request.method == 'POST':
        print(request.form["surprise"])
        session['name'] = request.form["surprise"]
        return redirect(url_for("main_page"))
    return render_template('index.html', name=session['name'])