from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime, timezone
from supabase import create_client, Client

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection
supabase_url = os.environ['SUPABASE_URL']
supabase_key = os.environ['SUPABASE_SERVICE_KEY']
supabase: Client = create_client(supabase_url, supabase_key)

app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactLeadCreate(BaseModel):
    name: str
    company: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    service_interest: Optional[str] = None
    message: str

class ContactLead(BaseModel):
    id: int
    name: str
    company: Optional[str] = None
    email: str
    phone: Optional[str] = None
    service_interest: Optional[str] = None
    message: str
    created_at: str


@api_router.get("/")
async def root():
    return {"message": "AsyncWorx API"}

@api_router.post("/contact", response_model=ContactLead)
async def create_contact_lead(input: ContactLeadCreate):
    if len(input.name.strip()) < 2:
        raise HTTPException(status_code=400, detail="Name must be at least 2 characters")
    
    if len(input.message.strip()) < 10:
        raise HTTPException(status_code=400, detail="Message must be at least 10 characters")
    
    try:
        # Insert into Supabase
        data = {
            "name": input.name,
            "company": input.company,
            "email": input.email,
            "phone": input.phone,
            "service_interest": input.service_interest,
            "message": input.message
        }
        
        response = supabase.table('contact_leads').insert(data).execute()
        
        if response.data and len(response.data) > 0:
            return ContactLead(**response.data[0])
        else:
            raise HTTPException(status_code=500, detail="Failed to create contact lead")
            
    except Exception as e:
        logging.error(f"Error creating contact lead: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@api_router.get("/contact", response_model=List[ContactLead])
async def get_contact_leads():
    try:
        response = supabase.table('contact_leads').select("*").order('created_at', desc=True).execute()
        
        if response.data:
            return [ContactLead(**lead) for lead in response.data]
        return []
        
    except Exception as e:
        logging.error(f"Error fetching contact leads: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
