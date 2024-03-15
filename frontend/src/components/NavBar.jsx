// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="ml-20 mr-20 flex items-center justify-between h-16" id="home">
        <div className="flex items-center">
          <img src="/images/MedSewa.png" alt="logo" className="pt-4" />
        </div>
        <div className="">
          <ul className="flex gap-16">
            <li>
            	Home
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="p-2 text-white bg-blue rounded-lg"><a href="/login">Login</a></button>
          <button className="p-2 text-white bg-blue rounded-lg"><a href="/register">Register</a></button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
