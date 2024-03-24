import {useContext} from 'react'
import NavBar from '../NavFooter/NavBar'
import Footer from '../NavFooter/Footer'
import background from '/images/doctors/Appointmentdoctor.png'
import LoginContext from '../Contexts/LoginContext' 

const AppointmentForm=()=>{
	const {data,doctor}=useContext(LoginContext)

	const BookFunc = async (event) => {
	  event.preventDefault();
	  try {
	    const response = await axios.post('http://localhost:8000/api/book', {
	      patient_name,
	      patient_no,
	      address,
	      gender,
	      age,
	      doctor_name,
	      charge,
	      time
	    });
	    if (response.status === 200) {
	      console.log('Appointment booking successful');
	      console.log(response.data)
	    } else {
	      console.log('Appointment booking failed');
	    }
	  } catch (error) {
	    console.error('Error during booking:', error);
	  }
	};

	return (
		<>
			<NavBar/>
			<div className="bg-cover bg-center flex items-center justify-center" style={{ height: `740px`, backgroundImage: `url(${background})` }}>
				<div className="h-[650px] w-[1025px] bg-white opacity-85 flex flex-col justify-center items-center">
					<h1 className="text-[25px]">Book Your Appointment</h1>
					<div className="flex justify-around w-full mt-6">
						<div className="flex flex-col w-[410px] gap-4">
							<label htmlFor="name" className="pt-1 text-[14px] font-medium">Patient Name</label>
				            <input type="text" value={data.user.name} className="border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="email" className="pt-1 text-[14px] font-medium">Patient No</label>
				            <input type="text" value={data.user.id} className="border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="subject" className="pt-1 text-[14px] font-medium">Address</label>
				            <input type="text" className="border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="message" className="pt-1 text-[14px] font-medium">Gender<br/>
					            <input type="radio" id="male" name="gender" value="male" className="mt-6"/>
								<label for="male" className="mr-6">Male</label>
								<input type="radio" id="female" name="gender" value="female"/>
								<label for="female">Female</label>
				           	</label>
				            <label htmlFor="message" className="pt-1 text-[14px] font-medium">Age</label>
				            <input type="text" className="border-b-2 border-gray focus:outline-none cursor-pointer"/>
						</div>
						<div className="flex flex-col w-[410px] gap-4">
							<label htmlFor="name" className="pt-1 text-[14px] font-medium">Doctor Name</label>
				            <input type="text" value={doctor} className="border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="email" className="pt-1 text-[14px] font-medium">Charge</label>
				            <input type="text" value='Rs 50' className="border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="subject" className="pt-1 text-[14px] font-medium">Availabe Time</label>
				            <input type="text" className="border-b-2 border-gray focus:outline-none cursor-pointer"/>
						</div>
					</div>
					<button className="bg-purple w-[406px] h-[65px] mt-8 text-white opacity-100 rounded-lg">Book Online</button>
				</div>
			</div>

			<Footer/>

		</>
		)
}
export default AppointmentForm;