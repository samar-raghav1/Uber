import React from 'react'

const WaitingForDriver = (props) => {
  return (
      <div>
          <h5 onClick={()=>{
        props.setWaitingForDriver(false)
      }}
      className='p-1 text-center absolute w-[93%]  top-0'><i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i></h5>
     <div className='flex items-center jsutify-between'>
        <img className='h-20' src="https://tse3.mm.bing.net/th/id/OIP.15QiEd1-iYJ_8sDe77GUvgHaEK?w=956&h=537&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
           <div>
                <h2 className='text-lg font-medium'>Samar</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP37 AJ 5248</h4>
                <p className='text-sm text-gray-600'>Maruti Alto K10</p>
           </div>
     </div>
     <div className='flex gap-2 justify-between items-center flex-col'>
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
    </div>
    </div>
  )
}

export default WaitingForDriver
