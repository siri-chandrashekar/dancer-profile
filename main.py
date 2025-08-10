from flask import Flask, render_template, request
from datetime import datetime


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/performances')
def performances():
    return render_template('extra.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/accolades')
def accolades():
    return render_template('accolades.html')

@app.route('/choreography')
def choreography():
    return render_template('choreography.html')

@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')

@app.route('/konnakol')
def konnakol():
    return render_template('konnakol.html')

@app.route('/accolades')
def accolades():
    return render_template('accolades.html')

@app.route('/choreography')
def choreography():
    return render_template('choreography.html')

@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')

@app.route('/production')
def production():
    return render_template('production.html')







if __name__ == "__main__":
    app.run(debug=True)

