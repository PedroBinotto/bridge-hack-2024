from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM


def train():
    model_path = "/home/pedro/Projetos/bridge/bridge-hack/backend/api/trained_codebert"
    global tokenizer
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    global model
    model = AutoModelForSeq2SeqLM.from_pretrained(model_path)


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


def generate_answer(question):
    # Tokenize the input question
    inputs = tokenizer(
        question,
        return_tensors="pt",
        padding="max_length",
        truncation=True,
        max_length=512,
    )

    # Generate output using the model
    if inputs["input_ids"].size(1) > 0:  # Ensure that the input is not empty
        with torch.no_grad():
            outputs = model.generate(
                inputs["input_ids"],
                max_length=128,
                num_return_sequences=1,
                no_repeat_ngram_size=2,
                early_stopping=True,
                num_beams=3,
                do_sample=True,
                top_k=50,
                top_p=0.95,
            )

        # Decode the output and return the answer
        answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
    else:
        answer = "Desculpe, não entendi a pergunta. Pode reformular?"

    return answer


@app.get("/bot_text/{text}")
async def read_item(text: str):
    return generate_answer(text)
