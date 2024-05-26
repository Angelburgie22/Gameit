from database import metadata, db
import models
import os
from app import create_app

def setup_database():
	with create_app().app_context():
		metadata.create_all(bind=db.engine)

if __name__ == "__main__":
    setup_database()