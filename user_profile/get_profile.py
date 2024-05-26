from sqlalchemy import func
from sqlalchemy.orm import aliased
from database import db
from models import UserAccount
from auth.auth import get_active_session, active_session_decorator as active_session
from .bp import bp

@bp.route('/<int:user_id>')
def get_subreddits(user_id):
    session = db.session

    profile = session.get(UserAccount, user_id)

    if profile is None:
        return {
            'success': False,
            'reason': 'Invalid id'
        }, 404

    result = {
        'success': True,
        'profile': {
            'account_id': profile.account_id,
            'name': profile.name,
            'email': profile.email,
            'username': profile.username,
            'cover_url': profile.cover_url,
            'photo_url': profile.photo_url,
            'description': profile.description,
            'followers_count': profile.followers.count(),
            'following_count': profile.following.count(),
            'followed_subreddits': [subreddit.name for subreddit in profile.followed_subreddits],
            'posts': [{
                'post_id': post.post_id,
                'title': post.title,
                'content': post.content
            } for post in profile.posts]
        }
    }

    session.commit()
    return result