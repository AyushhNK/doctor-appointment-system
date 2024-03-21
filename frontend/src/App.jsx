import {useState} from 'react'
import LoginPage from './components/Authorization/LoginPage'
import AppointmentForm from './components/HospitalService/AppointmentForm'
import HomePage from './components/MainPage/HomePage'
import AvailableHospitals from './components/HospitalService/AvailableHospitals'
import Departments from './components/HospitalService/Departments'
import Doctors from './components/HospitalService/Doctors'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginContext from './components/Contexts/LoginContext'

export default function App() {
  const [data,setData]=useState(null)
  return (
    <>
   	 	<LoginContext.Provider value={{data,setData}}>
	      <Router>
	      	<Routes>
	      		<Route path="/" element={
	      			<>
	      				{data?<HomePage/>:<LoginPage/>}
	      			</>
	      			}></Route>
	      			<Route path="/hospitals" element={
	      			<>
	      				{data?<AvailableHospitals/>:<LoginPage/>}
	      			</>
	      			}></Route>
	      			<Route path="/departments" element={
	      			<>
	      				{data?<Departments/>:<LoginPage/>}
	      			</>
	      			}></Route>
	      			<Route path="/doctors" element={
	      			<>
	      				{data?<Doctors/>:<LoginPage/>}
	      			</>
	      			}></Route>
	      			<Route path="/form" element={
	      			<>
	      				{data?<AppointmentForm/>:<LoginPage/>}
	      			</>
	      			}></Route>
	      	</Routes>
	      </Router>
	    </LoginContext.Provider>
      
    </>
  )
}


