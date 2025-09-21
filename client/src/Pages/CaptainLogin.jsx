/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CaptainLogin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
        const [captainData,setCaptainData]=useState({})
    const navigate=useNavigate();
    
        const submitHandler=async(e)=>{
            e.preventDefault();
            
            const captain={
                email:email,
                password:password
            }
            const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain)
            if(res.status===200){
                const data=res.data;
                setCaptainData(data.captain)
                localStorage.setItem("token",data.token)
                navigate('/captain-home')
            }
            setEmail('')
            setPassword('')
        }
  return (
     <div className='p-7 h-screen flex flex-col justify-between'>
      
    <div>
         <img className='w-20 mb-5 ' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" alt="" />
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
       <p className='text-center'>Join a fleet? <Link to={'/captain-signup'} className="text-blue-600">Register as a Captain</Link></p>
      </form>
    </div>
    <div>
     <Link to={'/login'}
         className='bg-orange-600 flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Sign In as User</Link>
    </div>
    </div>
  )
}

export default CaptainLogin
