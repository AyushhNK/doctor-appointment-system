import NavBar from '../NavFooter/NavBar'
import Footer from '../NavFooter/Footer'
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Departments=()=>{
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
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2">
								<img src="/images/department/department1.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>OPTHALMOLOGY</h1>
							<p>(आँखा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2">
								<img src="/images/department/department1.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>OPTHALMOLOGY</h1>
							<p>(आँखा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2">
								<img src="/images/department/department1.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>OPTHALMOLOGY</h1>
							<p>(आँखा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2">
								<img src="/images/department/department1.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>OPTHALMOLOGY</h1>
							<p>(आँखा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
						<div className="flex flex-col items-center h-[186px] w-[186px] bg-light_gray rounded-xl">
							<div className="h-[67px] w-[67px] bg-white rounded-xl flex items-center pl-2">
								<img src="/images/department/department1.png" alt="department1" className="h-[52px] w-[52px]"/>
							</div>
							<h1>OPTHALMOLOGY</h1>
							<p>(आँखा सम्बन्धित)</p>
							<button className="bg-orange rounded-xl p-2 text-white mt-4">Consult Now</button>
						</div>
					</div>
				</div>
			</div>
			<Footer/>

		</>
		)
}
export default Departments;