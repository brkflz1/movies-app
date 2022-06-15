import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Images
import logo from '../../assets/images/logo.png'

// Styles
import './style.scss'

// Components
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'


export default function PublicPage() {
 // Global State
 const createUserData = useSelector(state => state.auth.createUserData)

  return (
    <div className='public-page-container'>
      <div className='greetings-container'>
        <img src={logo} alt='Logo' />
        <h2 className='greetings'>Hi, Welcome to the Movies App</h2>
      </div>

      {
        createUserData ? 
        <LoginPage />
        :
        <SignupPage />
      }
      
    </div>
  )
}
