/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignUp =() => {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [color,setColor]=useState('')
    const [plate,setPlate]=useState('')
    const [capacity,setCapacity]=useState('')
    const [vehicleType,setvehicleType]=useState('')
   
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const navigate=useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(email, password);
        const captainData = {
            email: email,
            password: password,
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            vehicle: {
                color: color,
                plate: plate,
                capacity: capacity,
                vehicleType: vehicleType
            }
        };
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);
        if (res.status === 201) {
            const data = res.data;

            setCaptain(data.captain)
            localStorage.setItem("token", data.token)
            navigate('/captain-home')
            console.log(data);
        }

        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setCapacity('')
        setColor('')
        setPlate('')
        setvehicleType('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      
    <div>
         <img className='w-16 mb-10 ' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" alt="" />
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>

        <h3 className='text-base font-medium mb-2'>Captain's name</h3>
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

        <h3 className='text-base mb-2 font-medium'>Captain's email</h3>
        <input className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} required type="email" placeholder='enter your email' />

        <h3 className='text-base font-medium mb-2 '>Enter password</h3>
        <input className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
         value={password} onChange={(e)=>{
            setPassword(e.target.value)
         }} required type="password" placeholder='Enter password' />

        <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
        <div className='flex gap-4 mb-5'>
            <input
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
                type="text"
                placeholder='Vehicle Color'
            />
            <input
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                required
                type="text"
                placeholder='Plate Number'
            />
        </div>
        <div className='flex gap-4 mb-5'>
            <input
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
                type="number"
                min="1"
                placeholder='Capacity'
            />
            <select
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                value={vehicleType}
                onChange={(e) => setvehicleType(e.target.value)}
                required
            >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Moto</option>
            </select>
        </div>
        

        <button className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Captain Account </button>
       <p className='text-center'>Already have an Account? <Link to={'/captain-login'} className="text-blue-600">Login</Link></p>
      </form>
    </div>
    <div>
     <p className='text-[10px]'>This site is protected by reCAPTCHA nad the <Link to={''} className='text-blue-600'>Privacy Policy</Link>
         and <Link to={''} className='text-blue-600'>Terms of Service</Link>.
     </p>
    </div>
    </div>
  )
}

export default CaptainSignUp
