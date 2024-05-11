import './App.css'
import Navbar from './components/Navbar.jsx'
import { Slide } from './components/Slide.jsx'
import Popular from './components/Popular.jsx'
import Recently from './components/Recently'
import prize from './prize.json'

function App() {
  return (
    <>
      <Navbar />
      <Slide />
      <Popular prize={prize} />
      <Recently prize={prize} />
    </>
  )
}

export default App
