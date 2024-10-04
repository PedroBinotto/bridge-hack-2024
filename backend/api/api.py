from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

def initialize_model():
    global global_model

    if global_model is not None:
        print("Model already initialized.")
        return global_model

    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    
    model_name = "tunedModels/my-adjusted-model"
    
    global_model = genai.GenerativeModel(model_name=model_name)
    
    print(f"Model '{model_name}' initialized.")
    return global_model

@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_model()
    yield

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/bot_text/{text}")
async def read_item(text: str):
    from service import get_response
    response = get_response(global_model ,text)
    return {"response": response}
