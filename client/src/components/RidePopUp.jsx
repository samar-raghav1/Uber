import React from 'react'

const RidePopUp = (props) => {
  return (
      <div>
          <h5 onClick={()=>{
        props.setRidePopUpPanel(false)
      }}
      className='p-1 text-center absolute w-[93%]  top-0'><i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-3xl font-semibold mb-5'>New Ride Available!</h3>
      <div className='flex justify-between items-center mt-4 p-3 bg-yellow-400 rounded-lg'>
      <div className='flex items-center gap-3 '>
          <img className='h-12 w-12 rounded-full object-cover' src=" https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162179.jpg" alt="" />
        <h2 className='text-lg font-medium'>Harsh Patel</h2>
      </div>
      <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
   
     <div className="w-full mt-5">
      <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className='text-lg ri-map-pin-user-fill'></i>
        <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-base text-gray-600 -mt-1'>Kankariya talab,Ahemdabad</p>
        </div>
      </div>
      <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className='text-lg ri-map-pin-2-fill'></i>
        <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-base text-gray-600 -mt-1'>Kankariya talab,Ahemdabad</p>
        </div>
      </div>
      <div className='flex items-center gap-5 p-3 '>
        <i className='text-lg ri-currency-line'></i>
        <div>
            <h3 className='text-lg font-medium'>₹193.20</h3>
            <p className='text-base text-gray-600 -mt-1'>Cash Cash</p>
        </div>
      </div>
      
     </div>
       <div className='flex items-center w-full gap-5  justify-end'>
     <button onClick={()=>{
       props.setConfirmRidePopUpPanel(true)
     }} className='w- bg-green-600 text-white font-semibold p-2 mt-5 rounded-lg'>Accept</button>
     <button onClick={()=>{
       props.setRidePopUpPanel(false)
     }} className=' bg-gray-400 text-gray-900 font-semibold  p-2 mt-5 rounded-lg'>Ignore</button>
       </div>
    </div>
  )
}

export default RidePopUp
