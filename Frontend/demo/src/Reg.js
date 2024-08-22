
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"
import cors from 'cors'

const Reg = () => {
    let navigate=useNavigate()
    let [msg,setMsg]=useState("")
    let [data,setdata]=useState({"_id":"","name":"","pwd":"","gen":"","dob":"","state":""})
    let fun=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    let reg=()=>{
        axios.post("http://localhost:5000/reg",data).then((res)=>{
            if(res.data.msg=="reg done")
            {
                navigate("/login")
            }
            else{
                setMsg(res.data.msg)
            }

        })
    }
  return (
    <div className='formcon'>
        <div className='form'>
            <div className='msg'>{msg}</div>
            <input type='text' placeholder='enter e-mail' value={data._id} onChange={fun} name="_id"/>
            <input type='text' placeholder='enter name' value={data.name} onChange={fun} name="name"/>
            <input type='text' placeholder='enter state' value={data.state} onChange={fun} name="state"/>
            <input type='text' placeholder='enter gen' value={data.gen} onChange={fun} name="gen"/>
            <input type='password' placeholder='enter password' value={data.pwd} onChange={fun} name="pwd"/>
            <input type='date' placeholder='enter dob' value={data.dob} onChange={fun} name="dob"/>
            <button onClick={reg}>Register</button>
        </div>

    </div>
  )
}

export default Reg
