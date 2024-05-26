from sqlalchemy import Table, Column, ForeignKey, func
from sqlalchemy import Integer, String, Boolean, BigInteger, Date, DateTime, CheckConstraint
from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy.dialects.postgresql import CHAR, SMALLINT, INTERVAL
from typing import Optional
from datetime import datetime as Datetime, timedelta as Timedelta
from database import Model

class UserAccount(Model):
    __tablename__ = 'user_account'

    account_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[Optional[str]] = mapped_column(String(254), unique=True)
    phone: Mapped[Optional[int]] = mapped_column(Integer, unique=True)
    website: Mapped[Optional[str]] = mapped_column(String(100))
    username: Mapped[str] = mapped_column(String(30), unique=True, nullable=False)
    location: Mapped[Optional[str]] = mapped_column(String(30))
    birthdate: Mapped[Datetime] = mapped_column(Date, nullable=False)
    cover_url: Mapped[Optional[str]] = mapped_column(String(100))
    photo_url: Mapped[Optional[str]] = mapped_column(String(100))
    is_private: Mapped[bool] = mapped_column(Boolean, default=False)
    description: Mapped[Optional[str]] = mapped_column(String(160))
    pinned_post: Mapped[Optional[int]] = mapped_column(BigInteger)
    is_validated: Mapped[bool] = mapped_column(Boolean, default=False)
    is_deactivated: Mapped[bool] = mapped_column(Boolean, default=False)
    elimination_date: Mapped[Optional[Datetime]] = mapped_column(DateTime)
    registration_date: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())

    login_credential: Mapped['UserLoginCredential'] = relationship(back_populates='account')

    followers: Mapped[list['UserFollower']] = relationship(
            back_populates='follower',
            primaryjoin='UserAccountData.account_id == UserFollower.follower_id',
            lazy='dynamic'
        )

    following: Mapped[list['UserFollower']] = relationship(
            back_populates='followee',
            primaryjoin='UserAccountData.account_id == UserFollower.followee_id',
            lazy='dynamic'
        )
    
    posts: Mapped[list['Post']] = relationship('Post', back_populates='poster')
    group_posts: Mapped[list['Post']] = relationship('GroupPost', back_populates='poster')

class EmailValidation(Model):
    __tablename__ = 'email_validation'

    account_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), primary_key=True)
    token: Mapped[str] = mapped_column(String(255), nullable=False)
    is_validated: Mapped[bool] = mapped_column(Boolean, default=False)
    validation_date: Mapped[Optional[Datetime]] = mapped_column(DateTime)
    token_expiration: Mapped[Datetime] = mapped_column(DateTime, nullable=False)

class UserLoginInfo(Model):
    __tablename__ = 'user_login_info'

    account_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id),
                                    primary_key=True)
    passwd_hash: Mapped[bytes] = mapped_column(String(128))

    account: Mapped['UserAccount'] = relationship(back_populates='login_info')

class UserSession(Model):
    __tablename__ = 'user_session'

    id: Mapped[bytes] = mapped_column('session_id', String(64), primary_key=True)
    account_id: Mapped[Optional[int]] = mapped_column(ForeignKey(UserAccount.account_id))
    creation_time: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    expiration_time: Mapped[Datetime] = mapped_column(DateTime)

    account: Mapped[Optional['UserAccount']] = relationship(back_populates='logged_sessions')

class CSRF_Token(Model):
    __tablename__ = 'csrf_token'
    token: Mapped[bytes] = mapped_column('csrf_token', String(64), primary_key=True)
    creation_time: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    expiration_time: Mapped[Datetime] = mapped_column(DateTime)

class DeactivationProcess():
    __tablename__ = 'deactivation_process'

    deactivation_id: Mapped[int] = mapped_column('deactivation_id', BigInteger, primary_key=True)
    account_id: Mapped[int] = mapped_column('account_id', ForeignKey('user_account.account_id'))
    is_deactivating: Mapped[bool] = mapped_column('status', Boolean, default=True)
    end_date: Mapped[Datetime] = mapped_column('end_date', DateTime, server_default=func.now()+Timedelta(days=30))

    account: Mapped[Optional['UserAccount']] = relationship(back_populates='deactivation', lazy='noload')

class HashingAlgorithm(Model):
    __tablename__ = 'hashing_algorithm'

    hashalgo_id: Mapped[int] = mapped_column(SMALLINT, primary_key=True)
    name: Mapped[str] = mapped_column(String(20), nullable=False)

    login_credential: Mapped[Optional['UserLoginCredential']] = relationship(back_populates='hashing_algorithm', lazy='noload')

class UserLoginCredential(Model):
    __tablename__ = 'user_login_credential'

    credential_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    passwd_hash: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    salt: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), nullable=False)
    algo_id: Mapped[int] = mapped_column(ForeignKey(HashingAlgorithm.hashalgo_id), nullable=False)

    hashing_algorithm: Mapped['HashingAlgorithm'] = relationship(back_populates='login_credential')

    account: Mapped['UserAccount'] = relationship(back_populates='login_credential')

