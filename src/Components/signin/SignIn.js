
import React, { useState } from 'react'
import { Button, Form, Modal, Tab, Tabs } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import SignUp from '../signup/SignUp';
import './Tabs.scss'
const SignIn = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <div className=' d-flex flex-column align-items-center text-decoration-none text-white ' onClick={handleShow}>
                <span className='header-option-lineOne fw-light'>Hello Guest</span>
                <span className='header-option-lineTwo fs-5 fw-bold'>sign in</span>
            </div>

            <Modal show={show} onHide={handleClose}>
                {/* tabs */}
                <Tabs
                    defaultActiveKey="signin"
                    transition={false}
                    id="noanim-tab-example"
                    className="tab mb-3 d-flex align-items-center justify-content-center w-100"
                >
                    <Tab eventKey="signin" title="SIGN IN" className='abc'>
                        <Modal.Body>
                            <Form className='w-100 d-flex flex-column justify-content-center'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="secondary" type="submit" onClick={handleClose}>
                                    Submit
                                </Button>
                                <hr />

                                <Button variant="success" type="submit" className='mb-4' onClick={handleClose}>
                                    <span className="fa fa-google me-2"></span> Sign in With Google
                                </Button>
                                <Button variant="primary" type="submit" className='mb-4' onClick={handleClose}>
                                    <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                                </Button>
                               
                            </Form>
                        </Modal.Body>

                    </Tab>

                    <Tab eventKey="signup" title="SIGN UP">

                        <Modal.Body>
                            <Form className='w-100 d-flex flex-column justify-content-center'>
                                <Form.Group className="mb-2" controlId="formBasicUsername">
                                    <Form.Label>user name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter password" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" placeholder="re enter password" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="secondary" type="submit" onClick={handleClose}>
                                    Submit
                                </Button>

                                <hr />

                                <Button variant="success" type="submit" className='mb-2' onClick={handleClose}>
                                    <span className="fa fa-google me-2"></span> Sign in With Google
                                </Button>
                                <Button variant="primary" type="submit" className='mb-2' onClick={handleClose}>
                                    <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Tab>
                </Tabs>

            </Modal>
        </>
    );
}

export default SignIn