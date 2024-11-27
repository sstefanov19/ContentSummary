from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import whisper
from transformers import pipeline
import os

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


whisper_model = whisper.load_model("base")
summarizer = pipeline("summarization", model="t5-small", tokenizer="t5-small")

@app.post("/transcribe_and_summarize")
async def transcribe_and_summarize(file: UploadFile = File(...)):
    # Save the uploaded file to disk
    file_location = f"./{file.filename}"
    with open(file_location, "wb") as f:
        f.write(await file.read())

    # Transcribe the audio/video file
    transcription_result = whisper_model.transcribe(file_location)
    transcription_text = transcription_result["text"]

    # Summarize the transcribed text
    summary_result = summarizer(transcription_text, max_length=100, min_length=25, do_sample=False)
    summary_text = summary_result[0]["summary_text"]

    # Clean up the file
    os.remove(file_location)

    return {"transcription": transcription_text, "summary": summary_text}
