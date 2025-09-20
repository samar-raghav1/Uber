import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(email,password);
        setUserData({email:email,password:password})
        console.log(userData);
        
        setEmail('')
        setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      
    <div>
         <img className='w-16 mb-10 ' src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" />
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
        <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} required type="email" placeholder='enter your email' />
        <h3 className='text-lg font-medium mb-2 '>Enter password</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         value={password} onChange={(e)=>{
            setPassword(e.target.value)
         }} required type="password" placeholder='Enter password' />
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
       <p className='text-center'>New here? <Link to={'/signup'} className="text-blue-600">Create new Account</Link></p>
      </form>
    </div>
    <div>
     <Link to={'/captain-login'}
         className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Sign In as Captain</Link>
    </div>
    </div>
  )
}

export default UserLogin