class UserFollower(Model):
    __tablename__ = 'user_follower'

    followee_id: Mapped[int] = mapped_column('followee_id', ForeignKey(UserAccount.account_id), primary_key=True)
    follower_id: Mapped[int] = mapped_column('follower_id', ForeignKey(UserAccount.account_id), primary_key=True)

    followee: Mapped['UserAccount'] = relationship(
        back_populates='following',
        foreign_keys=[followee_id]
    )

    follower: Mapped['UserAccount'] = relationship(
        back_populates='followers',
        foreign_keys=[follower_id]
    )

class BlockedUser(Model):
    __tablename__ = 'blocked_user'

    user_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), primary_key=True)
    blocked_user_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), primary_key=True)

class Subreddit(Model):
    __tablename__ = 'subreddit'

    subreddit_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    name: Mapped[str] = mapped_column(String(16), nullable=False)
    description: Mapped[str] = mapped_column(String(256), nullable=False)
    created_date: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    creator: Mapped['UserAccount'] = mapped_column(ForeignKey(UserAccount.account_id))
    
    followers: Mapped[list['UserAccount']] = relationship(
        'UserAccount',
        secondary='subreddit_follower',
        back_populates='followed_subreddits'
    )

class SubredditFollower(Model):
    __tablename__ = 'subreddit_follower'
    
    subreddit_id: Mapped[int] = mapped_column(ForeignKey(Subreddit.subreddit_id), primary_key=True)
    follower_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), primary_key=True)

class Post(Model):
    __tablename__ = 'post'

    post_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    title: Mapped[str] = mapped_column(String(40), nullable=False)
    text: Mapped[str] = mapped_column(String(120), nullable=False)
    creation_date: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    replies_count: Mapped[int] = mapped_column(Integer, default=0)
    votes_count: Mapped[int] = mapped_column(Integer, default=0)
    is_deleted: Mapped[bool] = mapped_column(Boolean, default=False)
    is_archived: Mapped[bool] = mapped_column(Boolean, default=False)
    subreddit: Mapped[int] = mapped_column(ForeignKey(Subreddit.subreddit_id), primary_key=True)
    poster_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), nullable=False)
    
    poster: Mapped['UserAccount'] = relationship('UserAccount', back_populates='posts')
    media: Mapped[list['PostMedia']] = relationship('PostMedia', back_populates='post', lazy='dynamic')
    poll: Mapped[Optional['Poll']] = relationship('Poll', back_populates='post', lazy='dynamic')

class PostMedia(Model):
    __tablename__ = 'post_media'

    media_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    post_id: Mapped[int] = mapped_column(ForeignKey(Post.post_id), nullable=False)
    media_type: Mapped[str] = mapped_column(String(20), nullable=False)
    media_url: Mapped[str] = mapped_column(String(255), nullable=False)
    alt_text: Mapped[Optional[str]] = mapped_column(String(100))

    post: Mapped['Post'] = relationship(back_populates='media')

class GroupPost(Model):
    __tablename__ = 'group_post'

    grouppost_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    title: Mapped[str] = mapped_column(String(40), nullable=False)
    text: Mapped[str] = mapped_column(String(120), nullable=False)
    creation_date: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    replies_count: Mapped[int] = mapped_column(Integer, default=0)
    votes_count: Mapped[int] = mapped_column(Integer, default=0)
    is_deleted: Mapped[bool] = mapped_column(Boolean, default=False)
    is_archived: Mapped[bool] = mapped_column(Boolean, default=False)
    subreddit: Mapped[int] = mapped_column(ForeignKey(Subreddit.subreddit_id), primary_key=True)
    poster_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), nullable=False)
    
    poster: Mapped['UserAccount'] = relationship('UserAccount', back_populates='group_posts')

class Poll(Model):
    __tablename__  = 'poll'

    poll_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    duration: Mapped[Timedelta] = mapped_column(INTERVAL, nullable=False)
    end_date: Mapped[Datetime] = mapped_column(DateTime, nullable=False)

    options: Mapped[list['PollOption']] = relationship(back_populates='poll', lazy='noload')
    post: Mapped['Post'] = relationship('Post', back_populates='poll', lazy='dynamic')

class PollOption(Model):
    __tablename__ = 'poll_option'

    poll_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    option_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    item: Mapped[str] = mapped_column(String(25), nullable=False)
    votes: Mapped[int] = mapped_column(Integer, default=0)
 
    poll: Mapped[Optional['Poll']] = relationship(back_populates='options', lazy='dynamic')

class PollOptionChosen(Model):
    __tablename__ = 'poll_option_chosen'

    poll_id: Mapped[int] = mapped_column(ForeignKey(Poll.poll_id))
    option_id: Mapped[int] = mapped_column(ForeignKey(PollOption.option_id), primary_key=True)
    voter_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), primary_key=True)

class Saves(Model):
    __tablename__ = 'save'

    save_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    post_id: Mapped[int] = mapped_column(ForeignKey(Post.post_id), nullable=False)
    save_date: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())