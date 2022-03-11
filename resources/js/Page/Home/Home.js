import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import Carousel from '../../component/Carousel'
import axios from 'axios';
import Feature from '../../component/Feature';


function Home() {

  const [state, setState] = useState({
    listBookCarousel: [],
    listBookFeature: [],

    curFeature: 'Recommend',
  });

  useEffect(async () => {
    const getDataCarousel = await axios.get('http://127.0.0.1:8000/api/book-carousel');
    const getDataRecommended = await axios.get('http://127.0.0.1:8000/api/book-recommend');
 
    setState({listBookFeature: getDataRecommended.data,listBookCarousel: getDataCarousel.data, curFeature: "Recommend" })
  }, [])
  console.log(state);

  const changeFeature = async(type) =>{
    if(type ==='Recommend'){
      const getDataChange = await axios.get('http://127.0.0.1:8000/api/book-recommend');
      setState({
        ...state,listBookFeature:getDataChange.data,curFeature: 'Recommend'
      });
      return;
    }
    if(type ==='Popular'){
      const getDataChange = await axios.get('http://127.0.0.1:8000/api/book-popular');
      setState({
        ...state,listBookFeature:getDataChange.data,curFeature:'Popular'
      });
      return;
    }
  }
  return (
    <>
      <Carousel list={state.listBookCarousel} />
      <br></br>
      <div className='text-center'>
        <h1>Featured Book</h1>
        <ButtonGroup aria-label="Basic example ">
          <Button variant="primary" onClick={()=>changeFeature('Recommend')}>Recommend</Button>
          <Button variant="primary" onClick={()=>changeFeature('Popular')}>Popular</Button>
        </ButtonGroup>
      </div>
      <Feature list={state.listBookFeature} />

    </>
  )
}

export default Home