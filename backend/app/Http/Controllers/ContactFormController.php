<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Models\Form;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ContactFormRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactFormRequest $request)
    {
        // Validation passed, create the form entry
        Form::create($request->validated());

        // Optionally, you can return a success response or redirect
        return response()->json(['message' => 'Form submitted successfully']);
    }
}
