
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header'
import Home2 from './components/home2'
import Menu from './components/Menu'
import SignatureMenu from './components/SignatureMenu'
import Banner from './components/banner'
import Footer from './components/footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import MenuPage from './components/MenuPage'
import CartPage from './components/CartPage'
import ContactPage from './components/ContactPage'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([
  {path:'/',
   element:<HomePage/>
  },
  {path:'/about',
    element:<AboutPage/>
  },
  {path:'/menu',
    element:<MenuPage/>
  },
  {
    path:'/cart',
    element:<CartPage/>
  },
  {
    path:'/contact',
    element:<ContactPage/>
  }
])


function App() {
  

  return (
     <RouterProvider router={router}/>
  )
}

export default App
