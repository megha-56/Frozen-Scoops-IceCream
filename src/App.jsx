import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header'
import Home2 from './components/home2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home2/>
      
    </>
  )
}

export default App
