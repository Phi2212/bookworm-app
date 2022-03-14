import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FilterSort from '../../component/FilterSort'
import ListBook from '../../component/ListBook'

function Shop() {
  return (
    <>
      <Container>
        <div className='text-center'>
          <h1>Shop Page</h1>
        </div>


        <Row>
          <Col sm={4}>
          <FilterSort/>
          </Col>
          <Col sm={8}>
            <ListBook />
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Shop