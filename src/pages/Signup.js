import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pages/styles/styles.css';


function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <Container>
        <Row>
            <Col md={6} className='signup__form--container' style={{marginTop: "-70px"}}>
                <Form style={{width: "100%"}}>
                    <h1>Create an account</h1>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder='Enter email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>  

                    <Form.Group>
                        <Button type='submit'>Login</Button>
                    </Form.Group>
                    <p className='pt-3'>Already have an account?<Link to="/login">Login</Link></p>
                </Form>
            </Col>
            <Col md={6} className="signup__image--container"></Col>
        </Row>
    </Container>
  )
}

export default Signup;