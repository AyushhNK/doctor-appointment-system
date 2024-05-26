<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'patient_name' => 'required|string|max:255',
            'patient_no' => 'required',
            'address' => 'required|string|max:255',
            'gender' => 'required|string|max:10',
            'age' => 'required|integer|min:0',
            'charge' => 'required',
            'doctor_name' => 'required|string|max:255',
            'time' => 'required|string|max:255',
        ]);

        // Create a new Appointment instance and fill it with validated data
        $appointment = new Appointment($validatedData);

        // Save the appointment to the database
        $appointment->save();

        // Return a response (e.g., JSON response for an API or a redirect for a web form)
        return response()->json([
            'message' => 'Appointment saved successfully!',
            'appointment' => $appointment,
        ], 200);
    }
}
