auth.py
from flask import request, jsonify, current_app
from functools import wraps
import jwt

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if request.method == 'OPTIONS':
            return f(*args, **kwargs)  # Allow CORS preflight request

        token = None
        auth_header = request.headers.get("Authorization")
        if auth_header and auth_header.startswith("Bearer "):
            token = auth_header.split(" ")[1]

        if not token:
            return jsonify({"message": "Missing token"}), 401

        try:
            if not current_app.secret_key:
                return jsonify({"message": "Server misconfiguration: secret key is missing"}), 500
            data = jwt.decode(token, current_app.secret_key, algorithms=["HS256"])
            request.user = data
        except jwt.ExpiredSignatureError:
            return jsonify({"message": "Token expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"message": "Invalid token"}), 401

        return f(*args, **kwargs)
    return decorated