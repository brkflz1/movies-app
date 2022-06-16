import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './style.scss'
import SignupPage from '../SignupPage/SignupPage'

export default function PublicPage() {
  // Global State
  const createUserData = useSelector(state => state.auth.createUserData)
  const navigate = useNavigate()

  useEffect(() => {
    if (createUserData) {
      navigate("/login", { replace: true })
    }
  }, [createUserData, navigate])

  return (
    <div className='public-page-container'>
      <div className='greetings-container'>
        <img src={logo} alt='Logo' />
        <h2 className='greetings'>Hi, Welcome to the Movies App</h2>
      </div>
      <SignupPage />
    </div>
  )
}
