import LoginContext from './Contexts/LoginContext'
import React, { useContext } from 'react';

const Hello=()=>{
	const {data}=useContext(LoginContext)
	return (
		<>
			<h1>{data}</h1>
		</>
		)
}
export default Hello;