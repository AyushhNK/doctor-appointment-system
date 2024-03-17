const NavBar = ({data,setData}) => {
	const logoutFunc=()=>{
		setData(null)
	}
  return (
    <>
      <div className="px-20 flex items-center justify-between h-16 border-b border-gray shadow-lg" id="home">
        <div className="flex items-center">
          <img src="/images/MedSewa.png" alt="logo" className="pt-4" />
        </div>
        <div className="">
          <ul className="flex gap-16">
            <li>
            	<a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
        	{data?
        		<>
	        		<button className="">{data.name}</button>
	          		<button className="p-2 text-white bg-blue rounded-lg" onClick={logoutFunc}>Logout</button>
	          	</>
	          	:
        		<>
	        		<button className="p-2 text-white bg-blue rounded-lg"><a href="/login">Login</a></button>
	          		<button className="p-2 text-white bg-blue rounded-lg"><a href="/register">Register</a></button>
	          	</>

        	}
          
        </div>
      </div>
    </>
  );
};

export default NavBar;
