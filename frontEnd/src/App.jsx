import './App.css'
import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {

  return (
    <>
     <NavBar/>
        <div className="px-2 grid grid-cols-6 mt-2 gap-x-1 h-full w-full">
            <div className="col-span-4 bg-gray-700 w-full h-full rounded-lg">1</div>
            <div className="col-span-2 bg-gray-800 w-full h-full rounded-lg">
                <SideBar/>
            </div>
        </div>
    </>
  )
}

export default App
