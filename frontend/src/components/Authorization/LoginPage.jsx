import {useState,useContext} from 'react';
import RegisterPage from './RegisterPage'
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import background from '/images/telehealth.jpg'
import LoginContext from '../Contexts/LoginContext'
import axios from 'axios'
import Loader from './Loader'

const LoginPage = () => {
	const {setData}=useContext(LoginContext);
	const [register,setRegister]=useState(false)
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')
	const [error,setError]=useState(false)
	const [loading,setLoading]=useState(false)
	

	const LoginFunc = async (event) => {
	  event.preventDefault();
	  setLoading(true)
	  try {
	    const response = await axios.post('http://localhost:8000/api/login', {
	      email,
	      password,
	    });
	    if (response.status === 200) {
	      console.log('login successful');
	      console.log(response.data)
	      setData(response.data);

	      setLoading(false)
	    } else {
	      console.log('login failed');
	      setLoading(false)
	    }
	  } catch (error) {
	    console.error('Error during login:', error);
	    setError(true);
	    setLoading(false)
	  }
	};
  return (
    <>
    	{loading && <Loader/>}
    	{!loading &&
	    	<>
	    	{register?
	    		<RegisterPage/>
	    		:
			      <div className="min-h-screen flex flex-col lg:flex-row items-center bg-cover bg-center" style={{ height: `calc(100vh)`, backgroundImage: `url(${background})`,backgroundColor:`red` }}>
			        <div className="lg:sticky lg:top-0">
			          <img src="/images/doc.png" alt="doctor" />
			        </div>
			        <div className="flex flex-col items-center lg:w-1/2">
			          <img src="/images/logo.png" alt="logo" />
			          <h1 className="text-4xl font-semibold mt-8">Welcome Back!</h1>
			          <p className="text-xl font-mono tracking-wide">
			            Please, enter your details below to login.
			          </p>
			          
			          <form className="flex flex-col w-full lg:w-2/3 mt-8">
			          	{error && <p className="text-red-700 text-xl pb-6">The login credentials are incorrect!!!!</p>}
			            <div className="relative">
			              <label
			                htmlFor="email"
			                className="text-xl font-mono tracking-wide mt-4"
			              >
			                Email
			              </label>
			              <div className="flex items-center">
			                <input
			                  type="email"
			                  name="email"
			                  onChange={(e)=>setEmail(e.target.value)}
			                  placeholder="Enter your email..."
			                  className="h-14 flex-grow rounded-md border border-gray-400 bg-white pl-4 pr-12 text-black focus:outline-none"
			                />
			                <MdAlternateEmail className="absolute right-4 text-3xl text-gray-500" />
			              </div>
			            </div>
			            <div className="relative mt-6">
			              <label
			                htmlFor="password"
			                className="text-xl font-mono tracking-wide"
			              >
			                Password
			              </label>
			              <div className="flex items-center">
			                <input
			                  type="password"
			                  name="password"
			                  onChange={(e)=>setPassword(e.target.value)}
			                  placeholder="Enter your password..."
			                  className="h-14 flex-grow rounded-md border border-gray-400 bg-white pl-4 pr-12 text-black focus:outline-none"
			                />
			                <RiLockPasswordFill className="absolute right-4 text-3xl text-gray-500" />
			              </div>
			            </div>
			            <button className="bg-purple h-14 rounded-lg mt-8 text-white" onClick={LoginFunc}>
			              Login
			            </button>
			          </form>
			          {/* <button onClick={LoginFunc}>click</button> */}
			          <p className="mt-6 text-xl">
			            Don't have an account?{" "}
			            <a href="/register" className="text-purple hover:underline">
			              Register!
			            </a>
			          </p>
			        </div>
			      </div>
	      }
	  </>
	  }
    </>
  );
};

export default LoginPage;
