from fastapi import FastAPI, File, UploadFile
from typing import List
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

import time
import os

import sequence

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/upload/")
async def create_upload_files(files: list[UploadFile]): 
    for file in files:
        with open(file.filename, "wb") as f:
            f.write(await file.read())
    sequence.wrapper_function()
    # time.sleep(1)
    
    os.chdir("../")
    print(os.getcwd())
    return FileResponse("merged_sequence/merged.seq")