import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function InfoBook() {
  return (
    <>
    <Container>
        <Row>
            <Col sm={8}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
            </Col>
            <Col sm={4}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default InfoBook