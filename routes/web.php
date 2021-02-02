<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/hunt', function () {
    return view('hunt');
});

Route::get('/input', function() {
    return view('indice');
});

Route::post('indice', 'IndicesController@create');
