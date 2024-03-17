import NavBar from './NavFooter/NavBar'
import Footer from './NavFooter/Footer'
const AvalilableHospitals=()=>{
	return (
		<>
			<NavBar/>
			<div className="flex flex-wrap justify-around mx-40 my-10 gap-x-4 gap-y-4">
				<div className="h-[354px] w-[314px] bg-light_gray rounded-lg">
					<img src="/images/hospital1.png" alt="hospital1" className="p-4"/>
					<div className="ml-6 gap-4">
						<h1 className="text-[14px]">Birat Nursing Home</h1>
						<p className="text-[11px]">Biratnagar, Morang</p>
						<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
					</div>
					
				</div>
				<div className="h-[354px] w-[314px] bg-light_gray rounded-lg">
					<img src="/images/hospital2.png" alt="hospital1" className="p-4"/>
					<div className="ml-6 gap-4">
						<h1 className="text-[14px]">Birat Nursing Home</h1>
						<p className="text-[11px]">Biratnagar, Morang</p>
						<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
					</div>
					
				</div>
				<div className="h-[354px] w-[314px] bg-light_gray rounded-lg">
					<img src="/images/hospital3.png" alt="hospital1" className="p-4"/>
					<div className="ml-6 gap-4">
						<h1 className="text-[14px]">Birat Nursing Home</h1>
						<p className="text-[11px]">Biratnagar, Morang</p>
						<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
					</div>
					
				</div>
				<div className="h-[354px] w-[314px] bg-light_gray rounded-lg">
					<img src="/images/hospital4.png" alt="hospital1" className="p-4"/>
					<div className="ml-6 gap-4">
						<h1 className="text-[14px]">Birat Nursing Home</h1>
						<p className="text-[11px]">Biratnagar, Morang</p>
						<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
					</div>
					
				</div>
				<div className="h-[354px] w-[314px] bg-light_gray rounded-lg">
					<img src="/images/hospital5.png" alt="hospital1" className="p-4"/>
					<div className="ml-6 gap-4">
						<h1 className="text-[14px]">Birat Nursing Home</h1>
						<p className="text-[11px]">Biratnagar, Morang</p>
						<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
					</div>
					
				</div>
				<div className="h-[354px] w-[314px] bg-light_gray rounded-lg">
					<img src="/images/hospital6.png" alt="hospital1" className="p-4"/>
					<div className="ml-6 gap-4">
						<h1 className="text-[14px]">Birat Nursing Home</h1>
						<p className="text-[11px]">Biratnagar, Morang</p>
						<button className="bg-orange rounded-xl p-2 text-white mt-4">Book an appointment</button>
					</div>
					
				</div>
			</div>
			<Footer/>
		</>
		)
}
export default AvalilableHospitals;