import React from 'react'

const LocationSearchPanel = (props) => {
  const locations= [
    "24B,near Kapoor's Cafe",
    "City Mall, MG Road",
    "Central Park, Sector 15",
    "Riverfront, Lakeview Avenue",
  ]
  return (
    <div>
     {
      locations.map((elem,index)=>{
      return <div key={index} onClick={()=>{
        props.setVehiclePanel(true)
        props.setPanelOpen(false)
      }} 
       className='flex items-center border-2  rounded-xl my-2 border-gray-100 active:border-black gap-4 m-2 p-3 active:border-2'>
         <h2 className='bg-[#eee] h-9 w-9 gap-4  rounded-full flex items-center justify-center'><i className="ri-map-pin-fill "></i></h2>
         <h4 className='font-medium'>{elem}</h4>
      </div>
      })
    }
    </div>
  )
}

export default LocationSearchPanel
