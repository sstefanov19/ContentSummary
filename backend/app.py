from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import whisper
import os

app = FastAPI()

# Load Whisper model
model = whisper.load_model("base")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    # Save the uploaded file to disk
    file_location = f"./{file.filename}"
    with open(file_location, "wb") as f:
        f.write(await file.read())

    # Transcribe the audio/video file
    result = model.transcribe(file_location)
    os.remove(file_location)  # Clean up the file after processing

    return {"transcription": result["text"]}
