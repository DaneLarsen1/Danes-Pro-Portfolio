import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    // Name validation
    if (!form.name) {
      isValid = false;
      newErrors.name = 'Name is required';
    }
    // Email validation
    if (!form.email) {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      isValid = false;
      setEmailError('Email address is invalid');
      newErrors.email = 'Email address is invalid';
    } else {
      setEmailError('');
    }
    // Message validation
    if (!form.message) {
      isValid = false;
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Email address is invalid');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle the form submission
      console.log('Form is valid! Send the request here.');
    }
  };

  return (
    <Container className="my-5 p-4 border rounded">
      <h2>Contact Me</h2>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter message"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
