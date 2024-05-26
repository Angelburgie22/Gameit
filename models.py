from sqlalchemy import Table, Column, ForeignKey, UniqueConstraint, func
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
    username: Mapped[str] = mapped_column(String(30), unique=True, nullable=False)
    cover_url: Mapped[Optional[str]] = mapped_column(String(254))
    photo_url: Mapped[Optional[str]] = mapped_column(String(254))
    description: Mapped[Optional[str]] = mapped_column(String(160))

    login_credential: Mapped['UserLoginCredential'] = relationship(back_populates='account')

    followers: Mapped[list['UserFollower']] = relationship(
            back_populates='follower',
            primaryjoin='UserAccount.account_id == UserFollower.follower_id',
            lazy='dynamic'
        )

    following: Mapped[list['UserFollower']] = relationship(
            back_populates='followee',
            primaryjoin='UserAccount.account_id == UserFollower.followee_id',
            lazy='dynamic'
        )
    
    followed_subreddits: Mapped[list['Subreddit']] = relationship(
        'Subreddit',
        secondary='subreddit_follower',
        back_populates='followers',
        lazy='dynamic'
    )
    
    posts: Mapped[list['Post']] = relationship('Post', back_populates='poster')
    group_posts: Mapped[list['Post']] = relationship('GroupPost', back_populates='poster')

class UserSession(Model):
    __tablename__ = 'user_session'

    id: Mapped[bytes] = mapped_column('session_id', String(64), primary_key=True)
    account_id: Mapped[Optional[int]] = mapped_column(ForeignKey(UserAccount.account_id))
    creation_time: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    expiration_time: Mapped[Datetime] = mapped_column(DateTime)

class UserLoginCredential(Model):
    __tablename__ = 'user_login_credential'

    credential_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    passwd_hash: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), nullable=False)

    account: Mapped['UserAccount'] = relationship(back_populates='login_credential')

class CSRF_Token(Model):
    __tablename__ = 'csrf_token'
    token: Mapped[bytes] = mapped_column('csrf_token', String(64), primary_key=True)
    creation_time: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    expiration_time: Mapped[Datetime] = mapped_column(DateTime)

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
    poster_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), nullable=False)
    
    poster: Mapped['UserAccount'] = relationship('UserAccount', back_populates='posts')

class GroupPost(Model):
    __tablename__ = 'group_post'

    grouppost_id: Mapped[int] = mapped_column(BigInteger, primary_key=True)
    title: Mapped[str] = mapped_column(String(40), nullable=False)
    text: Mapped[str] = mapped_column(String(120), nullable=False)
    creation_date: Mapped[Datetime] = mapped_column(DateTime, server_default=func.now())
    replies_count: Mapped[int] = mapped_column(Integer, default=0)
    votes_count: Mapped[int] = mapped_column(Integer, default=0)
    poster_id: Mapped[int] = mapped_column(ForeignKey(UserAccount.account_id), nullable=False)
    
    poster: Mapped['UserAccount'] = relationship('UserAccount', back_populates='group_posts')
