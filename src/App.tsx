import FaqComponent from "./components/Faq/FaqComponent"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"


function App() {


  return (
    <div className="py-6 px-24 font-universo text-[14px] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Info />
      <FaqComponent />
    </div>
  )
}

export default App
