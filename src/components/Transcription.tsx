import { useState } from "react";

export default function Transcription() {
  const [transcription, setTranscription] = useState("");

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/transcribe", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setTranscription(data.transcription);
  };

  return (
    <div className="h-screen flex  mt-32 text-white flex-col items-center">
        <form className="flex items-center flex-col justify-center border-2 text-center h-[100px] rounded-lg">
      <h1>Upload your audio or video file</h1>
      <input type="file" onChange={handleUpload} />
      <button type="submit"></button>
        </form>

      {transcription && (
        <div className="flex items-center text-white w-[700px] h-[700px] p-3 border-2 rounded-md mt-8 flex-col">
          <h2>Transcription:</h2>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
}
