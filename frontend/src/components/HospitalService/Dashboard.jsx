import { useEffect, useContext, useState } from 'react';
import NavBar from '../NavFooter/NavBar';
import Footer from '../NavFooter/Footer';
import scrollToTop from '../customhooks/useScrollToTop';
import LoginContext from '../Contexts/LoginContext';
import { IoCloseCircleSharp } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { data,setData } = useContext(LoginContext);
  const [appointments, setAppointments] = useState([]);
  const [status,setStatus]=useState(false)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/get-appointment');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (data.user.email === "admin@admin.com"){
          setAppointments(result.appointment);
        }
        else{
          const filteredAppointments = result.appointment.filter(appointment => appointment.patient_name === data.user.name);
          setAppointments(filteredAppointments);
        }
        setStatus(result.appointment)
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status]);

  const deleteAppointment = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/appointments/${id}`);
      if (response.status === 200) {
        console.log('Appointment deleted successfully');
        setAppointments(appointments.filter(appointment => appointment.id !== id)); // Remove the deleted appointment from state
      } else {
        console.log('Appointment deletion failed');
      }
    } catch (error) {
      console.error('Error during deletion:', error);
    }
  };

  const updateStatus = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:8000/api/update-status/${id}`);
      if (response.status === 200) {
        console.log('status changed successfully');
        setStatus(true)
      } else {
        console.log('status changing failed');
      }
    } catch (error) {
      console.error('Error during status changing:', error);
    }
  };

  const logoutFunc=()=>{
    setData(null)
  }

  scrollToTop();

  return (
    <>
      {data.user.email === "admin@admin.com"?
      <div className="px-20 flex items-center justify-between h-16 border-b border-gray shadow-lg" id="home">
        <div className="flex items-center">
          <img src="/images/MedSewa.png" alt="logo" className="pt-4" />
        </div>
        <div className="flex gap-4">
          {data?
            <>
              <button className="">{data.user.name}</button>
                <button className="p-2 text-white bg-blue rounded-lg" onClick={logoutFunc}>Logout</button>
              </>
              :
            <>
              <button className="p-2 text-white bg-blue rounded-lg"><a href="/login">Login</a></button>
                <button className="p-2 text-white bg-blue rounded-lg"><a href="/register">Register</a></button>
              </>

          }
          
        </div>
      </div>
      :
      <NavBar/>
    }
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {loading ? (
            <p className="text-gray-500 text-xl">Loading...</p>
          ) : error ? (
            <p className="text-red-500 text-xl">{error}</p>
          ) : (
            <div className="space-y-8">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="bg-white rounded-lg shadow-lg p-6 relative">
                  <button
                  onClick={() => deleteAppointment(appointment.id)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition duration-200"
                >
                  <IoCloseCircleSharp size={40} />
                </button>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Patient Name</span>
                      <span className="text-lg font-medium text-gray-900">{appointment.patient_name}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Patient No</span>
                      <span className="text-lg font-medium text-gray-900">{appointment.patient_no}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Address</span>
                      <span className="text-lg font-medium text-gray-900">{appointment.address}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Gender</span>
                      <span className="text-lg font-medium text-gray-900">{appointment.gender}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Age</span>
                      <span className="text-lg font-medium text-gray-900">{appointment.age}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Doctor Name</span>
                      <span className="text-lg font-medium text-gray-900">{appointment.doctor_name}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Time</span>
                      <span className="text-lg font-medium text-gray-900">{appointment.time}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Status</span>
                      <span className="text-lg font-medium text-gray-900">
                        {appointment.status === 0 ? 'Pending' : 'Accepted'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end mb-4">
                    {data.user.email === "admin@admin.com" && (
                      <div className="space-x-10">
                        <button onClick={() => updateStatus(appointment.id)} className="text-white bg-green-500 hover:bg-green-600 font-semibold py-2 px-4 rounded transition duration-200">
                          Accept
                        </button>
                        <button onClick={() => deleteAppointment(appointment.id)} className="text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded transition duration-200">
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
