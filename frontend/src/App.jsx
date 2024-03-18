import {useState} from 'react'
import LoginPage from './components/Authorization/LoginPage'
import AppointmentForm from './components/HospitalService/AppointmentForm'
import HomePage from './components/MainPage/HomePage'
import AvailableHospitals from './components/HospitalService/AvailableHospitals'
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
	      	</Routes>
	      </Router>
	    </LoginContext.Provider>
      
    </>
  )
}




// import { useContext } from 'react';
// import LoginPage from './components/Authorization/LoginPage';
// import AppointmentForm from './components/HospitalService/AppointmentForm';
// import HomePage from './components/MainPage/HomePage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import LoginContext from './components/Contexts/LoginContext';
// import Hello from './components/Hello'
// 
// export default function App() {
//   const [data, setData] = useState("hello name");
// 
//   return (
//       <LoginContext.Provider value={{ data, setData }}>
//           <Hello/>
//       </LoginContext.Provider>
//   );
// }
