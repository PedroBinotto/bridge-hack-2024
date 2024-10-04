from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


def train():
    print("tunando modelo...")


@asynccontextmanager
async def lifespan(app: FastAPI):
    train()
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas as origens. Ajuste conforme necessário.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/bot_text/{text}")
async def read_item(text: str):
    return text
