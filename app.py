from flask import Flask, request, abort, redirect, url_for
from auth.session import bp as session_bp
import os
from database import db

default_config = {
        'database_uri': f'DRIVER://DBMS:{os.environ["DBMS_PASSWD"]}@localhost/DB?charset=utf8mb4',
        'database_echo': True,
        'flask_app_name': __name__
        }

def create_app(config=default_config):
    app = Flask(config['flask_app_name'])

    app.config['DBMS_DATABASE_URI'] = config['database_uri']
    app.config['SQLALCHEMY_ECHO'] = config['database_echo']

    db.init_app(app)

    app.register_blueprint(session_bp)

    return app

