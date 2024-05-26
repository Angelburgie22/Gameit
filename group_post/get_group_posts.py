from database import db
from .bp import bp
from sqlalchemy.orm import joinedload
from models import GroupPost, UserAccount

@bp.route('/get_posts')
def get_posts():
    session = db.session

    posts = GroupPost.query.all()

    result = {
        'success': True,
        'posts': []
    }

    for post in posts:
        user = session.get(UserAccount, post.poster_id)

        post_data = {
            'grouppost_id': post.grouppost_id,
            'title': post.title,
            'text': post.text,
            'photo_url': post.photo_url
        }

        result['posts'].append({'user_id': user.account_id, 'user': user.name, 'username': user.username, 'photo_url': user.photo_url, 'post': post_data})

    session.commit()
    return result
