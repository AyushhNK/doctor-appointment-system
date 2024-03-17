import {useState} from 'react'
import LoginPage from './components/Authorization/LoginPage'
import AvailableHospitals from './components/AvailableHospitals'
import HomePage from './components/MainPage/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [data,setData]=useState(null)
  return (
    <>
      {/* {data?<HomePage data={data} setData={setData}/>:<LoginPage setData={setData}/>} */}
      <AvailableHospitals/>
      
    </>
  )
}