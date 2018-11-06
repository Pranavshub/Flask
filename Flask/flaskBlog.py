from flask import Flask, render_template
app = Flask(__name__)
#app.run(host = '0.0.0.0')

@app.route("/")
# adds home route to home page as well
@app.route("/home")
def home():
    return render_template('boolean-variable.html')

if __name__ == '__main__':
	app.run(debug=True)