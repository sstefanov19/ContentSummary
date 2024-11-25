import Header from "./components/Header"
import DashBoard from "./components/DashBoard"


function App() {


  return (
    <>
    <div className="flex flex-col bg-[#2D2D2D] min-h-screen w-screen">
        <div className="flex justify-center">
    <Header />
        </div>
    <DashBoard />
    </div>
    </>
  )
}

export default App
