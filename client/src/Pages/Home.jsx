import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen pt-8 w-full flex justify-between flex-col bg-[url("https://images.unsplash.com/photo-1676976418988-029de837f5ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover'>
        <img className='w-16 ml-8 ' src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" />
      <div className=' bg-white pb-7 py-4 px-4'>
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <Link to={"/login"} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
      </div>
    </div>
  )
}

export default Home
