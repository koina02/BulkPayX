import firebase_admin
from firebase_admin import auth, credentials

# Initialize Firebase
cred = credentials.Certificate("backend/services/firebase-key.json")  # Ensure this path is correct
firebase_admin.initialize_app(cred)

# Test user creation
def create_test_user():
    try:
        user = auth.create_user(
            email="testuser@example.com",
            password="TestPass123!"
        )
        print(f"Successfully created test user: {user.uid}")
    except Exception as e:
        print(f"Error creating test user: {e}")

if __name__ == "__main__":
    create_test_user()
