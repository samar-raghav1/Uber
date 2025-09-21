/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserProtectedWrapper = ({children}) => {

    const token=localStorage.getItem('token')
    const navigate=useNavigate();
    const {user,setUser}=useContext(UserDataContext)
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        if(!token){
            navigate("/login")
        }
    },[token, navigate]
    )
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(response=>{
      if(response.status===200){
        setUser(response.data.user)
        setIsLoading(false)
      }
    }).catch(err=>{
      console.log(err);
      localStorage.removeItem("token")
      navigate("/login")
      
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

export default UserProtectedWrapper
