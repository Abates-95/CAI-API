import os 
from dotenv import load_dotenv
basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config():
    '''
        Set config variables for flask app
        using Environment variables where available.
        Otherwise, create the config variable if not already done

    '''
    # How app talks to computer
    FLASK_APP = os.getenv("FLASK_APP")
    FLASK_ENV = os.getenv('FLASK_ENV')
    SECRET_KEY = os.environ.get("SECRET_KEY") or "1928"