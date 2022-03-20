<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SendEmailController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string'
        ]);

        return response(
            [
                'name' => $request->name,
                'phone' => $request->phone
            ],
        );
    }
}
