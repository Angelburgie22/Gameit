from flask import Flask, request, abort, redirect, url_for
from auth.session import bp as session_bp
from group_post.get_group_posts import bp as group_posts_bp
from post.get_posts import bp as posts_bp
from user_profile.get_profile import bp as profiles_bp
from subreddit.get_subreddits import bp as subreddits_bp
import os
from database import db

from dotenv import load_dotenv, dotenv_values

load_dotenv()

DATABASE_URI = os.getenv('DATABASE_URL').replace('://', 'ql://', 1)

default_config = {
        'database_uri': DATABASE_URI,
        'database_echo': True,
        'flask_app_name': __name__
        }

app = Flask(default_config['flask_app_name'])

app.config['SQLALCHEMY_DATABASE_URI'] = default_config['database_uri']
app.config['SQLALCHEMY_ECHO'] = default_config['database_echo']

db.init_app(app)

app.register_blueprint(session_bp)
app.register_blueprint(group_posts_bp)
app.register_blueprint(posts_bp)
app.register_blueprint(profiles_bp)
app.register_blueprint(subreddits_bp)

#from setup_db import setup_database

#setup_database(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')