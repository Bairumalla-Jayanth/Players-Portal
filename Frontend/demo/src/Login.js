import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let [data,setData]=useState({"_id":"","pwd":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let login=()=>{
    axios.post("http://localhost:5000/login",data).then((res)=>{
      if(res.data.token===undefined)
      {
        setMsg(res.data.msg)
      }
      else{       
        localStorage.setItem('userName', res.data.name) 
        navigate("/")

      }
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='enter email' name="_id" onChange={fun} value={data._id}/>
        <input type='password' placeholder='enter password' name="pwd" onChange={fun} value={data.pwd}/>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login