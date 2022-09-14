import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Input, Button, Form, Alert, notification, Row, Col, DatePicker, Select, Spin } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  KeyOutlined,
  CalendarOutlined,
  EnvironmentOutlined
} from '@ant-design/icons'
import { history } from 'index'
import { getMedic, registerMedic } from 'services/api.user.service'
import locale from 'antd/es/date-picker/locale/es_ES'
// import style from '../style.module.scss'

const RegisterMedic = ({match: { params: { code } }}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [medic, setMedic] = useState({})

  useEffect(() => {
    getMedic(code).then(result => {
      const name = result.name.split(' ');
      setMedic( { ...result, name: name[0], lastname: name.slice(1).join(' ') } );
      setLoading( false );
    })
  }, [code])

  const onFinish = async values => {
    setLoading(false)
    try {
      await registerMedic(code, values)
      notification.success({
        message: 'Registro completado',
        description: 'Se ha enviado un mensaje de validación a tu correo',
      })
      history.push('/auth/login')
    } catch (e) {
      if (e.code === 11000) {
        setError('Ya existe un usuario con el mismo correo')
      } else {
        setError(`${e.message} (code: ${e.code})`)
      }
    }
    setLoading(false)
  }

  if (loading) return <Spin tip="Loading..." />

  return (
    <div>
      <div className="login-left-side">
        <div className="logo">
          <img src="/resources/images/logo.svg" alt="" />
        </div>

        <div className="vertical-center">
          <div className="text-center mb-5">
            <h1 className="title mb-5 px-3">
              <strong>Completar registro</strong>
            </h1>
            <h6 className="subtitle">
              Para poder completar el registro en <b>OmniGenomics</b> como Médico, debe proporcionar los
              siguientes datos
            </h6>
          </div>
          <div className="mb-2">
            <p>{error && <Alert closable message={error} type="error" showIcon />}</p>
          </div>
          <Form
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            initialValues={medic}
            className="mb-4"
          >
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="name"
                  rules={[{ required: true, message: 'El nombre es obligatorio' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Nombre completo"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="lastname"
                  rules={[{ required: true, message: 'Los apellidos son obligatorios' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Apellidos"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
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
                    placeholder="Correo electrónico"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="phone"
                  rules={[
                    { required: true, message: 'El telefono es obligatorio' },
                    {
                      type: 'regexp',
                      pattern: '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$',
                    },
                  ]}
                >
                  <Input
                    size="large"
                    addonBefore={<PhoneOutlined className="site-form-item-icon" />}
                    placeholder="Teléfono de contacto"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="birthday"
                  rules={[{ required: true, message: 'La fecha de nacimiento es obligatoria' }]}
                >
                  <Input.Group size="large">
                    <span className="ant-input-group-addon">
                      <CalendarOutlined className="site-form-item-icon" />
                    </span>
                    <Form.Item name="birthday" noStyle>
                      <DatePicker
                        size="large"
                        format="DD/MM/YYYY"
                        locale={locale}
                        style={{ width: '100%' }}
                        disabledDate={current => current && current > moment().endOf('day')}
                        placeholder="Fecha de nacimiento"
                      />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="sex"
                  rules={[{ required: true, message: 'El sexo biológico es obligatorio' }]}
                >
                  <Input.Group size="large">
                    <span className="ant-input-group-addon">
                      <CalendarOutlined className="site-form-item-icon" />
                    </span>
                    <Form.Item name="sex" noStyle>
                      <Select style={{ width: '100%' }} size="large" placeholder="Sexo biológico">
                        <Select.Option value="male">Hombre</Select.Option>
                        <Select.Option value="female">Mujer</Select.Option>
                      </Select>
                    </Form.Item>
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="rfc"
                  rules={[{ required: true, message: 'El RFC es obligatorio' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder="RFC"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="curp"
                  rules={[{ required: true, message: 'El CURP es obligatorio' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder="CURP"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="license"
                  rules={[{ required: true, message: 'La cédula profesional es obligatoria' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Cédula Profesional"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="speciality"
                >
                  <Input
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Especialidad"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="license_speciality"
                >
                  <Input
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Cédula Profesional de la Especialidad"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name={["address", "zipCode"]}
                  rules={[{ required: true, message: 'El Codigo Postal es obligatorio' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<EnvironmentOutlined className="site-form-item-icon" />}
                    placeholder="Codigo Postal del Consultorio"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name={["address", "locality"]}
                  rules={[{ required: true, message: 'La colónia es obligatoria' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<EnvironmentOutlined className="site-form-item-icon" />}
                    placeholder="Colónia"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name={["address", "street"]}
                  rules={[{ required: true, message: 'La calle es obligatoria' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<EnvironmentOutlined className="site-form-item-icon" />}
                    placeholder="Calle"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name={["address", "exterior"]}
                  rules={[{ required: true, message: 'El número exterior es obligatorio' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<EnvironmentOutlined className="site-form-item-icon" />}
                    placeholder="Número Exterior"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name={["address", "interior"]}
                  rules={[{ required: true, message: 'El número interior es obligatorio' }]}
                >
                  <Input
                    size="large"
                    addonBefore={<EnvironmentOutlined className="site-form-item-icon" />}
                    placeholder="Número Interior"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  hasFeedback
                  name="password"
                  rules={[{ required: true, message: 'La contraseña es obligatoria' }]}
                >
                  <Input.Password
                    size="large"
                    addonBefore={<KeyOutlined className="site-form-item-icon" />}
                    placeholder="Contraseña"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="confirm"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Por favor confirme su contraseña',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error('Las dos contraseñas deben ser iguales'))
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    size="large"
                    addonBefore={<KeyOutlined className="site-form-item-icon" />}
                    placeholder="Repetir contraseña"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ width: '350px' }}
              className="text-center"
              loading={loading}
            >
              <strong>Crear cuenta</strong>
            </Button>
          </Form>
          <div>
            <span className="mr-1">Al crear una cuenta usted acepta el</span>
            <a href="#" onClick={e => e.preventDefault()} className="kit__utils__link">
              Aviso de Privacidad
            </a>
          </div>
        </div>
        <div className="text-center pt-2 mb-auto">
          <span className="mr-2">¿Ya tiene una cuenta?</span>
          <Link to="/auth/login" className="kit__utils__link font-size-16">
            Entrar al sistema
          </Link>
        </div>
      </div>
      <div className="login-main-side">
        <img src="/resources/images/login.png" alt="" />
      </div>
    </div>
  )
}

export default withRouter(RegisterMedic)
