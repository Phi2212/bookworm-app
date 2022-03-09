import React from 'react'
import { Button, ButtonGroup, Card, Container, Row } from 'react-bootstrap'

function Feature({ list }) {
  const renderListItem = (list = []) => {
    return list.map((item) => {
      return (
        <Card className='col-md-3 me-4' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"/bookcover/" + item.book_cover_photo + ".jpg"} />
          <Card.Body>
            <Card.Title>{item.book_title}</Card.Title>
            <Card.Text>
              {item.author_name}
            </Card.Text>
            <Card.Text>
              {item.book_price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )
    })
  }
  
  return (
    <>
      <div className='text-center'>
        <h1>Featured Book</h1>
        <ButtonGroup aria-label="Basic example ">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>

        <Container>
          <Row>
            {renderListItem(list)}
          </Row>

        </Container>
      </div>
    </>
  )
}

export default Feature