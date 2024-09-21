import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"


function App() {


  return (
    <div className="py-6 px-24 font-universo text-[14px] text-white">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  )
}

export default App
