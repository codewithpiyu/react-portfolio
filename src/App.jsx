import Navbar from "./Compontents/Navbar/Navbar"
import Home from "./Compontents/Home/Home"
import About from "./Compontents/About/About"
import Experience from "./Compontents/Experience/Experience"
import Projects from "./Compontents/Projects/Projects"
import Contact from "./Compontents/Contact/Contact"


function App() {
 

  return (
    <div className="bg-[#171d32]  h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
       <Experience/>
       <Projects/>
       <Contact/>
    </div>
  )
}

export default App
