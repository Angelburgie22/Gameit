from sqlalchemy import func
from sqlalchemy.orm import aliased
from database import db
from models import UserAccount
from auth.auth import get_active_session, active_session_decorator as active_session
from .bp import bp

@bp.route('/<int:user_id>')
@active_session
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
        'profile': profile
    }

    session.commit()
    return result