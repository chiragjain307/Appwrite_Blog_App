import React from 'react'
import { Login as LoginComponent } from '../components'
import {Helmet} from "react-helmet";
function Login() {
  return (
    <>
    <Helmet>
        <title>Blog Login</title>
        <meta name="description" content="" />
      </Helmet>
    <div className='py-8'>
        <LoginComponent/ >
    </div>
    </>
  )
}

export default Login