<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $BookListAll = Book::all();
        return $BookListAll;
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

    public function category_book($id)
    {
        $category_book = DB::table('category') -> orderBy('id')-> get();
        $bookofcategory = DB::table('book')
        ->join('category','book.category_id','=','category.id')
        ->where('category_id',$id)
        ->get();
        return $bookofcategory;
    }

    public function author_book($id)
    {
        $author_book = DB::table('author') -> orderBy('id')-> get();
        $bookofauthor = DB::table('book')
        ->join('author','book.author_id','=','author.id')
        ->where('author_id',$id)
        ->get();
        return $bookofauthor;
    }

    public function BookCarousel(){
        $bookcarousel = DB::table('book')
        ->join('discount','book.id','=','discount.book_id')
        ->join('author','book.author_id','=','author.id')
        ->select('book.id','book.book_title','author.author_name','book.book_cover_photo','book.book_price','discount.discount_price')
        ->selectRaw('book.book_price-discount.discount_price as discount_sub')
        ->orderByDesc('discount_sub')
        ->limit(10)
        ->get();

        return $bookcarousel;
    }

    public function BookRecommend(){
        $book_recommend = DB::table('book')
        ->join('review','book.id','=','review.book_id')
        ->join('author','book.author_id','=','author.id')
        ->leftJoin('discount','book.id','=','discount.book_id')
        ->select('review.book_id','book.id','book.book_title','author.author_name','book.book_price','discount.discount_price')
        ->selectRaw('avg(review.rating_star) as rating_avg')
        ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
        ->groupBy('review.book_id','discount.discount_price','book.book_price')
        ->orderByDesc('rating_avg')
        ->orderBy('final_price')
        ->limit(8)
        ->get();

        return $book_recommend;
    }

    public function BookPopular(){
        $book_popular = DB::table('book')
        ->join('review','book.id','=','review.book_id')
        ->leftJoin('discount','book.id','=','discount.book_id')
        ->select('review.book_id')
        ->selectRaw('count(review.id) as reviews_each_book')
        ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
        ->groupBy('review.book_id','discount.discount_price','book.book_price')
        ->orderByDesc('reviews_each_book')
        ->orderBy('final_price')
        ->limit(8)
        ->get();

        return $book_popular;
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

    }
}
