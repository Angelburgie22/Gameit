from database import metadata, db
import models
import os
import sqlalchemy

def setup_database(app):
    with app.app_context():
        # Create database tables
        metadata.create_all(bind=db.engine)

        # Assert that tables are created
        assert sqlalchemy.inspect(db.engine).has_table('user_account'), 'UserAccount not created'
        assert sqlalchemy.inspect(db.engine).has_table('user_login_credential'), 'UserLoginCredential not created'
        assert sqlalchemy.inspect(db.engine).has_table('post'), 'Post not created'
        
        # Execute insert statements
        db.session.execute(sqlalchemy.text("""
            INSERT INTO user_account (name, email, username, cover_url, photo_url, description) VALUES 
            ('Omar', 'test@gmail.com', 'Burgie Kong', '', 'https://i.redd.it/s4krqgtwnxa71.jpg', 'El Ferran se la ingiere'), 
            ('Ferran', 'test2@gmail.com', 'Fierran', '', 'https://images.unsplash.com/photo-1625690988276-0a7b0cdf3d5d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'No sé'), 
            ('Oscar', 'test3@gmail.com', 'Veterinario', '', 'https://images.unsplash.com/photo-1625690988276-0a7b0cdf3d5d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mimiendo');
        """))
        db.session.execute(sqlalchemy.text("""
            INSERT INTO user_login_credential (passwd_hash, user_id) VALUES 
            ('scrypt:32768:8:1$wS0hiii81yqgrRTP$99a137a030fc1a10805b60a087b526da7c0ffce0842b9b23571a350e78364612541a9e66ec1c85359a428f252a9cbd36c57f8342f756382f27bef519595abbe1', 1), 
            ('scrypt:32768:8:1$3ZMTdGJQyTMIA64A$ce3f606d40470f6228d38c55d76ec3551eb4b326c66e7302c5e941ee1eab0f87267acc8f8652f06e8f7ac44ae72e68706f1ef8200358a9f29cbf832c31b04e7f', 2), 
            ('scrypt:32768:8:1$GRorJxzcqvRI6LTL$df1bb25a094789c0f66be02f3fb9e9629f4b507790f1a133457fba54e42cc895534c0448c9997d82b6da299cce80df35e24f2fb68f15144812f4e491a178095e', 3);
        """))
        db.session.execute(sqlalchemy.text("""
            INSERT INTO post (title, text, replies_count, votes_count, shares_count, poster_id) VALUES 
            ('Título', 'Primera publicación', 0, 0, 0, 2), 
            ('Sí se pudo', 'Puedo descansar en paz?', 0, 0, 0, 1), 
            ('Anuncio de Kung Fu Panda 5', 'Como dice el título, la segunda venida de Jesucristo', 0, 0, 0, 3);
        """))
        
        # Commit the changes
        db.session.commit()

        print("Database tables and initial data inserted successfully.")
