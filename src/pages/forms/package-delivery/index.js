import { Helmet } from 'react-helmet'
import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Layout, Space } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Sider, Header, Content } = Layout

const steps = [
  {
    image: '/resources/images/forms/package-delivery-box.svg',
    section: 'Envío de muestras',
    description: (
      <div style={{ textAlign: 'left' }}>
        Una vez realizados los pasos anteriores, deposita en la caja del Kit Hormonal General lo
        siguiente:
        <ul>
          <li>Bolsa recolectora con muestra biológica de saliva para prueba de genética.</li>
          <li>(1 tubo).</li>
          <li>Bolsa recolectora con muestras para prueba hormonal (4 tubos).</li>
          <li>Consentimiento informado firmado.</li>
        </ul>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Enviar muestra.',
    content: (
      <div>
        <p>Sella la caja con el sticker OmiGenomics que puedes encontrar dentro de la caja.</p>
        <p>
          Verifica que todos los tubos recolectores de saliva no presenten derrames ni daños cuando
          recibas tu OmiGenomics- Kit Tricogenética. Además, asegúrate de cerrar bien los tubos
          antes de mandar tu Kit al laboratorio para evitar que tu prueba sea invalidada.
        </p>
      </div>
    ),
  },
  {
    image: '',
    section: '',
    description: (
      <div>
        <div className="title-left">De:</div>
        <Form.Item
          hasFeedback
          name="name"
          className="form-element"
          label="Nombre"
          rules={[{ required: true, message: 'El nombre es obligatorio' }]}
        >
          <Input />
          {/* user.name */}
        </Form.Item>
        <Form.Item
          hasFeedback
          name="country"
          className="form-element"
          label="País/Territorio"
          rules={[{ required: true, message: 'El pais es obligatorio' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="address"
          className="form-element"
          label="Dirección"
          rules={[{ required: true, message: 'La dirección es obligatoria' }]}
        >
          <Input />
        </Form.Item>
        <div className="form-row">
          <Form.Item
            hasFeedback
            name="cp"
            label="C.P."
            className="form-element-col"
            rules={[{ required: true, message: 'El C.P. es obligatorio' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="city"
            label="Ciudad"
            className="form-element-col"
            rules={[{ required: true, message: 'La ciudad es obligatoria' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="state"
            label="Estado"
            className="form-element-col"
            rules={[{ required: true, message: 'El estado es obligatorio' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          hasFeedback
          name="phoneNumber"
          className="form-element"
          label="Teléfono"
          rules={[{ required: true, message: 'El teléfono es obligatorio' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="guideNumber"
          className="form-element"
          label="Número de guía"
          rules={[{ required: true, message: 'El número de guía es obligatorio' }]}
        >
          <Input />
        </Form.Item>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Envío de muestra.',
    content: (
      <div>
        <h3>Para: Omigenomics.</h3>
        <p className="center">
          <img
            src="/resources/images/forms/package-delivery-box.svg"
            alt="Envío"
            style={{ width: '20%', alignSelf: 'center' }}
          />
        </p>
        <p>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</p>
      </div>
    ),
  },
  {
    image: '',
    section: '',
    description: (
      <div style={{ textAlign: 'left' }}>
        <div className="delivery-row">
          <div className="delivery-col">
            <div className="delivery-title">De:</div>
            <div>Dirección de donde se envía. Calle, Núm, C.P. Ciudad, Estado, País.</div>
          </div>
          <div className="delivery-col">
            <div className="delivery-title">Para:</div>
            <div>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</div>
          </div>
        </div>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Envío de muestra.',
    content: (
      <div>
        <p>Paquetes envio de muestras de saliva.</p>
        <div className="delivery-row">
          <strong>Embalaje:</strong>
          <br />
          <br />
          <strong>Cantidad:</strong>
          <br />
          <br />
          <strong>Peso kg:</strong>
          <br />
          <br />
          <strong>Dimensiones cm:</strong>
          <br />
          <br />
          <strong>Paquete nacional - 1 Pieza - 0.5 kg</strong>
          <br />
          <strong>(50 X 50 X 50 cm)</strong>
        </div>
      </div>
    ),
  },
  {
    image: '',
    section: '',
    description: (
      <div style={{ textAlign: 'left' }}>
        <div className="delivery-row">
          <div className="delivery-col">
            <div className="delivery-title">De:</div>
            <div>Dirección de donde se envía. Calle, Núm, C.P. Ciudad, Estado, País.</div>
          </div>
          <div className="delivery-col">
            <div className="delivery-title">Para:</div>
            <div>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</div>
          </div>
        </div>
        <div className="delivery-row">
          Embalaje:
          <br />
          Cantidad:
          <br />
          Peso kg:
          <br />
          Dimensiones cm:
          <br />
          Paquete nacional - 1 Pieza - 0.5 kg
          <br />
          (50 X 50 X 50 cm)
        </div>
        <div className="delivery-row">Envío el día: Miércoles 8 de Marzo.</div>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Envío de muestra.',
    content: (
      <div>
        <h3>Estoy realizando mi envío el:</h3>
        <br />
        <div>
          <div className="calendar-selection">
            <div>Marzo</div>
            <div className="calendar-day">8</div>
            <div>Hoy</div>
          </div>
          <div className="calendar">
            <div>Marzo</div>
            <div className="calendar-day">9</div>
            <div>Miercoles</div>
          </div>
          <div className="calendar">
            <div>Marzo</div>
            <div className="calendar-day">10</div>
            <div>Jueves</div>
          </div>
          <div className="calendar">
            <div>Marzo</div>
            <div className="calendar-day">11</div>
            <div>Viernes</div>
          </div>
        </div>
        <div className="options-gray">
          <div className="option">
            <div>
              <img src="resources/images/forms/package-delivery-calendar.svg" alt="Calendario" />
            </div>
            <div>Fecha de entrega</div>
          </div>
          <div className="option">
            <div>
              <img src="resources/images/forms/package-delivery-time.svg" alt="Reloj" />
            </div>
            <div>Entregado por</div>
          </div>
          <div className="option">
            <div>
              <img src="resources/images/forms/package-delivery-money.svg" alt="Reloj" />
            </div>
            <div>Precio estimado</div>
          </div>
        </div>
        <div className="resumen">
          <div className="resumen-option">
            <div>Marzo</div>
            <div>8</div>
            <div>Miercoles</div>
          </div>
          <div className="resumen-option">Final del día</div>
          <div className="resumen-option">MXN $1,500</div>
        </div>
      </div>
    ),
  },
  {
    image: '',
    section: '',
    description: (
      <div style={{ textAlign: 'left' }}>
        <div className="delivery-row">
          <div className="delivery-col">
            <div className="delivery-title">De:</div>
            <div>Dirección de donde se envía. Calle, Núm, C.P. Ciudad, Estado, País.</div>
          </div>
          <div className="delivery-col">
            <div className="delivery-title">Para:</div>
            <div>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</div>
          </div>
        </div>
        <div className="delivery-row">
          Embalaje:
          <br />
          Cantidad:
          <br />
          Peso kg:
          <br />
          Dimensiones cm:
          <br />
          Paquete nacional - 1 Pieza - 0.5 kg
          <br />
          (50 X 50 X 50 cm)
        </div>
        <div className="delivery-row">Envío el día: Miércoles 8 de Marzo.</div>
        <div className="delivery-row">
          <strong>MXN $1,500</strong>
        </div>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Envío de muestra.',
    content: (
      <div>
        <h3>Pago de envío.</h3>
        <br />
        <div>
          <div className="pay-option pay-option-selection">
            <div>Tarjeta de Crédito/Debito</div>
            <div>
              <img src="resources/images/forms/package-delivery-card.svg" alt="Tarjeta" />
            </div>
          </div>
          <div className="pay-option">
            <div>
              Pago por <br />
              PayPal
            </div>
            <div>
              <img src="resources/images/forms/package-delivery-paypal.svg" alt="Palpay" />
            </div>
          </div>
        </div>
        <div className="resumen-pay">
          <div className="resumen-pay-row">
            <div>
              <div className="resumen-pay-label">
                <img src="resources/images/forms/package-delivery-person.svg" alt="Titular" />
                Nombre del titular
              </div>
              <Form.Item
                hasFeedback
                name="titular"
                className="form-element"
                rules={[{ required: true, message: 'El titular es obligatorio' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div>
              <div className="resumen-pay-label">
                <img src="resources/images/forms/package-delivery-card.svg" alt="Tarjeta" />
                Número de Tarjeta
              </div>
              <Form.Item
                hasFeedback
                name="creditCard"
                className="form-element"
                rules={[{ required: true, message: 'El número de tarjeta es obligatorio' }]}
              >
                <Input placeholder="xxxx-xxxx-xxxx-xxxx" />
              </Form.Item>
            </div>
          </div>
          <div className="resumen-pay-row">
            <div>
              <div className="resumen-pay-label">
                <img
                  src="resources/images/forms/package-delivery-calendar-white.svg"
                  alt="Calendario"
                />
                Fecha de Expiración
              </div>
              <div className="text-left">
                <Form.Item
                  hasFeedback
                  name="monthExpireDate"
                  className="form-element-col"
                  rules={[
                    { required: true, message: 'El mes de la fecha de expiración es obligatorio' },
                  ]}
                >
                  <Input placeholder="Mes" />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  name="yearExpireDate"
                  className="form-element-col"
                  rules={[
                    { required: true, message: 'El año de la fecha de expiración es obligatorio' },
                  ]}
                >
                  <Input placeholder="Año" />
                </Form.Item>
              </div>
            </div>
            <div>
              <div className="resumen-pay-label">
                <img src="resources/images/forms/package-delivery-padlock.svg" alt="Candado" />
                Código de Seguridad
              </div>
              <Form.Item
                hasFeedback
                name="secureCode"
                className="form-element"
                rules={[{ required: true, message: 'El código de seguridad es obligatorio' }]}
              >
                <Input addonAfter={<QuestionCircleOutlined className="site-form-item-icon" />} />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    image: '',
    section: '',
    description: (
      <div style={{ textAlign: 'left' }}>
        <div className="delivery-row">
          <div className="delivery-col">
            <div className="delivery-title">De:</div>
            <div>Dirección de donde se envía. Calle, Núm, C.P. Ciudad, Estado, País.</div>
          </div>
          <div className="delivery-col">
            <div className="delivery-title">Para:</div>
            <div>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</div>
          </div>
        </div>
        <div className="delivery-row">
          Embalaje:
          <br />
          Cantidad:
          <br />
          Peso kg:
          <br />
          Dimensiones cm:
          <br />
          Paquete nacional - 1 Pieza - 0.5 kg
          <br />
          (50 X 50 X 50 cm)
        </div>
        <div className="delivery-row">Envío el día: Miércoles 8 de Marzo.</div>
        <div className="delivery-row">
          <strong>MXN $1,500</strong>
        </div>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Envío de muestra.',
    content: (
      <div>
        <h3>Estoy realizando mi envío el:</h3>
        <br />
        <div>
          <div className="pay-option pay-option-selection">
            <div>Tarjeta de Crédito/Debito</div>
            <div>
              <img src="resources/images/forms/package-delivery-card.svg" alt="Tarjeta" />
            </div>
          </div>
          <div className="pay-option">
            <div>
              Pago por <br />
              PayPal
            </div>
            <div>
              <img src="resources/images/forms/package-delivery-paypal.svg" alt="Palpay" />
            </div>
          </div>
        </div>
        <div className="resumen-pay">
          <div className="resumen-pay-row">
            <div>
              <div className="resumen-pay-label">
                <img src="resources/images/forms/package-delivery-person.svg" alt="Titular" />
                Nombre del titular
              </div>
              <Form.Item
                hasFeedback
                name="titular"
                className="form-element"
                rules={[{ required: true, message: 'El titular es obligatorio' }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div>
              <div className="resumen-pay-label">
                <img src="resources/images/forms/package-delivery-card.svg" alt="Tarjeta" />
                Número de Tarjeta
              </div>
              <Form.Item
                hasFeedback
                name="creditCard"
                className="form-element"
                rules={[{ required: true, message: 'El número de tarjeta es obligatorio' }]}
              >
                <Input placeholder="xxxx-xxxx-xxxx-xxxx" />
              </Form.Item>
            </div>
          </div>
          <div className="resumen-pay-row">
            <div>
              <div className="resumen-pay-label">
                <img
                  src="resources/images/forms/package-delivery-calendar-white.svg"
                  alt="Calendario"
                />
                Fecha de Expiración
              </div>
              <div className="text-left">
                <Form.Item
                  hasFeedback
                  name="monthExpireDate"
                  className="form-element-col"
                  rules={[
                    { required: true, message: 'El mes de la fecha de expiración es obligatorio' },
                  ]}
                >
                  <Input placeholder="Mes" />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  name="yearExpireDate"
                  className="form-element-col"
                  rules={[
                    { required: true, message: 'El año de la fecha de expiración es obligatorio' },
                  ]}
                >
                  <Input placeholder="Año" />
                </Form.Item>
              </div>
            </div>
            <div>
              <div className="resumen-pay-label">
                <img src="resources/images/forms/package-delivery-padlock.svg" alt="Candado" />
                Código de Seguridad
              </div>
              <Form.Item
                hasFeedback
                name="secureCode"
                className="form-element"
                rules={[{ required: true, message: 'El código de seguridad es obligatorio' }]}
              >
                <Input addonAfter={<QuestionCircleOutlined className="site-form-item-icon" />} />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    image: '',
    section: '',
    description: (
      <div style={{ textAlign: 'left' }}>
        <div className="delivery-row">
          <div className="delivery-col">
            <div className="delivery-title">De:</div>
            <div>Dirección de donde se envía. Calle, Núm, C.P. Ciudad, Estado, País.</div>
          </div>
          <div className="delivery-col">
            <div className="delivery-title">Para:</div>
            <div>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</div>
          </div>
        </div>
        <div className="delivery-row">
          Embalaje:
          <br />
          Cantidad:
          <br />
          Peso kg:
          <br />
          Dimensiones cm:
          <br />
          Paquete nacional - 1 Pieza - 0.5 kg
          <br />
          (50 X 50 X 50 cm)
        </div>
        <div className="delivery-row">Envío el día: Miércoles 8 de Marzo.</div>
        <div className="delivery-row">
          <strong>MXN $1,500</strong>
        </div>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Imprime tu guía de envío.',
    content: (
      <div>
        <div className="center">
          <img
            src="/resources/images/forms/package-delivery-guia.png"
            alt="Envío"
            style={{ width: '70%', alignSelf: 'center' }}
          />
        </div>
      </div>
    ),
  },
  {
    image: '/resources/images/forms/package-delivery-box.svg',
    section: 'Envío de muestras',
    description: (
      <div style={{ textAlign: 'left' }}>
        Una vez realizados los pasos anteriores, deposita en la caja del Kit Hormonal General lo
        siguiente:
        <ul>
          <li>Bolsa recolectora con muestra biológica de saliva para prueba de genética.</li>
          <li>(1 tubo).</li>
          <li>Bolsa recolectora con muestras para prueba hormonal (4 tubos).</li>
          <li>Consentimiento informado firmado.</li>
        </ul>
      </div>
    ),
    sidebar: () => <></>,
    title: 'Enviar muestra.',
    content: (
      <div>
        <p>Sella la caja con el sticker OmiGenomics que puedes encontrar dentro de la caja.</p>
        <p>
          Verifica que todos los tubos recolectores de saliva no presenten derrames ni daños cuando
          recibas tu OmiGenomics- Kit Tricogenética. Además, asegúrate de cerrar bien los tubos
          antes de mandar tu Kit al laboratorio para evitar que tu prueba sea invalidada.
        </p>
      </div>
    ),
  },
  {
    image: '/resources/images/forms/package-delivery-box.svg',
    section: 'Entrega de resultados',
    description: (
      <div style={{ textAlign: 'left' }}>
        El procesamiento y obtención de resultados hormonales, desde que OmiGenomics recibe su
        muestra, toma entre 5-7 días hábiles. Los resultados se entregarán a través de la plataforma
        digital indicada y correo electrónico.
      </div>
    ),
    sidebar: () => <></>,
    title: '',
    content: (
      <div>
        <img
          src="/resources/images/forms/package-delivery-final.svg"
          alt="Cierre"
          style={{ width: '100%', resizeMode: 'contain' }}
        />
      </div>
    ),
  },
]

const mapStateToProps = ({ dispatch, user }) => ({ dispatch, user })

const PackageDeliveryForm = ({ dispatch /* , user */ }) => {
  const [data, setData] = React.useState({})
  const [step, setStep] = React.useState(0)
  // const [loading, setLoading] = React.useState(true)
  const [form] = Form.useForm()

  const next = () => {
    form
      .validateFields()
      .then(values => {
        setData({
          ...data,
          ...values,
        })
        setStep(step + 1)
      })
      .catch(err => console.log(err))
  }

  const prev = () => {
    setStep(step - 1)
  }

  const onFinish = () => {
    form
      .validateFields()
      .then(values => {
        setData({
          ...data,
          ...values,
        })

        dispatch({
          type: 'forms/SEND',
          payload: {
            data: { ...data, ...values },
            type: 'lifestyleForm',
          },
        })
      })
      .catch(err => console.log(err))
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Helmet title="Inicio" />
      <Form
        form={form}
        layout="vertical"
        hideRequiredMark
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="mb-4"
        initialValues={{ ...data }}
      >
        <Header className="top-side">
          <Space>
            <img src={steps[step].image} alt="" />
            <div className="title">{steps[step].section}</div>
          </Space>
        </Header>
        <Layout>
          <Sider className="left-side" width={350}>
            {steps[step].image ? (
              <img
                src={steps[step].image}
                alt=""
                className={steps[step].fullHeight ? 'full-height' : ''}
              />
            ) : (
              ''
            )}
            <div className="title">{steps[step].section}</div>
            <div className="description">{steps[step].description}</div>
            {steps[step].sidebar()}
          </Sider>
          <Layout>
            <Content className="main-side" style={step === 8 ? { padding: 0 } : {}}>
              {steps[step].title ? (
                <>
                  <div className="title">{steps[step].title}</div>
                  <hr />
                </>
              ) : (
                ''
              )}
              <div className="main-content">{steps[step].content}</div>
              <div className="steps-action mt-5">
                {step > 0 && step < steps.length && (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ margin: '0 25px' }}
                    onClick={() => prev()}
                  >
                    Anterior
                  </Button>
                )}
                {step < steps.length - 1 && (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ margin: '0 25px' }}
                    onClick={() => next()}
                  >
                    {step === 4 || step === 5 ? 'Pagar' : 'Siguiente'}
                  </Button>
                )}
                {step === steps.length - 1 && (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ margin: '0 25px' }}
                    onClick={() => next()}
                  >
                    Finalizar
                  </Button>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Form>

      {/* <div className="left-side">
        {(step === 0 || step === 5) && (
          <>
            <img src="/resources/images/forms/package-delivery-box.svg" alt="Envío" />
            <div className="title">Envío de muestras</div>
            <div className="description-left">
              Una vez realizados los pasos anteriores, deposita en la caja del Kit Hormonal General
              lo siguiente:
              <ul>
                <li>Bolsa recolectora con muestra biológica de saliva para prueba de genética </li>
                <li>(1 tubo)</li>
                <li>Bolsa recolectora con muestras para prueba hormonal (4 tubos)</li>
                <li>Consentimiento informado firmado</li>
              </ul>
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <div className="title-left">De:</div>
            <div>
              <Form name="basic" layout="vertical" autoComplete="off">
                <Form.Item
                  hasFeedback
                  name="name"
                  className="form-element"
                  label="Nombre"
                >
                  {user.name}
                </Form.Item>
                <Form.Item
                  hasFeedback
                  name="country"
                  className="form-element"
                  label="País/Territorio"
                  rules={[{ required: true, message: 'El pais es obligatorio' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  hasFeedback
                  name="address"
                  className="form-element"
                  label="Dirección"
                  rules={[{ required: true, message: 'La dirección es obligatoria' }]}
                >
                  <Input />
                </Form.Item>
                <div className="form-row">
                  <Form.Item
                    hasFeedback
                    name="cp"
                    label="C.P."
                    className="form-element-col"
                    rules={[{ required: true, message: 'El C.P. es obligatorio' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    hasFeedback
                    name="city"
                    label="Ciudad"
                    className="form-element-col"
                    rules={[{ required: true, message: 'La ciudad es obligatoria' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    hasFeedback
                    name="state"
                    label="Estado"
                    className="form-element-col"
                    rules={[{ required: true, message: 'El estado es obligatorio' }]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <Form.Item
                  hasFeedback
                  name="phoneNumber"
                  className="form-element"
                  label="Teléfono"
                  rules={[{ required: true, message: 'El teléfono es obligatorio' }]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </div>
          </>
        )}
        {(step === 2 || step === 3 || step === 4) && (
          <>
            <div className="delivery-row">
              <div className="delivery-col">
                <div className="delivery-title">De:</div>
                <div>Dirección de donde se envía. Calle, Núm, C.P. Ciudad, Estado, País.</div>
              </div>
              <div className="delivery-col">
                <div className="delivery-title">Para:</div>
                <div>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</div>
              </div>
            </div>
            {(step === 3 || step === 4) && (
              <>
                <div className="delivery-row">
                  Embalaje:
                  <br />
                  Cantidad:
                  <br />
                  Peso kg:
                  <br />
                  Dimensiones cm:
                  <br />
                  Paquete nacional - 1 Pieza - 0.5 kg
                  <br />
                  (50 X 50 X 50 cm)
                </div>
                <div className="delivery-row">Envio el día: Miercoles 8 de Marzo.</div>
                {step === 4 && (
                  <>
                    <div className="delivery-row">
                      <strong>MXN $1,500</strong>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
        {step === 6 && (
          <>
            <img src="/resources/images/forms/package-delivery-box.svg" alt="Envío" />
            <div className="title-left">Entrega de Resultados</div>
            <div className="description-left">
              <p>
                El procesamiento y obtención de resultados hormonales, desde que OmiGenomics recibe
                su muestra, toma entre 5-7 días hábiles.
              </p>
              <p>
                Los resultados se entregarán a través de la plataforma digital indicada y correo
                electrónico.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="main-side">
        <div className="steps-content">
          <div className="card-body">
            <div className="text-nowrap">
              {(step === 0 || step === 5) && <div className="title">Enviar muestra.</div>}
              {(step === 1 || step === 2 || step === 3) && (
                <div className="title">Envío de muestra:</div>
              )}
              {step === 4 && <div className="title">Imprime tu guía de envio</div>}

              <hr />
              <Form
                form={form}
                layout="vertical"
                hideRequiredMark
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="mb-4"
                initialValues={{ ...data }}
              >
                {step === 0 && (
                  <>
                    <p>
                      Sella la caja con el sticker OmiGenomics que puedes encontrar dentro de la
                      caja.
                    </p>
                    <p>
                      Verifica que todos los tubos recolectores de saliva no presenten derrames ni
                      daños cuando recibas tu OmiGenomics- Kit Tricogenética. Además, asegúrate de
                      cerrar bien los tubos antes de mandar tu Kit al laboratorio para evitar que tu
                      prueba sea invalidada.
                    </p>
                  </>
                )}
                {step === 1 && (
                  <>
                    <div className="title">Para: Omigenomics</div>
                    <div className="center">
                      <img
                        src="resources/images/forms/package-delivery-box.svg"
                        alt="Envío"
                        style={{ width: '30%', alignSelf: 'center' }}
                      />
                    </div>
                    <p>Del Refugio 4120, Col. Alfareros, Monterrey, N.L., México CP. 64753</p>
                  </>
                )}
                {step === 2 && (
                  <>
                    <p>Paquetes envío de muestras de saliva.</p>
                    <p>
                      <strong>Embalaje:</strong>
                    </p>
                    <p>
                      <strong>Cantidad:</strong>
                    </p>
                    <p>
                      <strong>Peso Kg:</strong>
                    </p>
                    <p>
                      <strong>Dimensiones cm:</strong>
                    </p>
                    <p>
                      <strong>Paquete Internacional - 1 Pieza - 0.5 kg</strong>
                    </p>
                    <p>
                      <strong>(50 X 50 X 50 cm)</strong>
                    </p>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="title">Estoy realizando mi envio el:</div>

                    <div>
                      <div>
                        <div className="calendar-selection">
                          <div>Marzo</div>
                          <div className="calendar-day">8</div>
                          <div>Hoy</div>
                        </div>
                        <div className="calendar">
                          <div>Marzo</div>
                          <div className="calendar-day">9</div>
                          <div>Miercoles</div>
                        </div>
                        <div className="calendar">
                          <div>Marzo</div>
                          <div className="calendar-day">10</div>
                          <div>Jueves</div>
                        </div>
                        <div className="calendar">
                          <div>Marzo</div>
                          <div className="calendar-day">11</div>
                          <div>Viernes</div>
                        </div>
                      </div>
                      <div className="options-gray">
                        <div className="option">
                          <div>
                            <img
                              src="resources/images/forms/package-delivery-calendar.svg"
                              alt="Calendario"
                            />
                          </div>
                          <div>Fecha de entrega</div>
                        </div>
                        <div className="option">
                          <div>
                            <img
                              src="resources/images/forms/package-delivery-time.svg"
                              alt="Reloj"
                            />
                          </div>
                          <div>Entregado por</div>
                        </div>
                        <div className="option">
                          <div>
                            <img
                              src="resources/images/forms/package-delivery-money.svg"
                              alt="Reloj"
                            />
                          </div>
                          <div>Precio estimado</div>
                        </div>
                      </div>
                      <div className="resumen">
                        <div className="resumen-option">
                          <div>Marzo</div>
                          <div>8</div>
                          <div>Miercoles</div>
                        </div>
                        <div className="resumen-option">Final del día</div>
                        <div className="resumen-option">MXN $1,500</div>
                      </div>
                    </div>
                  </>
                )}
                {step === 4 && (
                  <>
                    <div className="center">
                      <img
                        src="resources/images/forms/package-delivery-guia.png"
                        alt="Envío"
                        style={{ width: '70%', alignSelf: 'center' }}
                      />
                    </div>
                  </>
                )}
                {step === 5 && (
                  <>
                    <p>
                      Sella la caja con el sticker OmiGenomics que puedes encontrar dentro de la
                      caja.
                    </p>
                    <p>
                      Verifica que todos los tubos recolectores de saliva no presenten derrames ni
                      daños cuando recibas tu Omigenomics- Kit Tricogenética. Además, asegúrate de
                      cerrar bien los tubos antes de mandar tu Kit al laboratorio para evitar que tu
                      prueba sea invalidada.
                    </p>
                  </>
                )}
                {step === 6 && (
                  <>
                    <img
                      src="resources/images/forms/package-delivery-final.png"
                      alt="Cierre"
                      style={{ width: '100%', resizeMode: 'contain' }}
                    />
                  </>
                )}

                <div className="steps-action">
                  {step > 0 && step < steps.length && (
                    <Button
                      type="primary"
                      shape="round"
                      size="large"
                      style={{ margin: '0 25px' }}
                      onClick={() => prev()}
                    >
                      Anterior
                    </Button>
                  )}
                  {step < steps.length - 1 && (
                    <Button
                      type="primary"
                      shape="round"
                      size="large"
                      style={{ margin: '0 25px' }}
                      onClick={() => next()}
                    >
                      Siguiente
                    </Button>
                  )}
                  {step === steps.length - 1 && (
                    <Button
                      type="primary"
                      shape="round"
                      size="large"
                      style={{ margin: '0 25px' }}
                      onClick={() => next()}
                    >
                      Finalizar
                    </Button>
                  )}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default connect(mapStateToProps)(PackageDeliveryForm)
