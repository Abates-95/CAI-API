# Import necessary modules
from flask import Blueprint, render_template

# Create Blueprint for site
site = Blueprint('site', __name__, template_folder = 'site_templates')

# Define a route for the home page
@site.route('/')
def home():
    # Render index.html template
    return render_template('gallery.html')