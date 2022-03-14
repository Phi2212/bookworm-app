<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\OrderController;
use App\Models\Book;
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

// Start Book Route
Route::resource('/book',BookController::class);

Route::post('/store2',[BookController::class,'store2']);

Route::get('book-of-category/{id}',[BookController::class,'category_book']);

Route::get('book-of-author/{id}',[BookController::class,'author_book']);

Route::get('/book-carousel',[BookController::class,'BookCarousel']);

Route::get('/book-recommend',[BookController::class,'BookRecommend']);

Route::get('/book-popular',[BookController::class,'BookPopular']);

Route::get('/sort-highest',[BookController::class,'Sort_highest']);

Route::get('/sort-lowest',[BookController::class,'Sort_lowest']);

Route::get('/sort-book-onsale',[BookController::class,'SortBookCarousel']);

Route::get('/sort-book-recommend',[BookController::class,'SortBookRecommend']);

Route::get('/sort-book-popular',[BookController::class,'SortBookPopular']);

// End Book Route

// Start Order Route
Route::resource('/order',OrderController::class);
// End Order Route

// Start User Route 
// End User Route