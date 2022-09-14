import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import {
  Layout,
  Form,
  Button,
  Checkbox,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Card,
  Modal,
  notification,
  Spin,
} from 'antd'
import {
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  BuildOutlined,
} from '@ant-design/icons'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'
import Orders from '../orders'
import { history } from '../../index'
import RegisterOrder from '../orders/register'
import { getCurrent, update } from '../../services/api.user.service'
import TermsAndConditions from '../../components/extra/terms'
import PrivacyPolicy from '../../components/extra/privacy'

const { Header, Content, Sider } = Layout

const tabs = {
  orders: 0,
  medical: 1,
  info: 2,
}

const DigitalFileForm = ({
  match: {
    params: { tab },
  },
}) => {
  const current = tabs[tab]
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const [saving, setSaving] = useState(false)

  const load = () => {
    getCurrent()
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(error => {
        notification.warning({
          message: 'Usuario',
          description: `${error.message} (code: ${error.code})`,
        })
        setLoading(false)
      })
  }

  useEffect(() => {
    load()
  }, [])

  const save = data => {
    setSaving(true)
    update(data)
      .then(() => {
        setSaving(false)
        load()
        notification.success({
          message: 'Usuario',
          description: 'Información actualizada',
        })
      })
      .catch(error => {
        setSaving(false)
        notification.warning({
          message: 'Usuario',
          description: `${error.message} (code: ${error.code})`,
        })
      })
  }

  if (loading) return <Spin tip="Loading..." />

  return (
    <Layout>
      <Header className="files-header">
        <div className="header-options">
          <span className="selected-option">Pacientes</span>
        </div>
        {/* <div className="header-icons">
          <img src="/resources/images/head/lupa.svg" alt="Búsqueda" />
          <img src="/resources/images/head/carrito.svg" alt="Carrito" />
        </div> */}
      </Header>
      <Content>
        <div>
          <Helmet title="Inicio" />
          <div className="file">
            <div className="title">
              <span>Mi Expediente Digital</span>
            </div>

            <Row className="file-details">
              <Col sm={24} md={12}>
                <div className="file-detail-image">
                  <img src="/resources/images/forms/digital-file-cara.svg" alt="Usuario" />
                </div>
                <div className="file-detail">
                  <span className="name-detail">{user.name}</span>
                  <span>Email: {user.email}</span>
                  <span>Teléfono: {user.phone}</span>
                </div>
              </Col>
            </Row>

            <div className="file-container" style={{ clear: 'both' }}>
              <div className="file-sections">
                <div className={current === 0 ? 'selected-section' : 'section'}>
                  <Link onClick={() => history.push('/digital-file/orders')}>Pedidos</Link>
                </div>
                <div className={current === 1 ? 'selected-section' : 'section'}>
                  <Link onClick={() => history.push('/digital-file/medical')}>Su Médico</Link>
                </div>
                <div className={current === 2 ? 'selected-section' : 'section'}>
                  <Link onClick={() => history.push('/digital-file/info')}>Mis Datos</Link>
                </div>
              </div>
              <div className="file-content">
                {current === 0 && (
                  <>
                    <div className="content-title">
                      <span>Historial de órdenes</span>
                    </div>
                    <Row>
                      <Col sm={24} md={12} className="content-subtitle">
                        Realiza el registro de un nuevo kit
                      </Col>
                      <Col sm={24} md={12} className="content-button">
                        <Button
                          type="primary"
                          size="large"
                          onClick={() => setShowRegisterModal(true)}
                        >
                          <strong>Registrar Kit</strong>
                        </Button>
                      </Col>
                    </Row>
                    <Orders />
                  </>
                )}

                {current === 1 && (
                  <>
                    <div className="content-title">
                      <span>Consulta a tu Médico</span>
                    </div>
                    <Row>
                      <Col md={8}>
                        <Card className="option">
                          <div className="image-option">
                            <img
                              src="/resources/images/forms/digital-file-calendario.svg"
                              alt="Calendario"
                            />
                          </div>
                          <div className="detail-option">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor.
                          </div>
                          <div className="actions-option">
                            <Button type="primary" shape="round" size="large">
                              Agendar Cita
                            </Button>
                          </div>
                        </Card>
                      </Col>
                      <Col md={8}>
                        <Card className="option">
                          <div className="image-option">
                            <img
                              src="/resources/images/forms/digital-file-charla.svg"
                              alt="Calendario"
                            />
                          </div>
                          <div className="detail-option">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor.
                          </div>
                          <div className="actions-option">
                            <Button type="primary" shape="round" size="large">
                              Chatear con tu Médico
                            </Button>
                          </div>
                        </Card>
                      </Col>
                      <Col md={8}>
                        <Card className="option">
                          <div className="image-option">
                            <img
                              src="/resources/images/forms/digital-file-reloj.svg"
                              alt="Calendario"
                            />
                          </div>
                          <div className="detail-option">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor.
                          </div>
                          <div className="actions-option">
                            <Button type="primary" shape="round" size="large">
                              Historial clínico
                            </Button>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </>
                )}

                {current === 2 && (
                  <>
                    <div className="content-title">
                      <span>Mis Datos</span>
                    </div>
                    <div className="title-form">Datos Personales</div>
                    <Form
                      name="basic"
                      layout="vertical"
                      autoComplete="off"
                      initialValues={{ ...user }}
                      onFinish={save}
                      className="p-4"
                    >
                      <Row>
                        <Col xs={24}>
                          <Form.Item
                            hasFeedback
                            name="name"
                            label="Nombre Completo"
                            rules={[{ required: true, message: 'El nombre es obligatorio' }]}
                          >
                            <Input
                              addonBefore={<UserOutlined className="site-form-item-icon" />}
                              size="large"
                              className="w-100"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} xl={12}>
                          <Form.Item hasFeedback name="sex" label="Sexo">
                            <Input.Group size="large">
                              <span className="ant-input-group-addon">
                                <CalendarOutlined className="site-form-item-icon" />
                              </span>
                              <Form.Item name="sex" noStyle>
                                <Select
                                  style={{ width: '100%' }}
                                  size="large"
                                  placeholder="Sexo biológico"
                                >
                                  <Select.Option value="male">Hombre</Select.Option>
                                  <Select.Option value="female">Mujer</Select.Option>
                                </Select>
                              </Form.Item>
                            </Input.Group>
                          </Form.Item>
                        </Col>
                        <Col xs={24} xl={12}>
                          <Form.Item hasFeedback name="birthday" label="Fecha de Nacimiento">
                            <Input.Group size="large">
                              <span className="ant-input-group-addon">
                                <CalendarOutlined className="site-form-item-icon" />
                              </span>
                              <Form.Item name="birthday" noStyle>
                                <DatePicker
                                  size="large"
                                  format="YYYY-MM-DD"
                                  style={{ width: '100%' }}
                                  disabledDate={c => c && c > moment().endOf('day')}
                                  placeholder="Fecha de nacimiento"
                                />
                              </Form.Item>
                            </Input.Group>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} xl={12}>
                          <Form.Item hasFeedback name="email" label="Correo electrónico">
                            <Input
                              type="email"
                              addonBefore={<MailOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} xl={12}>
                          <Form.Item hasFeedback name="phone" label="Teléfono">
                            <Input
                              addonBefore={<PhoneOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} xl={12}>
                          <Form.Item
                            hasFeedback
                            name="state"
                            className="form-element"
                            label="Estado"
                          >
                            <Input
                              addonBefore={<BuildOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} xl={12}>
                          <Form.Item
                            hasFeedback
                            name="city"
                            className="form-element"
                            label="Ciudad"
                          >
                            <Input
                              addonBefore={<BuildOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <div className="form-check-small">
                        <Checkbox checked={user.agreement} disabled>
                          Estoy de acuerdo en el{' '}
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setShowPrivacyModal(true)
                            }}
                          >
                            Aviso de Privacidad
                          </a>{' '}
                          y acepto sin reservas.
                        </Checkbox>
                      </div>
                      <div className="form-check-small">
                        <Checkbox checked={user.terms} disabled>
                          Estoy de acuerdo en{' '}
                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              setShowTermsModal(true)
                            }}
                          >
                            Los Términos y Condiciones
                          </a>{' '}
                          y acepto sin reservas.
                        </Checkbox>
                      </div>
                      <div className="form-check-small">
                        <Checkbox>
                          Estoy de acuerdo en el <a href="#">Documento de Consentimiento</a> y
                          acepto sin reservas.
                        </Checkbox>
                      </div>
                      <Button
                        type="primary"
                        shape="round"
                        size="large"
                        htmlType="submit"
                        loading={saving}
                        className="form-button"
                      >
                        Guardar Cambios
                      </Button>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="Registrar Kit ID"
          visible={showRegisterModal}
          footer={null}
          onCancel={() => setShowRegisterModal(false)}
        >
          <RegisterOrder />
        </Modal>
      </Content>
      <Modal
        className="terms"
        visible={showTermsModal}
        width={1000}
        height={800}
        onCancel={() => setShowTermsModal(false)}
        footer={null}
      >
        <Layout>
          <Sider className="left-side" width={350}>
            <img src="/resources/images/forms/sign.svg" alt="Sign" className="mb-4" />
            <div className="title">Términos y Condiciones</div>
            <div className="description">
              Lea detenidamente y firme los siguientes documentos. No se procesarán muestras si no
              se adjunta el consentimiento firmado correspondiente
            </div>
          </Sider>
          <Layout>
            <Content className="main-side">
              <TermsAndConditions />
            </Content>
          </Layout>
        </Layout>
      </Modal>
      <Modal
        className="terms"
        visible={showPrivacyModal}
        width={1000}
        height={800}
        onCancel={() => setShowPrivacyModal(false)}
        footer={null}
      >
        <Layout>
          <Sider className="left-side" width={350}>
            <img src="/resources/images/forms/sign.svg" alt="Sign" className="mb-4" />
            <div className="title">Aviso de Privacidad</div>
            <div className="description">
              Lea detenidamente y firme los siguientes documentos. No se procesarán muestras si no
              se adjunta el consentimiento firmado correspondiente
            </div>
          </Sider>
          <Layout>
            <Content className="main-side">
              <PrivacyPolicy />
            </Content>
          </Layout>
        </Layout>
      </Modal>
    </Layout>
  )
}

export default withRouter(DigitalFileForm)
