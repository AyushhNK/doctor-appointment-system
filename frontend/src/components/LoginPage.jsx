import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center">
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
            <button className="bg-purple h-14 rounded-lg mt-8 text-white">
              Login
            </button>
          </form>
          <p className="mt-6 text-xl">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Register!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
