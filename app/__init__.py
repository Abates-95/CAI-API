from flask import Flask
from config import Config
from.site.routes import site

from flask_cors import CORS

app = Flask(__name__)

# Allow Cross-Origin Resource Sharing (CORS)
CORS(app)

# Register Blueprints for different routes
app.register_blueprint(site)

# Load configuration from Config class
app.config.from_object(Config)
