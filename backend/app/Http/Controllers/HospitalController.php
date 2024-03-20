<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use Illuminate\Http\Request;

class HospitalController extends Controller
{
    public function index()
    {
        $hospital = Hospital::all();
        return response()->json($hospital);
    }

    public function show(Hospital $hospital)
    {
        return response()->json($hospital);
    }
}
