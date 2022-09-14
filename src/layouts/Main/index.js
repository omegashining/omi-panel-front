import React, { useEffect } from 'react'
import { Layout, Modal, Button, Checkbox, Form, Input } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
// import TopBar from 'components/cleanui/layout/TopBar'
// import SignatureCanvas from 'react-signature-canvas'
// import Breadcrumbs from 'components/cleanui/layout/Breadcrumbs'
// import Sidebar from 'components/cleanui/layout/Sidebar'
import { MailOutlined, UserOutlined } from '@ant-design/icons'
import Menu from 'components/cleanui/layout/Menu'
// import Footer from 'components/cleanui/layout/Footer'
import TermsAndConditions from '../../components/extra/terms'
import PrivacyPolicy from '../../components/extra/privacy'

const { Sider, Content } = Layout

const inactivityTime = () => {
  window.onload = resetTimer
  // DOM Events
  document.onmousemove = resetTimer
  document.onkeypress = resetTimer
  function resetTimer() {
    clearTimeout(window.timer)
    window.timer = setTimeout(() => {
      localStorage.removeItem('token')
      window.location = '#/auth/login'
    }, 60 * 1000 * 10)
  }
}

const mapStateToProps = ({ settings, dispatch, user }) => ({
  isContentMaxWidth: settings.isContentMaxWidth,
  isAppMaxWidth: settings.isAppMaxWidth,
  isGrayBackground: settings.isGrayBackground,
  isSquaredBorders: settings.isSquaredBorders,
  isCardShadow: settings.isCardShadow,
  isBorderless: settings.isBorderless,
  isTopbarFixed: settings.isTopbarFixed,
  isGrayTopbar: settings.isGrayTopbar,
  dispatch,
  user,
})

