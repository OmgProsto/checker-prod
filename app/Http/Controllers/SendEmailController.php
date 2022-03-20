<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SendEmailController extends Controller
{
    public function __invoke(Request $request)
    {
        return response(
            [
                'status' => $request->name
            ],
        );
    }
}
