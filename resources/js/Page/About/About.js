import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    <>
      <Container>
        <Row>
          <h3>About us</h3>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className='text-center'>
              <h1>Welcome to BookWorm</h1>
            </div>
            <p>"BookWorm is an independent New York bookstore and language school with
              locations in Manhattan and Brooklyn. We specialize in travel books and language
              classes."</p>
          </Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>
            <div className='text-center'>
              <h3>Our Story</h3>
            </div>
            <p>IP address stands for Internet Protocol Address. An IP is a unique number assigned to
               all information technology connected devices such as printers, routers, modems, and even
                refrigerators. The IP address identifies and allows these devices the ability to 
                communicate with each other on an internal or external computer network. Any device that 
                transmits or receives internet traffic will be assigned an IP address.</p>
          </Col>
          <Col sm={3}>
            <div className='text-center'>
              <h3>Our Vision</h3>
            </div>
            <p>IP address stands for Internet Protocol Address. An IP is a unique number assigned to
               all information technology connected devices such as printers, routers, modems, and even
                refrigerators. The IP address identifies and allows these devices the ability to 
                communicate with each other on an internal or external computer network. Any device that 
                transmits or receives internet traffic will be assigned an IP address.</p>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default About