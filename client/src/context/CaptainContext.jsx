/* eslint-disable react-refresh/only-export-components */
import React, {createContext, useState } from 'react'
export const CaptainDataContext=createContext();
const CaptainContext = ({children}) => {
    const [captain,setCaptain]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const updateCaptain=(captainData)=>{
        setCaptain(captainData);
    }
    const value={
        captain,
        setCaptain,
        updateCaptain,
        error,
        isLoading,
        setError,
        setIsLoading
    }
  return (
    <div>
      <CaptainDataContext.Provider value={value}>   
        {children}
         </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
