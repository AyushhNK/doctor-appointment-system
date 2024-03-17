import { FaUserAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import background from '/images/telehealth.jpg'

const RegisterPage = ({gotoLogin}) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center bg-cover bg-center" style={{ height: `calc(142vh)`, backgroundImage: `url(${background})`,backgroundColor:`red` }}>
        <div className="lg:sticky lg:top-0">
          <img src="/images/doc.png" alt="doctor" />
        </div>
        <div className="flex flex-col items-center lg:w-1/2">
          <img src="/images/logo.png" alt="logo" />
          <h1 className="text-4xl font-semibold mt-8">Register Here!</h1>
          <p className="text-xl font-mono tracking-wide">
            New user? Enter the details below to register
          </p>
          <form className="flex flex-col w-full lg:w-2/3 mt-8">
          	<div className="relative">
              <label
                htmlFor="fullname"
                className="text-xl font-mono tracking-wide mt-4"
              >
                Full Name
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your full name..."
                  className="h-14 flex-grow rounded-md border border-gray-400 bg-white pl-4 pr-12 text-black focus:outline-none"
                />
                <FaUserAlt className="absolute right-4 text-3xl text-gray-500" />
              </div>
            </div>
            <div className="relative mt-6">
              <label
                htmlFor="phone"
                className="text-xl font-mono tracking-wide mt-4"
              >
                Phone No
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number..."
                  className="h-14 flex-grow rounded-md border border-gray-400 bg-white pl-4 pr-12 text-black focus:outline-none"
                />
                <FaPhone className="absolute right-4 text-3xl text-gray-500" />
              </div>
            </div>
            <div className="relative mt-6">
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
                  placeholder="Enter your password..."
                  className="h-14 flex-grow rounded-md border border-gray-400 bg-white pl-4 pr-12 text-black focus:outline-none"
                />
                <RiLockPasswordFill className="absolute right-4 text-3xl text-gray-500" />
              </div>
            </div>
            <div className="relative mt-6">
              <label
                htmlFor="confirmpassword"
                className="text-xl font-mono tracking-wide"
              >
                Confirm Password
              </label>
              <div className="flex items-center">
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Enter your password again..."
                  className="h-14 flex-grow rounded-md border border-gray-400 bg-white pl-4 pr-12 text-black focus:outline-none"
                />
                <FaLock className="absolute right-4 text-3xl text-gray-500" />
              </div>
            </div>
            <button className="bg-purple h-14 rounded-lg mt-8 text-white">
              Register
            </button>
          </form>
          <p className="mt-6 text-xl">
            Already have an account?{" "}
            <a href="#" className="text-purple hover:underline" onClick={gotoLogin}>
              Login!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;