import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Books from "./components/Books"
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="min-w-full bg-[#e1d3ba]">
      <Hero/>
      <hr className="border-t-4 border-dashed border-[#251c14] mx-4" />
      <Books/>
    </div>
    </>
  )
}

export default App