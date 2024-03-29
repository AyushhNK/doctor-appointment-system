import NavBar from '../NavFooter/NavBar';
import Footer from '../NavFooter/Footer';

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-100">
                <div className="max-w-4xl mx-auto py-8 px-4">
                    <ol className="list-decimal text-xl">
                        <li>
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Hospital Name:</p>
                                        <p className="text-lg font-medium">St. Mary's Hospital</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Doctor Name:</p>
                                        <p className="text-lg font-medium">Dr. John Doe</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Department:</p>
                                        <p className="text-lg font-medium">Cardiology</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Time:</p>
                                        <p className="text-lg font-medium">March 25, 2024 | 10:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Hospital Name:</p>
                                        <p className="text-lg font-medium">St. Mary's Hospital</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Doctor Name:</p>
                                        <p className="text-lg font-medium">Dr. John Doe</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Department:</p>
                                        <p className="text-lg font-medium">Cardiology</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Time:</p>
                                        <p className="text-lg font-medium">March 25, 2024 | 10:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Hospital Name:</p>
                                        <p className="text-lg font-medium">St. Mary's Hospital</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Doctor Name:</p>
                                        <p className="text-lg font-medium">Dr. John Doe</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Department:</p>
                                        <p className="text-lg font-medium">Cardiology</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-gray-600">Time:</p>
                                        <p className="text-lg font-medium">March 25, 2024 | 10:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>

                    </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;
