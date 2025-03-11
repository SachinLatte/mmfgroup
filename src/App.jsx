import Home from "./components/home/Home"
import './App.css'
import Lenis from "lenis"
function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  return (
    <>
      <Home />
    </>
  )
}
export default App
