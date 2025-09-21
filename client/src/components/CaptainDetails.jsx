import React from 'react'

const CaptainDetails = () => {
  return (
      <>
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center justify-between gap-3'>
            <img className='h-10 w-10 rounded-full object-cover ' src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162179.jpg" alt="" />
            <h4 className='text-lg font-medium'>Harsh Patel</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹295.20</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>
       <div className='flex justify-center gap-5 p-6 bg-gray-100 rounded-xl items-start'>
        <div className='text-center'>
          <i className="ri-timer-2-line text-3xl mb-2 font-thin"></i>
          <h5 className='text-lg font-medium'>10:2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
          <i className="ri-speed-up-line text-3xl mb-2 font-thin"></i>
          <h5 className='text-lg font-medium'>10:2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
          <i className="ri-booklet-line text-3xl mb-2 font-thin"></i>
          <h5 className='text-lg font-medium'>10:2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
       </div>
       </>
  )
}

export default CaptainDetails
