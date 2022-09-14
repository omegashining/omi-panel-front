import React from 'react'
import { Helmet } from 'react-helmet'
import ChangePassword from 'components/cleanui/system/Auth/ChangePassword'

const SystemForgotPassword = () => {
  return (
    <div>
      <Helmet title="Forgot Password" />
      <ChangePassword />
    </div>
  )
}

export default SystemForgotPassword
