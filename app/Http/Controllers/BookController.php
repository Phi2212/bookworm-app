<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $BookList = Book::all();
        return $BookList;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $CreateBook = new Book();
        $CreateBook ->category_id = $request->category_id;
        $CreateBook ->author_id = $request->author_id;
        $CreateBook ->book_title = $request->book_title;
        $CreateBook ->book_summary = $request->book_summary;
        $CreateBook ->book_price = $request->book_price;
        $CreateBook ->book_cover_photo = $request->book_cover_photo;
        $CreateBook -> save();
        return $CreateBook;

    }

    public function store2(Request $request)
    {
        //post
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Bookselect = Book::find($id);
        return $Bookselect;

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //put
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $BookDelete = Book::deleted($id);
        return $BookDelete;
        return "success";
    }
}
