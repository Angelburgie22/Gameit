from sqlalchemy import func
from sqlalchemy.orm import aliased
from database import db
from models import Subreddit
from .bp import bp

@bp.route('/subreddits')
def get_subreddits():
    session = db.session

    subreddits = Subreddit.query.all()

    result = {
        'success': True,
        'subreddits': [{
            'subreddit_id': subreddit.subreddit_id,
            'name': subreddit.name,
            'description': subreddit.description,
            'created_date': subreddit.created_date.isoformat(),
            'creator': subreddit.creator.username,
            'followers_count': subreddit.followers.count()
        } for subreddit in subreddits]
    }

    session.commit()
    return result