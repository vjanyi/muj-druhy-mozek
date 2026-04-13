from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional
import os
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter()

# MongoDB connection
MONGO_URL = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(MONGO_URL)
db = client.get_database('landing_page')
emails_collection = db.emails

class EmailSubscribe(BaseModel):
    email: EmailStr
    source: str  # 'hero' or 'bottom'

@router.post("/subscribe")
async def subscribe_email(data: EmailSubscribe):
    """Save email subscription"""
    try:
        # Check if email already exists
        existing = await emails_collection.find_one({"email": data.email}, {"_id": 0})
        
        if existing:
            # Update source if different
            await emails_collection.update_one(
                {"email": data.email},
                {"$set": {"last_source": data.source, "updated_at": datetime.utcnow()}}
            )
            return {"message": "Email updated", "already_subscribed": True}
        
        # Insert new email
        email_doc = {
            "email": data.email,
            "source": data.source,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        
        await emails_collection.insert_one(email_doc)
        
        return {
            "message": "Email saved successfully", 
            "email": data.email,
            "already_subscribed": False
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error saving email: {str(e)}")

@router.get("/count")
async def get_email_count():
    """Get total email subscribers count"""
    try:
        count = await emails_collection.count_documents({})
        return {"total_subscribers": count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
