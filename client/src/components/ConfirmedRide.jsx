import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
          <h5 onClick={()=>{
        props.setConfirmRidePanel(false)
      }}
      className='p-1 text-center absolute w-[93%]  top-0'><i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-3xl font-semibold mb-5'>Confirm your Ride</h3>
     <div className='flex gap-2 justify-between items-center flex-col'>
           <img className='h-20' src="https://tse3.mm.bing.net/th/id/OIP.15QiEd1-iYJ_8sDe77GUvgHaEK?w=956&h=537&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
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
     <button onClick={()=>{
        props.setVehicleFound(true)
        props.setConfirmRidePanel(false)
     }} className='w-full bg-green-600 text-white font-semibold p-2 mt-5'>Confirm</button>
    </div>
  )
}

export default ConfirmedRide
