import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import { KeyOutlined, MailOutlined } from '@ant-design/icons'
// import style from '../style.module.scss'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
  logo: settings.logo,
})

const Login = ({ dispatch, user /* , logo */ }) => {
  const onFinish = values => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className="login-left-side">
        <div className="logo">
          <img src="/resources/images/logo.svg" alt="" />
        </div>

        <div className="vertical-center">
          <div className="text-center mb-5">
            <h1 className="title mb-5 px-3">
              <strong>¡Bienvenido!</strong>
            </h1>
            <h6 className="subtitle">
              Ingrese a su cuenta para ver sus resultados, estudios, etc.
            </h6>
          </div>
          {/* <div className={`card ${style.container}`}>
            <div className="text-dark font-size-24 mb-3">
              <strong>Acceder a mi cuenta</strong>
            </div> */}
          <div className="form">
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mb-4"
              initialValues={{ email: '', password: '' }}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'El correo es obligatorio' },
                  { type: 'email', message: 'Debe introducir un correo valido' },
                ]}
              >
                <Input
                  size="large"
                  type="email"
                  addonBefore={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'La contraseña es obligatoria' }]}
              >
                <Input.Password
                  size="large"
                  addonBefore={<KeyOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Button
                type="primary"
                size="large"
                className="text-center w-100"
                htmlType="submit"
                loading={user.loading}
              >
                <strong>Entrar</strong>
              </Button>
            </Form>
            <Link to="/auth/forgot-password" className="kit__utils__link font-size-16">
              <strong>¿Olvidaste tu contraseña?</strong>
            </Link>
          </div>
          {/* </div> */}
          <div className="text-center pt-2 mb-auto">
            <span className="mr-2">Si aún no eres usuario, </span>
            <Link to="/auth/register" className="kit__utils__link font-size-16">
              <strong>regístrate aquí</strong>
            </Link>
          </div>
        </div>
      </div>

      <div className="login-main-side">
        <img src="/resources/images/login.png" alt="" />
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
