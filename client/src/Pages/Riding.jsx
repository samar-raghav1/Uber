import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to={"/home"} className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-2 right-2'>
            <i className="ri-home-5-line text-lg font-medium"></i>
        </Link>
      <div className="h-1/2">
      <img className='h-full w-full object-cover' src="https://www.infomoney.com.br/wp-content/uploads/2019/06/uber.png?fit=900%2C1600&quality=50&strip=all" alt="" />
      </div>
       <div className='h-1/2'>
        <div className='flex items-center justify-between p-2'>
        <img className='h-20' src="https://tse3.mm.bing.net/th/id/OIP.15QiEd1-iYJ_8sDe77GUvgHaEK?w=956&h=537&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
           <div>
                <h2 className='text-lg font-medium'>Samar</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP37 AJ 5248</h4>
                <p className='text-sm text-gray-600'>Maruti Alto K10</p>
           </div>
     </div>
        <div className="w-full mt-5">
      
      <div className='flex items-center gap-5 p-3 border-b-1'>
        <i className='text-lg ri-map-pin-2-fill'></i>
        <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-base text-gray-600 -mt-1'>Kankariya talab,Ahemdabad</p>
        </div>
      </div>
      <div className='flex items-center gap-5 p-3 border-b-1 '>
        <i className='text-lg ri-currency-line'></i>
        <div>
            <h3 className='text-lg font-medium'>₹193.20</h3>
            <p className='text-base text-gray-600 -mt-1'>Cash Cash</p>
        </div>
      </div>
      
     </div>
        <button className='w-full bg-green-600 text-white font-semibold p-2 mt-5 rounded-md'>Make a Payment</button>
    </div>
    </div>
   
  )
}

export default Riding
