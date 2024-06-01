import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavFooter/NavBar';
import Footer from '../NavFooter/Footer';
import background from '/images/doctors/Appointmentdoctor.png';
import LoginContext from '../Contexts/LoginContext';
import scrollToTop from '../customhooks/useScrollToTop';
import axios from 'axios';

const AppointmentForm = () => {
  const { data, doctor } = useContext(LoginContext);
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  scrollToTop();

  const BookFunc = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/book', {
        patient_name: data.user.name,
        patient_no: data.user.id,
        address,
        gender,
        age,
        doctor_name: doctor,
        charge: 'Rs 50',
        time,
      });
      if (response.status === 200) {
        console.log('Appointment booking successful');
        console.log(response.data);
        navigate('/'); // Redirect to home page after successful booking
      } else {
        console.log('Appointment booking failed');
      }
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 10; hour <= 17; hour++) {
      options.push(`${hour}:00`);
    }
    return options;
  };

  return (
    <>
      <NavBar />
      <div className="bg-cover bg-center flex items-center justify-center" style={{ height: '740px', backgroundImage: `url(${background})` }}>
        <div className="h-[650px] w-[1025px] bg-white opacity-85 flex flex-col justify-center items-center">
          <h1 className="text-[25px]">Book Your Appointment</h1>
          <div className="flex justify-around w-full mt-6">
            <div className="flex flex-col w-[410px] gap-4">
              <label htmlFor="name" className="pt-1 text-[14px] font-medium">Patient Name</label>
              <input type="text" id="name" value={data.user.name} readOnly className="border-b-2 border-gray focus:outline-none cursor-pointer" />

              <label htmlFor="patientNo" className="pt-1 text-[14px] font-medium">Patient No</label>
              <input type="text" id="patientNo" value={data.user.id} readOnly className="border-b-2 border-gray focus:outline-none cursor-pointer" />

              <label htmlFor="address" className="pt-1 text-[14px] font-medium">Address</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="border-b-2 border-gray focus:outline-none cursor-pointer" />

              <label className="pt-1 text-[14px] font-medium">Gender</label>
              <div className="flex items-center">
                <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} className="mr-2" />
                <label htmlFor="male" className="mr-6">Male</label>
                <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} className="mr-2" />
                <label htmlFor="female">Female</label>
              </div>

              <label htmlFor="age" className="pt-1 text-[14px] font-medium">Age</label>
              <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="border-b-2 border-gray focus:outline-none cursor-pointer" />
            </div>
            <div className="flex flex-col w-[410px] gap-4">
              <label htmlFor="doctorName" className="pt-1 text-[14px] font-medium">Doctor Name</label>
              <input type="text" id="doctorName" value={doctor} readOnly className="border-b-2 border-gray focus:outline-none cursor-pointer" />

              <label htmlFor="charge" className="pt-1 text-[14px] font-medium">Charge</label>
              <input type="text" id="charge" value="Rs 50" readOnly className="border-b-2 border-gray focus:outline-none cursor-pointer" />

              <label htmlFor="time" className="pt-1 text-[14px] font-medium">Available Time</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border-b-2 border-gray focus:outline-none cursor-pointer"
              >
                <option value="">Select Time</option>
                {generateTimeOptions().map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="bg-purple w-[406px] h-[65px] mt-8 text-white opacity-100 rounded-lg" onClick={BookFunc}>Book Online</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppointmentForm;
