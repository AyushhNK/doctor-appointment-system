<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $request->authenticate();
        // $request->session()->regenerate();
        $user = Auth::user();
        $token = $user->createToken('Token Name')->plainTextToken;
        $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;
        return response()->json([
            'message' => 'Successful Login',
            'user' => $user,
            'token' => $token,
        ]);
    }
}
