import React, { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { requestCreateUser } from '../../app/redux/auth/authSlice'

// Components
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// Styles
import './style.scss'

export default function SignupPage() {
    // Global State
    const dispatch = useDispatch()

    // Local State
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const handleEmailChange = e => {
        setEmailValue(e.target.value)
    }

    const handlePasswordChange = e => {
        setPasswordValue(e.target.value)
    }

    const handleSignUp = e => {
        e.preventDefault()

        if (emailValue && passwordValue) {
            let body = {
                email: emailValue,
                password: passwordValue
            }

            dispatch(requestCreateUser(body))
        }
    }

    return (
        <div className='sign-up-container'>
            <h2 className='sign-up-title'>Sign Up to Movies App</h2>
            <Form className='sign-up-form'>

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
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}
