from models import db, User
from routes.skills import skills_bp
from routes.profile import profile_bp
from routes.messages import messages_bp
from utils.auth import token_required

# Load environment variables
from dotenv import load_dotenv
import os
import firebase_admin
from firebase_admin import credentials, auth as firebase_auth
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
import jwt
import datetime

load_dotenv()

app = Flask(__name__)

# Config
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.getenv("SECRET_KEY")
CORS(app, origins=["http://localhost:5173"])

# Extensions
db.init_app(app)
migrate = Migrate(app, db)

# Firebase setup
cred = credentials.Certificate("firebase_admin.json")
firebase_admin.initialize_app(cred)

# Auth route
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    id_token = data.get("idToken")

    try:
        decoded_token = firebase_auth.verify_id_token(id_token)
        uid = decoded_token["uid"]
        email = decoded_token.get("email", "")

        payload = {
            "uid": uid,
            "email": email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)
        }

        token = jwt.encode(payload, app.secret_key, algorithm="HS256")
        return jsonify({"token": token}), 200

    except Exception as e:
        print("Error verifying Firebase ID token:", e)
        return jsonify({"message": "Invalid ID token"}), 401

# JWT test route
@app.route("/protected", methods=["GET"])
@token_required
def protected():
    user = request.user
    return jsonify({
        "message": f"Welcome {user['email']}, you're authenticated!",
        "user": user
    }), 200

# REGISTER ROUTES
app.register_blueprint(skills_bp, url_prefix='/api/skills')
app.register_blueprint(messages_bp, url_prefix='/api/messages')
app.register_blueprint(profile_bp, url_prefix='/api/profile')

if __name__ == "__main__":
    app.run(debug=True)