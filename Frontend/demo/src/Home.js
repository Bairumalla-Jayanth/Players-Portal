import React from 'react'
import Bnr from './Bnr'
import axios from "axios"
import './App.css'
import {  useEffect, useState } from "react"
const Home = () => {
  let [player,setplayer]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:5000/getplayer").then((res)=>{
            setplayer(res.data)
        })

    },[])
    return (
      <div>
        <Bnr />
  
        <div className="playerrcon">
          {
            player.map((item) => {
              return (
                <div className="player" key={item._id}>
                  <div className="pimg">
                    <img src={`http://localhost:5000/imgs/${item.pimg}`} alt={`${item.name}`} />
                    
                  </div>
                  <p>Name: {item.name}</p>
                  <p>Pos: {item.pos}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
export default Home