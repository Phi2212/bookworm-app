import React from 'react'
import { Card, Dropdown, Nav, Pagination } from 'react-bootstrap'

function ListBook() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Sort by on sale
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Sort by on sale</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Sort by popularity</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Sort by price: low to high</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Sort by price: high to low</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    View 5
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">5</Dropdown.Item>
    <Dropdown.Item href="#/action-2">10</Dropdown.Item>
    <Dropdown.Item href="#/action-3">20</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </Nav>
        <br></br>
        <br></br>
        <br></br>
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
     
    </>
  )
}



export default ListBook