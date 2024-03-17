<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Auth\Events\Registered;
use App\Models\User;
use Validator;

class RegisterController extends Controller
{


public function store(Request $request): JsonResponse
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'phone_number' => 'required|string|max:255|unique:users',
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);
    //validation error
    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'phone_number' => $request->phone_number,
        'password' => Hash::make($request->password),
    ]);
    // Check if user creation failed
    if (!$user) {
        return response()->json(['message' => 'Failed to create user'], 500);
    }
    // Return success message
    return response()->json(['message' => 'Registration successful', 'user' => $user], 201);
}
}
