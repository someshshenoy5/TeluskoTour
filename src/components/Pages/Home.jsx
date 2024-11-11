import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    const handleClick=() => {
        navigate('/AddTour')
        }
  return (
    <div className='home'>
      <h1 className='home-header'>Welcome to Telusko Tours</h1>
      <button onClick={handleClick}>Add Tour</button>
    </div>
  )
}

export default Home
