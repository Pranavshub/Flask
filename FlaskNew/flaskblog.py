from flask import Flask, render_template, url_for
app = Flask(__name__)
#app.run(host = '0.0.0.0')

@app.route("/", methods = ['POST', 'GET'])
def home():
    return render_template('boolean-variable.html')


if __name__ == '__main__':
	app.run(debug=True)
