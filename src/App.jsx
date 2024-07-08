import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Singup from './Components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Singup/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
