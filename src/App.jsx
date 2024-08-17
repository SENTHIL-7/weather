import { useState } from 'react'
import './App.css'
import {API_RESPONSE} from './constant/api.constant'

function App() {
  return (
    <>
    <img src={API_RESPONSE.current.weather_icons[0]} alt="image" />
    </>
  )
}

export default App
