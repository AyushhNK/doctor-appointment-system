import {useContext,useEffect} from 'react'
import NavBar from '../NavFooter/NavBar'
import Footer from '../NavFooter/Footer'
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
import LoginContext from '../Contexts/LoginContext' 
import scrollToTop from '../customhooks/useScrollToTop'

const Doctors=()=>{
	const {doctor,setDoctor}=useContext(LoginContext);

	scrollToTop()
	return (
		<>
			<NavBar/>
			<div>
				<div className="h-[384px] min-w-full">
					<img src="/images/department/hospital.png" alt="hospital3" className="w-full"/>
				</div>
				<div>
					<div className="flex flex-col w-full pr-10">
						<a href="#" className="text-black flex justify-end"><FaPhoneAlt className="text-black text-xl"/> 01-47438473</a>
						<a href="#" className="text-black flex justify-end"><MdLocationPin className="text-black text-xl"/> Birtamode, Biratnagar</a>
					</div>
					<h1 className="text-center text-[31px] font-medium">Doctors</h1>
					<div className="flex flex-wrap justify-around mx-40 my-10 gap-x-4 gap-y-4">
						<div className="h-[338px] w-[259px] bg-light_gray rounded-lg">
							<img src="/images/doctors/doctor1.png" alt="hospital1" className="py-4 pl-8"/>
							<div className="ml-6 gap-4">
								<h1 className="text-2xl">Dr Rakesh Agarwal</h1>
								<Link to="/form"><button onClick={()=>setDoctor('Dr Rakesh Agarwal')} className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button></Link>
							</div>
						</div>
						<div className="h-[338px] w-[259px] bg-light_gray rounded-lg">
							<img src="/images/doctors/doctor2.png" alt="hospital1" className="py-4 pl-8 h-[232px] w-[209px]"/>
							<div className="ml-6 gap-4">
								<h1 className="text-2xl">Dr Roshni Aryal</h1>
								<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
							</div>
						</div>
						<div className="h-[338px] w-[259px] bg-light_gray rounded-lg">
							<img src="/images/doctors/doctor3.png" alt="hospital1" className="py-4 pl-8 h-[232px] w-[209px]"/>
							<div className="ml-6 gap-4">
								<h1 className="text-2xl">Dr Ramesh Regmi</h1>
								<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
							</div>
						</div>
						<div className="h-[338px] w-[259px] bg-light_gray rounded-lg">
							<img src="/images/doctors/doctor4.png" alt="hospital1" className="py-4 pl-8 h-[232px] w-[209px]"/>
							<div className="ml-6 gap-4">
								<h1 className="text-2xl">Dr Ram Khatri</h1>
								<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
							</div>
						</div>
						<div className="h-[338px] w-[259px] bg-light_gray rounded-lg">
							<img src="/images/doctors/doctor5.png" alt="hospital1" className="py-4 pl-8 h-[232px] w-[209px]"/>
							<div className="ml-6 gap-4">
								<h1 className="text-2xl">Dr Ankita Neupane</h1>
								<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>

		</>
		)
}
export default Doctors;