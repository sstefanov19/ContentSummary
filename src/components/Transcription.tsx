import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function Transcription() {
  const [transcription, setTranscription] = useState("");
  const [loading , setLoading] = useState(false)

  const mutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/transcribe", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

        setLoading(false);
      return response.json();
    },
    onSuccess: (data) => {
      setTranscription(data.transcription);
    },
  });

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    mutation.mutate(file);
  };



  return (
    <div className="h-screen flex mt-32 text-white flex-col items-center">
      <form className="flex items-center flex-col justify-center border-2 text-center h-[100px] rounded-lg">
        <h1>Upload your audio or video file</h1>
        <input type="file" onChange={handleUpload} />
        <button type="submit"></button>
      </form>

      {loading && <p className="text-center mt-8 font-bold ">Loading...</p>}

      {transcription && (
        <div className="flex items-center text-white w-[700px] h-[700px] p-3 border-2 rounded-md mt-8 flex-col">
          <h2>Transcription:</h2>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
}
