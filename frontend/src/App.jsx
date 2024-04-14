import {useState} from 'react'
import LoginPage from './components/Authorization/LoginPage'
import RegisterPage from './components/Authorization/RegisterPage'
import AppointmentForm from './components/HospitalService/AppointmentForm'
import HomePage from './components/MainPage/HomePage'
import AvailableHospitals from './components/HospitalService/AvailableHospitals'
import Departments from './components/HospitalService/Departments'
import Doctors from './components/HospitalService/Doctors'
import Dashboard from './components/HospitalService/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginContext from './components/Contexts/LoginContext'

export default function App() {
  const [data,setData]=useState(null)
  const [doctor,setDoctor]=useState('')
  return (
    <>
   	 	<LoginContext.Provider value={{data,setData,doctor,setDoctor}}>
	      <Router>
	      	<Routes>
	      		<Route path="/" element={
	      			<>
	      				{/* <HomePage/> */}
	      				<Dashboard/>
	      			</>
	      			}></Route>
	      			<Route path="/login" element={
	      			<>
	      				{data ? <HomePage/>:<LoginPage/>}
	      			</>
	      			}></Route>
	      			<Route path="/register" element={
	      			<>
	      				<RegisterPage/>
	      			</>
	      			}></Route>
	      			<Route path="/hospitals" element={
	      			<>
	      				{data?<AvailableHospitals/>:<HomePage/>}
	      			</>
	      			}></Route>
	      			<Route path="/departments" element={
	      			<>
	      				{data?<Departments/>:<HomePage/>}
	      			</>
	      			}></Route>
	      			<Route path="/doctors" element={
	      			<>
	      				{data?<Doctors/>:<HomePage/>}
	      			</>
	      			}></Route>
	      			<Route path="/form" element={
	      			<>
	      				{data?<AppointmentForm/>:<HomePage/>}
	      			</>
	      			}></Route>
	      	</Routes>
	      </Router>
	    </LoginContext.Provider>

	    
      
    </>
  )
}


