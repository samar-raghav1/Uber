import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

  const ridePopUpPanelRef=useRef(null)
  const confirmRidePopUpPanelRef=useRef(null)
    useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
      
}},[ridePopUpPanel])

    useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }
      else{
        gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
      
}},[confirmRidePopUpPanel])

  return (
     <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className='w-16' src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" />
        <Link to={"/captain-login"} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full top-2 right-2'>
           <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
        
      <div className="h-3/5">
      <img className='h-full w-full object-cover' src="https://www.infomoney.com.br/wp-content/uploads/2019/06/uber.png?fit=900%2C1600&quality=50&strip=all" alt="" />
      </div>
       <div className='h-2/5 p-5'>
       <CaptainDetails/>
    </div>
    <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
      <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
    </div>
    <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
      <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
    </div>
    </div>
  )
}

export default CaptainHome
