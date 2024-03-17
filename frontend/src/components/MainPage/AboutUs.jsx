import { FaClock } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { MdSick } from "react-icons/md";

const AboutUs=()=>{
	return(
		<>
			<div className="h-screen p-6" id="about-us">
        		<h1 className="text-blue text-3xl text-center font-medium mb-4">ABOUT US</h1>
        		<div className="flex flex-col items-center gap-4">
				    <div className="flex space-x-4">
				        <div className="h-[260px] w-[329px] rounded-3xl flex items-center flex-col justify-around p-4 text-center">
				        	<FaClock className="text-[72px] text-purple"/>
				        	<h2 className="text-blue text-3xl font-medium">24/7 service</h2>
				        	<p className="text-orange">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus.</p>
				        </div>
				        <div className="h-[260px] w-[329px] bg-light_blue rounded-3xl flex items-center flex-col justify-around p-4 text-center">
				        	<FaUsers className="text-[72px] text-purple"/>
				        	<h2 className="text-blue text-3xl font-medium">No physical queue</h2>
				        	<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus.</p>
				        </div>
				        <div className="h-[260px] w-[329px] rounded-3xl flex items-center flex-col justify-around p-4 text-center">
				        	<FaHospitalAlt className="text-[72px] text-purple"/>
				        	<h2 className="text-blue text-3xl font-medium">Proper hospital info</h2>
				        	<p className="text-orange">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus.</p>
				        </div>
				    </div>
				    <div className="flex space-x-4">
				        <div className="h-[260px] w-[329px] bg-light_blue rounded-3xl flex items-center flex-col justify-around p-4 text-center">
				        	<FaUserDoctor className="text-[72px] text-purple"/>
				        	<h2 className="text-blue text-3xl font-medium">Know the doctors</h2>
				        	<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus.</p>
				        </div>
				        <div className="h-[260px] w-[329px] rounded-3xl flex items-center flex-col justify-around p-4 text-center">
				        	<IoCard className="text-[72px] text-purple"/>
				        	<h2 className="text-blue text-3xl font-medium">Easy payments</h2>
				        	<p className="text-orange">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus.</p>
				        </div>
				        <div className="h-[260px] w-[329px] bg-light_blue rounded-3xl flex items-center flex-col justify-around p-4 text-center">
				        	<MdSick className="text-[72px] text-purple"/>
				        	<h2 className="text-blue text-3xl font-medium">Easy OPD Access</h2>
				        	<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus.</p>
				        </div>
				    </div>
				</div>

        	</div>
		</>
		)
}
export default AboutUs;