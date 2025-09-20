import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(email,password);
        setUserData({email:email,password:password,
            fullName:{
                firstname:firstname,lastname:lastname
            }
        })
        console.log(userData);
        setFirstname('')
        setLastname('')
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

        <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
             <input className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
        value={firstname} onChange={(e)=>{
            setFirstname(e.target.value)
        }} required type="text" placeholder='First Name' />
           <input className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
        value={lastname} onChange={(e)=>{
            setLastname(e.target.value)
        }} required type="text" placeholder='Last Name' />
          </div>

        <h3 className='text-base mb-2 font-medium'>What's your email</h3>
        <input className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} required type="email" placeholder='enter your email' />

        <h3 className='text-base font-medium mb-2 '>Enter password</h3>
        <input className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
         value={password} onChange={(e)=>{
            setPassword(e.target.value)
         }} required type="password" placeholder='Enter password' />

        <button className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
       <p className='text-center'>Already have an Account? <Link to={'/login'} className="text-blue-600">Login</Link></p>
      </form>
    </div>
    <div>
     <p className='text-[10px]'>By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the number
        provided. Standard message and data rates may apply. <Link to={''} className='text-blue-600'>Privacy Policy</Link>
         and <Link to={''} className='text-blue-600'>Terms of Service</Link>.
     </p>
    </div>
    </div>
  )
}

export default UserSignUp
