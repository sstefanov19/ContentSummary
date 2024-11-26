import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import Transcript from "./components/Transcription";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-[#2D2D2D] min-h-screen w-screen">
        <div className="flex justify-center">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/transcript" element={<Transcript />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
