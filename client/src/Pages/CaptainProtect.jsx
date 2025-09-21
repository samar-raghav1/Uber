import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainProtect = ({children}) => {
    const token=localStorage.getItem("token");
    const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
      if(!token){
        navigate("/captain-login")
      }
    },[token,navigate])
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(response=>{
      if(response.status===200){
        setIsLoading(false)
      }
    }).catch(err=>{
      console.log(err);
      localStorage.removeItem("token")
      navigate("/captain-login")
      
    })
    if(isLoading){
      return <div>Loading...</div>
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtect
