
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header'
import Home2 from './components/home2'
import Menu from './components/Menu'
import SignatureMenu from './components/SignatureMenu'


function App() {
  

  return (
    <>
      <Header/>
      <Home2/>
      {/* <Menu/>
      <SignatureMenu/> */}

      <div className="flex flex-col gap-y-0">
        <Menu />
        <SignatureMenu />
      </div>
      
    </>
  )
}

export default App
