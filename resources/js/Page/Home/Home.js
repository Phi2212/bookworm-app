import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Carousel from '../../component/Carousel'
import axios from 'axios';
import Feature from '../../component/Feature';

function Home() {

  const [state, setState] = useState({
    listBookCarousel: [],
    listBookRecommend: []

  });

  useEffect(async () => {
    const getDataCarousel = await axios.get('http://127.0.0.1:8000/api/book-carousel');
    const getDataRecommended = await axios.get('http://127.0.0.1:8000/api/book-recommend');

    setState({listBookRecommend: getDataRecommended.data,listBookCarousel: getDataCarousel.data })
  }, [])
  console.log(state);

  return (
    <>
      <Carousel list={state.listBookCarousel} />


      <Feature list={state.listBookRecommend} />

    </>
  )
}

export default Home