const MainLayout = ({
  children,
  isContentMaxWidth,
  isAppMaxWidth,
  isGrayBackground,
  isSquaredBorders,
  isCardShadow,
  isBorderless,
  // isTopbarFixed,
  // isGrayTopbar,
  dispatch,
  user,
}) => {
  const [disabledTerms, setDisabledTerms] = React.useState(true)
  const [disabledAgreement, setDisabledAgreement] = React.useState(true)

  useEffect(() => {
    inactivityTime()
  }, [])

  const acceptAgreement = () => {
    dispatch({
      type: 'user/ACCEPT_AGREEMENT',
      payload: {
        userId: user.id,
      },
    })
  }

  const acceptTerms = () => {
    dispatch({
      type: 'user/ACCEPT_TERMS',
      payload: {
        userId: user.id,
      },
    })
  }

  return (
    <div className={classNames({ cui__layout__grayBackground: isGrayBackground })}>
      <Layout
        className={classNames({
          cui__layout__contentMaxWidth: isContentMaxWidth,
          cui__layout__appMaxWidth: isAppMaxWidth,
          cui__layout__grayBackground: isGrayBackground,
          cui__layout__squaredBorders: isSquaredBorders,
          cui__layout__cardsShadow: isCardShadow,
          cui__layout__borderless: isBorderless,
        })}
      >
        {/* <Sidebar /> */}
        <Menu />
        <Layout>
          {/* <Layout.Header
            className={classNames('cui__layout__header', {
              cui__layout__fixedHeader: isTopbarFixed,
              cui__layout__headerGray: isGrayTopbar,
            })}
          >
            <TopBar />
          </Layout.Header> */}
          <Layout.Content style={{ height: '100%', position: 'relative' }}>
            <div className="cui__utils__content" style={{ padding: 0 }}>
              {children}
            </div>

            <Modal
              className="terms"
              visible={!user.terms && user.role === 'user'}
              width={1000}
              height={800}
              isOpen={!user.terms && user.role === 'user'}
              onClose={e => {
                e.stopPropagation()
              }}
              footer={[
                <Button
                  key="submit"
                  type="primary"
                  loading={user.loading}
                  disabled={disabledTerms}
                  onClick={acceptTerms}
                >
                  Aceptar
                </Button>,
              ]}
            >
              <Layout>
                <Sider className="left-side" width={350}>
                  <img src="/resources/images/forms/sign.svg" alt="Sign" className="mb-4" />
                  <div className="title">Términos y Condiciones</div>
                  <div className="description">
                    Lea detenidamente y firme los siguientes documentos. No se procesarán muestras
                    si no se adjunta el consentimiento firmado correspondiente
                  </div>
                </Sider>
                <Layout>
                  <Content className="main-side">
                    <TermsAndConditions />
                    <Form layout="vertical" hideRequiredMark className="mb-4">
                      <Form.Item
                        hasFeedback
                        name="name"
                        rules={[
                          { required: true, message: 'El nombre es obligatorio' },
                          {
                            validator: async (_, value) => {
                              if (value !== user.name)
                                throw new Error('El nombre no coincide con el que se registró.')
                              return value
                            },
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          addonBefore={<UserOutlined className="site-form-item-icon" />}
                          placeholder="Nombre completo"
                        />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        rules={[
                          { required: true, message: 'El correo es obligatorio' },
                          { type: 'email', message: 'Debe introducir un correo valido' },
                          {
                            validator: async (_, value) => {
                              if (value !== user.email)
                                throw new Error('El correo no coincide con el que se registró.')
                              return value
                            },
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="email"
                          addonBefore={<MailOutlined className="site-form-item-icon" />}
                          placeholder="Correo electrónico"
                        />
                      </Form.Item>
                      <Checkbox
                        onChange={event => setDisabledTerms(!event.target.checked)}
                        style={{ margin: '0 auto' }}
                      >
                        Acepto los términos y condiciones
                      </Checkbox>
                    </Form>
                  </Content>
                </Layout>
              </Layout>
            </Modal>
            <Modal
              className="terms"
              visible={!user.agreement && user.role === 'user'}
              width={1000}
              height={800}
              isOpen={!user.agreement && user.role === 'user'}
              onClose={e => {
                e.stopPropagation()
              }}
              footer={[
                <Button
                  key="submit"
                  type="primary"
                  loading={user.loading}
                  disabled={disabledAgreement}
                  onClick={acceptAgreement}
                >
                  Aceptar
                </Button>,
              ]}
            >
              <Layout>
                <Sider className="left-side" width={350}>
                  <img src="/resources/images/forms/sign.svg" alt="Sign" className="mb-4" />
                  <div className="title">Aviso de Privacidad</div>
                  <div className="description">
                    Lea detenidamente y firme los siguientes documentos. No se procesarán muestras
                    si no se adjunta el consentimiento firmado correspondiente
                  </div>
                </Sider>
                <Layout>
                  <Content className="main-side">
                    <PrivacyPolicy />
                    <Form layout="vertical" hideRequiredMark className="mb-4">
                      <Form.Item
                        hasFeedback
                        name="name"
                        rules={[
                          { required: true, message: 'El nombre es obligatorio' },
                          {
                            validator: async (_, value) => {
                              if (value !== user.name)
                                throw new Error('El nombre no coincide con el que se registró.')
                              return value
                            },
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          addonBefore={<UserOutlined className="site-form-item-icon" />}
                          placeholder="Nombre completo"
                        />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        rules={[
                          { required: true, message: 'El correo es obligatorio' },
                          { type: 'email', message: 'Debe introducir un correo valido' },
                          {
                            validator: async (_, value) => {
                              if (value !== user.email)
                                throw new Error('El correo no coincide con el que se registró.')
                              return value
                            },
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="email"
                          addonBefore={<MailOutlined className="site-form-item-icon" />}
                          placeholder="Correo electrónico"
                        />
                      </Form.Item>
                      <Checkbox
                        onChange={event => setDisabledAgreement(!event.target.checked)}
                        style={{ margin: '0 auto' }}
                      >
                        Acepto el aviso de privacidad
                      </Checkbox>
                    </Form>
                  </Content>
                </Layout>
              </Layout>
            </Modal>
          </Layout.Content>
          <Layout.Footer>{/* <Footer /> */}</Layout.Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
