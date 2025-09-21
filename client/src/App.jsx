import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/UserLogin'

import UserSignUp from './Pages/UserSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignUp from './Pages/CaptainSignUp'
import Start from './Pages/Start'
import Home from './Pages/Home'
import UserProtectedWrapper from './Pages/UserProtectedWrapper'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtect from './Pages/CaptainProtect'
import CaptainLogout from './Pages/CaptainLogout'
import Riding from './Pages/Riding'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
        <Route path='/home' element={<UserProtectedWrapper>
          <Home/>
          </UserProtectedWrapper>}/>

        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>}/>
        <Route path='/captain-home' element={<CaptainProtect><CaptainHome/></CaptainProtect>}/>
        <Route path='/captain-logout' element={<CaptainProtect><CaptainLogout/></CaptainProtect>}/>
      </Routes>
    </div>
  )
}

export default App
