models.py
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ARRAY
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    tablename = 'users'

id = db.Column(db.Integer, primary_key=True)
name = db.Column(db.String(100))  # Used for profile URL
email = db.Column(db.String(120), unique=True, nullable=False)
tagline = db.Column(db.String(255))

# Relationships
skills_offered = db.relationship('SkillOffered', backref='user', lazy=True)
skills_wanted = db.relationship('SkillWanted', backref='user', lazy=True)
exchanges = db.relationship('Exchange', backref='user', lazy=True)
class SkillOffered(db.Model):
    tablename = 'skills_offered'

id = db.Column(db.Integer, primary_key=True)
name = db.Column(db.String(100), nullable=False)
level = db.Column(db.String(50))  # e.g., Beginner, Intermediate, Expert
exchanges_completed = db.Column(db.Integer, default=0)
user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
class SkillWanted(db.Model):
    tablename = 'skills_wanted'

id = db.Column(db.Integer, primary_key=True)
name = db.Column(db.String(100), nullable=False)
priority = db.Column(db.String(50))  # e.g., High, Medium, Low
user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)