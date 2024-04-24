import {useEffect} from 'react'
import NavBar from '../NavFooter/NavBar'
import Footer from '../NavFooter/Footer'
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
import scrollToTop from '../customhooks/useScrollToTop'

const Departments=()=>{
	
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
					<h1 className="text-center text-[31px] font-medium">Departments</h1>
					<div className="flex flex-wrap mx-40 gap-20 my-10">
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department1.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>OPTHALMOLOGY</h1>
							<p>(आँखा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department2.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>UROLOGY</h1>
							<p>(मृगौला सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department3.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>ENT</h1>
							<p>(नाक कान घाँटी)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department4.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>PSYCHIATRY</h1>
							<p>(मनोचिकित्सा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department5.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>CARDIOLOGY</h1>
							<p>(मुटु सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department6.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>DENTAL</h1>
							<p>(दाँत सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department7.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>ORTHOPEDIC</h1>
							<p>(हड्डी सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department8.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>PHYSIOTHERAPY</h1>
							<p>(शारीरिक सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department9.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>GASTROLOGY</h1>
							<p>(पेट सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department10.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>NEUROLOGY</h1>
							<p>(नसा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department11.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>PULMONOLOGY</h1>
							<p>(फोक्सो सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2 mt-2">
								<img src="/images/department/department12.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>GENERAL MEDICINE</h1>
							<p>(सामान्य चिकित्सा)</p>
							<Link to="/doctors"><button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button></Link>
						</div>

					</div>
				</div>
			</div>
			<Footer/>

		</>
		)
}
export default Departments;