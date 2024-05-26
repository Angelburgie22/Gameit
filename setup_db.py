from database import metadata, db
import models
import os
import sqlalchemy

def setup_database(app):
    with app.app_context():
        # Create database tables
        metadata.create_all(bind=db.engine)

        db.session.execute(sqlalchemy.text("""
            INSERT INTO group_post (title, text, photo_url, poster_id) VALUES 
            ('Team para Valorant', 'Busco team para rankear en Iron 1', 'https://media.zenfs.com/es/levelup_525/e3c1efa330b4c77c3955ea8c938a706e', 2), 
            ('Escuadra para Fornite', 'Estoy cansado de quedar en #99', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS7VbVvi1Uf7X2Ge1fz3uiZY7gzmKOlVooKv-z7zyMw&s', 1);
        """))
        
        # Commit the changes
        db.session.commit()

        print("Database tables and initial data inserted successfully.")
