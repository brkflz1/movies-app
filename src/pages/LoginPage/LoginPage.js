import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './style.scss'

export default function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch()
  // let auth = useAuth();

  // Local State
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const handleEmailChange = e => {
    setEmailValue(e.target.value)
  }

  const handlePasswordChange = e => {
    setPasswordValue(e.target.value)
  }

  const handleLogin = e => {
    e.preventDefault()

    if (emailValue && passwordValue) {
      let body = {
        email: emailValue,
        password: passwordValue
      }

      // dispatch(loginUser(body))
    }
  }


  return (
    <div className='login-container'>
      <h2 className='login-title'>Login and Good to go</h2>
      <Form className='login-form'>

        <Form.Group className="mb-3" controlId="craete-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={emailValue}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="create-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleLogin}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
