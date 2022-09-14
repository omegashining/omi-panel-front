import React  from 'react'
import { Alert, Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import { CalendarOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { preRegisterMedic } from "services/api.user.service";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import locale from "antd/es/date-picker/locale/es_ES";
import moment from "moment";

const PreRegisterMedic = ({ onSuccess }) => {
  const [sending, setSending] = React.useState(false)
  const [error, setError] = React.useState(false)

  const register = values => {
    setError( null );
    setSending( true );
    preRegisterMedic( values ).then( () => {
      setSending( false );
      onSuccess();
    } ).catch( err => {
      setSending( false );
      setError( `${err.message} (code: ${err.code})` )
    } )
  }

  return (
    <div>
      <div style={{ height: 400 }}>
        <div className="m-4">
          <p>{error && <Alert closable message={error} type="error" showIcon />}</p>
        </div>
        <Form
          requiredMark={false}
          onFinish={register}
          className="m-4"
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
          <Row>
            <Col xs={24} className="text-center mt-4">
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="text-center btn-warning"
                loading={sending}
              >
                <strong>Registrar</strong>
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}
const mapStateToProps = () => ({})

export default connect(mapStateToProps)(withRouter(PreRegisterMedic))
