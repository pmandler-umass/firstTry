from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# import os

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

@app.get("/")
async def root():
    return {"detail": "Backend is Running!"}

@app.get("/test_find")
def get_test_db_entry():
    return "test_find"
