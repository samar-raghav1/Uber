import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={()=>{
        props.setVehiclePanel(false)
      }}
      className='p-1 text-center absolute w-[93%]  top-0'><i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className='flex w-full border-2 active:border-black rounded-xl items-center justify-between p-3 mb-2'>
        <img className='h-12' src="https://tse3.mm.bing.net/th/id/OIP.15QiEd1-iYJ_8sDe77GUvgHaEK?w=956&h=537&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <div className=' w-1/2'>
          <h4 className='font-medium text-base'>Uber Go <span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className='font-medium text-xs'>2 mins away</h5>
          <p className='font-medium text-xs'>Affordable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹193.20</h2>
      </div>
      <div className='flex w-full border-2 active:border-black rounded-xl items-center justify-between p-3 mb-2'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
        <div className=' w-1/2'>
          <h4 className='font-medium text-base'>Moto Go <span><i className="ri-user-3-fill"></i>1</span></h4>
          <h5 className='font-medium text-xs'>3 mins away</h5>
          <p className='font-medium text-xs'>Affordable, motorcycle rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹93.20</h2>
      </div>
      <div className='flex w-full border-2 active:border-black rounded-xl items-center justify-between p-3 mb-2'>
        <img className='h-12' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
        <div className=' w-1/2'>
          <h4 className='font-medium text-base'>Auto Go <span><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className='font-medium text-xs'>3 mins away</h5>
          <p className='font-medium text-xs'>Affordable, auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹113.20</h2>
      </div>

    </div>
  )
}

export default VehiclePanel
