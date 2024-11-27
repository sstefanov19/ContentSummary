import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function Transcription() {
  const [transcription, setTranscription] = useState("");
    const [summary, setSummary] = useState("");
    const [showSummary, setShowSummary] = useState(false);
  const [loading, setLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/transcribe_and_summarize", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setLoading(false);
      return data;
    },
    onSuccess: (data) => {
      setTranscription(data.transcription);
        setSummary(data.summary);
    },
    onError: (error) => {
      console.error("Error occurred:", error);
      setLoading(false);
      alert("Error while transcribing the file. Please try again.");
    },
  });

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    mutation.mutate(file);
  };

  return (
    <div className="h-screen flex mt-32 text-white flex-col items-center">
      <form className="flex items-center flex-col justify-center bg-[#3C3C3C] text-center h-[100px] rounded-lg p-4">
        <h1 className="mb-4">Upload your audio or video file</h1>
        <input
          type="file"
          onChange={handleUpload}
          className="p-2 border rounded-md mb-4"
        />
      </form>

      {loading && <p className="text-center mt-8 font-bold text-white">Loading...</p>}

      {!showSummary && transcription && (
        <div className="flex items-center text-white w-[700px] h-[700px] p-3 bg-[#3C3C3C] rounded-xl mt-8 flex-col overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Transcription:</h2>
          <p>{transcription}</p>
        </div>
      )}
      {!showSummary && transcription &&  <button className="mt-4 text-center w-[80px] h-[40px] rounded-lg border-2 " onClick={() => setShowSummary(!showSummary)}>Summary</button>}
        {showSummary && summary && (
        <div className="flex items-center text-white w-[700px] h-[700px] p-3 bg-[#3C3C3C] rounded-xl mt-8 flex-col overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
