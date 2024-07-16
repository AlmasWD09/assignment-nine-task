
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>
    <Navbar />
    <div className='min-h-[calc(100vh-204px)]'>
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default App
