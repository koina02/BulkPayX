from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.services.firebase_auth import FirebaseAuthService  # Ensure this is correctly imported

router = APIRouter()
auth_service = FirebaseAuthService()

# Define request models
class UserSignup(BaseModel):
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

@router.post("/signup")
async def signup(user: UserSignup):
    try:
        user_id = auth_service.create_user(user.email, user.password)
        return {"message": "User created successfully", "user_id": user_id}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/login")
async def login(user: UserLogin):
    try:
        user_data = auth_service.login_user(user.email, user.password)
        if user_data:
            return {"message": "Login successful", "user": user_data}
        else:
            raise HTTPException(status_code=400, detail="Invalid credentials")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))



