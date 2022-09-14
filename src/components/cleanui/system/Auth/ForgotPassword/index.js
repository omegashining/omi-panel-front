import React, { useState } from 'react'
import { Input, Button, Form, notification, Alert } from 'antd'
import { Link } from 'react-router-dom'
import { MailOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { recovery } from 'services/api.user.service'
import { history } from 'index'

const mapStateToProps = ({ settings }) => ({
  logo: settings.logo,
})

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onFinish = async values => {
    setLoading(false)
    try {
      await recovery(values)
      notification.success({
        message: 'Solicitud',
        description: 'Se ha enviado la solicitud para la restauración de su contraseña.',
      })
      history.push('/auth/login')
    } catch (e) {
      if (e.code === 11000) {
        setError('No existe un usuario con el correo electrónico proporcionado.')
      } else {
        setError(`${e.message} (code: ${e.code})`)
      }
    }
    setLoading(false)
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
            <h6 className="subtitle">Ingrese su correo electrónico para cambiar su contraseña.</h6>
          </div>
          <div className="mb-2">
            <p>{error && <Alert closable message={error} type="error" showIcon />}</p>
          </div>
          <div className="form">
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mb-4"
              initialValues={{ email: '' }}
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
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="text-center w-100"
                loading={loading}
              >
                <strong>Enviar solicitud</strong>
              </Button>
            </Form>
            <Link to="/auth/login" className="kit__utils__link font-size-16">
              <i className="fe fe-arrow-left mr-1 align-middle" />
              Entrar
            </Link>
          </div>
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

export default connect(mapStateToProps)(ForgotPassword)
