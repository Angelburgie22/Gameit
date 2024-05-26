from database import db
from .bp import bp
from sqlalchemy.orm import joinedload
from models import Post, UserAccount

@bp.route('/get_posts')
def get_posts():
    session = db.session

    posts = Post.query.all()

    result = {
        'success': True,
        'posts': []
    }

    for post in posts:
        user = session.get(UserAccount, post.poster_id)

        post_data = {
            'post_id': post.post_id,
            'title': post.title,
            'text': post.text,
            'creation_date': post.creation_date,
            'replies_count': post.replies_count,
            'votes_count': post.votes_count,
            'user_id': user.account_id,
            'user': user.name,
            'username': user.username
        }

        result['posts'].append({'user_id': user.account_id, 'user': user.name, 'username': user.username, 'photo_url': user.photo_url, 'post': post_data})

    session.commit()
    return result
