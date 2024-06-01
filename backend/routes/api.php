<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\HospitalController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\AppointmentController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [RegisterController::class, 'store']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/book',[AppointmentController::class,'store']);
Route::get('get-appointment',[AppointmentController::class,'getAppointment']);
Route::delete('/appointments/{appointmentId}', [AppointmentController::class, 'deleteAppointment']);
Route::patch('/update-status/{appointmentId}',[AppointmentController::class,'updateStatus']);

