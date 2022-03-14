import React from 'react'
import { Card, ListGroup, NavLink } from 'react-bootstrap'

function FilterSort() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <p>Filter By</p>
    <ListGroup.Item><NavLink>Category</NavLink></ListGroup.Item>
    <ListGroup.Item><NavLink>Author</NavLink></ListGroup.Item>
    <ListGroup.Item><NavLink>Category</NavLink></ListGroup.Item>
  </ListGroup>
</Card>
<br></br>
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <p>Rating Star</p>
    <ListGroup.Item><NavLink>1 Star</NavLink></ListGroup.Item>
    <ListGroup.Item><NavLink>2 Star</NavLink></ListGroup.Item>
    <ListGroup.Item><NavLink>3 Star</NavLink></ListGroup.Item>
    <ListGroup.Item><NavLink>4 Star</NavLink></ListGroup.Item>
    <ListGroup.Item><NavLink>5 Star</NavLink></ListGroup.Item>
  </ListGroup>
</Card>
    </>
  )
}

export default FilterSort