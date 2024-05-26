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
        'subreddits': subreddits
    }

    session.commit()
    return result