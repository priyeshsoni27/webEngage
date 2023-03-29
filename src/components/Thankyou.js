import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from "../assest/logo.png"

export const Thankyou = () => {

 const  location=useLocation()
    const data=location.state
  return (
    <div style={{alignItems:"center",justifyContent:"center"}}>
        <div>“Thanks a ton for taking out your precious time and for completing the survey"</div>
        <div>Email:-{data.email}</div>
        <div>Number:- {data.number}</div>
    </div>

  )
}
