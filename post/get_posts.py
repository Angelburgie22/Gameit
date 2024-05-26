from database import db
from .bp import bp
from sqlalchemy.orm import joinedload
from models import Post, UserAccount

@bp.route('/get_posts')
def get_posts():
    session = db.session

    # Query posts with joined UserAccount to get profile_id
    posts = session.query(Post, UserAccount).options(joinedload(Post.poster)).all()

    # Construct result dictionary
    result = {
        'success': True,
        'posts': [{'user_id': user.account_id, 'username': user.username, 'post': post} for post, user in posts]
    }

    session.commit()
    return result