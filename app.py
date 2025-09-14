from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Demo credentials
USERNAME = "farmer"
PASSWORD = "1234"

@app.route("/", methods=["GET"])
def home():
    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username", "").strip()
    password = request.form.get("password", "").strip()
    if username == USERNAME and password == PASSWORD:
        # सफल login -> dashboard
        return redirect(url_for("dashboard"))
    else:
        return render_template("login.html", error="Invalid username or password")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(debug=True)
