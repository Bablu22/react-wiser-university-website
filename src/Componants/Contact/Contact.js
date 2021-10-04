import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    const home = <FontAwesomeIcon className='fs-5 me-3 ' icon={faHome} />
    const phone = <FontAwesomeIcon className='fs-5 me-3 ' icon={faPhone} />
    const email = <FontAwesomeIcon className='fs-5 me-3 ' icon={faEnvelope} />
    return (
        <div>
            <div className="section-banner">
                <div className="overlay">
                    <h2>Contact Us</h2>
                </div>

            </div>

            <div className="contact-area">
                <div className="container">
                    <div className="row p-5 my-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-5">
                            <div className="d-flex ">
                                <div>{home}</div>
                                <div>
                                    <h5>Dhaka,Bangladesh</h5>
                                    <p>Gulshan Avenue</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>{phone}</div>
                                <div>
                                    <h5>00 (440) 9865 562</h5>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <div>{email}</div>
                                <div>
                                    <h5>support@gmail.com</h5>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Enter Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Subject" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button className="btn lern-btn text-white" variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;