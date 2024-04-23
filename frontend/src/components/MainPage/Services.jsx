import { Link } from 'react-router-dom';

const Services=()=>{
	return (
		<>
			<div className="h-screen bg-light_blue flex flex-col items-center gap-4 pt-2" id="services">
				<h1 className="text-white text-3xl text-center font-medium">SERVICES</h1>
				<h2 className="text-blue text-3xl">We Care About Your Health</h2>
				<p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Mauris malesuada gravida libero at tempus.</p>
				<div className="relative">
				    <img src="/images/services.png" alt="service" className="w-[700px] h-[400px]"/>
				    <h1 className="absolute bottom-0 left-0 text-white text-3xl font-medium mb-4 ml-4">Explore Our Services</h1>
				</div>
				<Link to="/dashboard">
	                <button className="bg-light_blue px-10 py-2 border-2 border-solid border-white rounded-full">Go To Dashboard</button>
	            </Link>

				

			</div>
		</>
		)
}
export default Services;