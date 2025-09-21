import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
const Home = () => {
  const [pickUp,setPickUp]=useState("");
    const [destination,setDestination]=useState('');
    const [panelOpen,setPanelOpen]=useState(false)
    const panelRef=useRef(null)
    const vehiclePanelRef=useRef(null)
    const confirmRidePanelRef=useRef(null)
    const vehicleFoundRef=useRef(null)
    const waitingForDriverRef=useRef(null)
    const panelCloseRef=useRef(null)
    const [vehiclePanel,setVehiclePanel]=useState(false)
    const [confirmRidePanel,setConfirmRidePanel]=useState(false)
    const [vehicleFound,setVehicleFound]=useState(false)
    const [waitingForDriver,setWaitingForDriver]=useState(false)
  const submitHandler=(e)=>{
  
    e.preventDefault();

    setPickUp('')
    setDestination('')
  }

  useGSAP(function(){
   if(panelOpen){
     gsap.to(panelRef.current,{
      height:'70%',
     
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
   }else{
    gsap.to(panelRef.current,{
      height:'0%',
      
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
   }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
      
}},[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
      
}},[confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
      
}},[vehicleFound])
  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
      
}},[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
     <img className='w-16 absolute left-5 top-5  ' src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" />
     <div className='h-screen w-screen'>
      <img src="https://www.infomoney.com.br/wp-content/uploads/2019/06/uber.png?fit=900%2C1600&quality=50&strip=all" alt="" />
     </div>
     <div className='absolute flex flex-col justify-end  w-full  top-0 h-screen'>
     <div className='h-[30%] bg-white p-5 relative'>
      <h5 ref={panelCloseRef} onClick={()=>{
        setPanelOpen(false)
      }} className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line "></i></h5>
       <h4 className='text-3xl font-semibold'>Find a trip</h4>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <div  className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full "></div>
        <input value={pickUp} onClick={()=>{
          setPanelOpen(true)
        }}
        onChange={(e)=>{
          setPickUp(e.target.value)
        }} className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-4' type="text" placeholder='Add a pick-up location' />
        <input onClick={()=>{
          setPanelOpen(true)
        }}
          value={destination} onChange={(e)=>{
          setDestination(e.target.value) }}
          className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'  type="text" placeholder='Enter your destination'  />
      </form>
     </div>
     <div ref={panelRef} className=' h-0 bg-white '>
            <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
     </div>
     </div>

     <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 bg-white w-full px-3 py-10 translate-y-full pt-12'>
      <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
     </div>
     <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 bg-white w-full px-3 py-10 translate-y-full pt-12'>
      <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
     </div>
     <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 bg-white w-full px-3 py-10 translate-y-full pt-12'>
     <LookingForDriver setVehicleFound={setVehicleFound}/>
     </div>
     <div ref={waitingForDriverRef}  className='fixed z-10 bottom-0 bg-white w-full px-3 py-10 translate-y-full pt-12'>
     <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
     </div>
    </div>
  )
}

export default Home
