import {useState} from 'react'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [data,setData]=useState(null)
  return (
    <>
      {data?<HomePage data={data} setData={setData}/>:<LoginPage setData={setData}/>}
    </>
  )
}