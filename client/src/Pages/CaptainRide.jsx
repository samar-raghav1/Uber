import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRide = () => {
    const [finishRidePanel,setFinishRidePanel]=useState(false)

    const finishRidePanelRef=useRef(null)

    useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)'
      })
      
      }},[finishRidePanel])
  return (
   <div className='h-screen relative'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className='w-16' src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" />
        <Link to={"/captain-home"} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full top-2 right-2'>
           <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
        
      <div className="h-4/5">
      <img className='h-full w-full object-cover' src="https://www.infomoney.com.br/wp-content/uploads/2019/06/uber.png?fit=900%2C1600&quality=50&strip=all" alt="" />
      </div>
     <div className='h-1/5 p-6 flex items-center relative justify-between bg-yellow-400 ' onClick={()=>{
        setFinishRidePanel(true)
     }}>
       <h5 onClick={()=>{
        setFinishRidePanel(true)
      }}
      className='p-1 text-center absolute w-[90%] top-0'><i className="text-3xl text-gray-900 ri-arrow-up-wide-line"></i></h5>
         <h4 className='text-xl font-semibold'>4 KM away</h4>
         <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
       </div>
        <div ref={finishRidePanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
    </div>
  )
}

export default CaptainRide
