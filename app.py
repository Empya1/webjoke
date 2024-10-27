import os
from flask import Flask, render_template

app = Flask(__name__)

app.config["SECRET_KEY"] = os.environ["SECRET_KEY"]

link = os.environ["LINK"]

@app.route("/")
def index():
   return render_template("app.html", link=link)
   
@app.errorhandler(404)
def notfound(error):
   return render_template("error.html", link=link)
   
