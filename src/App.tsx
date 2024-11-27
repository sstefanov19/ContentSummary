import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import Transcript from "./components/Transcription";
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col bg-[#2D2D2D] min-h-screen w-screen font-sans">
          <div className="flex justify-center">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/transcript" element={<Transcript />} />
          </Routes>
          </div>
          <div className='flex justify-center'>
          <Footer />
          </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
