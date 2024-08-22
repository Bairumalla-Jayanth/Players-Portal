import React from 'react'
import { useNavigate } from 'react-router-dom'
const Bnr = () => {
    let navigate = useNavigate()
    const goToAbout = () => {
    navigate('/about')
    }
    return (
        <div className = 'bnr'>
            <img src='https://i.pinimg.com/originals/bd/f6/72/bdf672a90fd5cb174e28fa50d04679c3.jpg' alt=''></img>
            <div className='bnrtext'>
                <h1>CHELSEA FOOTBALL CLUB</h1>
                <p>The training ground is located near Cobham in Surrey but sessions are not open to the general public. Instead special open days are occasionally organised at Stamford Bridge where fans can see the team train. </p>
                <button onClick={goToAbout} className="know-more-button">Know More</button>
            </div>
        </div>
    )
}
export default Bnr