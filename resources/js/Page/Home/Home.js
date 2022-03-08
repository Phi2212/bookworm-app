import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Carousel from '../../component/Carousel'
import axios from 'axios';

function Home() {

  const [state, setState] = useState({
    listBook: []
  });
  useEffect(async () => {
    const getData = await axios.get('http://127.0.0.1:8000/api/book-carousel');

    setState({ listBook: getData.data })
  }, [])

  return (
    <>
      <Carousel list={state.listBook} />
      <div>
        <Button>
          Yes
        </Button>
      </div>
    </>
  )
}

export default Home