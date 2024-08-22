import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import "./App.css"

const Nav = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, [])
  
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/reg">Register</Link>
        <Link to="/reg">About</Link>
        {userName && <span className='wn'>Welcome, {userName}</span>}
    </nav>
  )
}

export default Nav