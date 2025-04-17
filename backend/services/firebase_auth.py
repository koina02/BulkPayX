import firebase_admin
from firebase_admin import credentials, auth

class FirebaseAuthService:
    def __init__(self):
        if not firebase_admin._apps:
            cred = credentials.Certificate("backend/services/firebase-key.json")  # Adjust path
            firebase_admin.initialize_app(cred)

    def create_user(self, email: str, password: str):
        user = auth.create_user(email=email, password=password)
        return user.uid

    def login_user(self, email: str, password: str):
        try:
            user = auth.get_user_by_email(email)
            return {"uid": user.uid, "email": user.email}
        except firebase_admin.auth.UserNotFoundError:
            return None

    def delete_user(self, uid: str):
        auth.delete_user(uid)
        return f"User {uid} deleted successfully"

