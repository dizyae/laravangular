<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('{path?}', function () {
    return View::make('index');
});

// Route::get('/*', function () {
//     return View::make('index');
// });


Route::post('/api/users/login', 'Users@login');

Route::get('/api/rooms/{id?}', 'Rooms@index');
Route::post('/api/rooms', 'Rooms@store');
Route::post('/api/rooms/{id}', 'Rooms@update');
Route::delete('/api/rooms/{id}', 'Rooms@destroy');
