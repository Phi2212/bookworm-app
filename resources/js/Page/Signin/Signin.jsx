import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import Header from '../../component/Header'

function Signin() {
    return (
        <>
            <h1 className='text-center'> Sign In</h1>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </>
    )
}

export default Signin