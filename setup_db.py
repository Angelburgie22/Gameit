from database import metadata, db
import models
import os

def setup_database(app):
	with app.app_context():
		metadata.create_all(bind=db.engine)

if __name__ == "__main__":
    setup_database()
