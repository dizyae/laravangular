<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;

use App\Http\Requests;

class Users extends Controller
{
    /**
     * Login a user and return a timestamp.
     *
     * @param  Request  $request
     * @return Response
     */
    public function login(Request $request) {
        $loginData = json_decode($request->getContent());
        
        try {
           $user = User::where('email', $loginData->email)->firstOrFail(); 
        } catch (\Exception $e) {
            abort(500, 'Invalid username');
        }
        
        if(\Hash::check($loginData->password, $user->password)) {
            return 'success';
        }

        abort(500, 'Invalid password');
    }
}
