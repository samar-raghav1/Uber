import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/UserLogin'
import Home from './Pages/Home'
import UserSignUp from './Pages/UserSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignUp from './Pages/CaptainSignUp'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
