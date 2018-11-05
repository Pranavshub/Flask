from flask import Flask, render_template
app = Flask(__name__)
app.run(host = '192.168.86.30')

posts = [
	{
		'author': 'Pranav',
		'title': 'Blog Post',
		'content':'first content',
		'date_posted': 'April '
	}
]

@app.route("/")
# adds home route to home page as well
@app.route("/home")
def home():
    return render_template('home.html', posts=posts)

@app.route("/about")
def about():
    return render_template('about.html')


'''if __name__ == '__main__':
	app.run(debug=True)

'''