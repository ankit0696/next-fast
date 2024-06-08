'use'


import React from 'react'
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

function SigninPage() {
  return (
    <>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </>
  )
}

export default SigninPage
