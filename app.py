import os
from flask import Flask

app = Flask(__name__)

app.config["SECRET_KEY"] = os.environ["SECRET_KEY"]

@app.route("/")
def index(): 
  return """
<html>
<head>
<meta name="monetag" content="9c6b92db72d63d64f7810d7cf8264826">
</head>
</html>
<body>
<div>Yay</div>
</body>
"""

