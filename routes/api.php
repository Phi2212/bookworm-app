<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/book',BookController::class);
Route::post('/store2',[BookController::class,'store2']);
Route::resource('/order',OrderController::class);
Route::delete('/book/id', [BookController::class, 'destroy']);