from flask import Flask, request, abort, redirect, url_for
from auth.session import bp as session_bp
from group_post import bp as group_posts_bp
from post import bp as posts_bp
from user_profile import bp as profiles_bp
from subreddit import bp as subreddits_bp
import os
from database import db

from dotenv import load_dotenv, dotenv_values

load_dotenv()

default_config = {
        'database_uri': f'postgresql://{os.getenv("PSQL_USER")}:{os.getenv("PSQL_PASSWD")}@127.0.0.1/{os.getenv("PSQL_BD")}',
        'database_echo': True,
        'flask_app_name': __name__
        }

def create_app(config=default_config):
    app = Flask(config['flask_app_name'])

    app.config['SQLALCHEMY_DATABASE_URI'] = config['database_uri']
    app.config['SQLALCHEMY_ECHO'] = config['database_echo']

    db.init_app(app)

    app.register_blueprint(session_bp)
    app.register_blueprint(group_posts_bp)
    app.register_blueprint(posts_bp)
    app.register_blueprint(profiles_bp)
    app.register_blueprint(subreddits_bp)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)