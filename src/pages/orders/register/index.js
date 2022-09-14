import React, { useEffect } from 'react'
import { Alert, Button, Col, Descriptions, Empty, Form, Input, Row } from 'antd'
import { FileSearchOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { find } from 'services/api.kit.service'
import { register } from 'services/api.order.service'
import { history } from '../../../index'
import { kinds } from '../util'

const RegisterOrder = ({
  match: {
    params: { folio },
  },
}) => {
  const [kit, setKit] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  useEffect(() => {
    if (folio !== 'new') findKit({ search: folio })
  }, [folio])

  const findKit = ({ search }) => {
    setLoading(true)
    setError(null)
    find(search)
      .then(_kit => {
        setKit({ ..._kit, result: 1 })
        setLoading(false)
      })
      .catch(() => {
        setKit({ result: 0 })
        setLoading(false)
      })
  }

  const registerOrder = () => {
    setError(null)
    register(kit.folio)
      .then(order => {
        // eslint-disable-next-line no-underscore-dangle
        history.push(`/order/${order._id}/${order.forms[0].kind}`)
      })
      .catch(e => {
        const err = e.response.data
        setError(`${err.message} (code: ${err.code})`)
      })
  }

  return (
    <div>
      <div style={{ height: 400 }}>
        <Form
          layout="inline"
          hideRequiredMark
          onFinish={findKit}
          className="m-4"
          initialValues={{ search: folio === 'new' ? '' : folio }}
        >
          <Row>
            <Col xs={24} md={16}>
              <Form.Item
                name="search"
                rules={[{ required: true, message: 'El Kit ID es obligatorio' }]}
              >
                <Input
                  size="large"
                  addonBefore={<FileSearchOutlined className="site-form-item-icon" />}
                  placeholder="Kit ID"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Button
                type="primary"
                size="large"
                className="text-center"
                htmlType="submit"
                loading={loading}
              >
                <strong>Buscar</strong>
              </Button>
            </Col>
          </Row>
        </Form>
        {kit.result === 0 && (
          <div className="m-5">
            <Empty description="No se encontró ningún Kit" />
          </div>
        )}
        {kit.result === 1 && (
          <>
            <Descriptions title="Kit" layout="vertical" bordered className="m-5">
              <Descriptions.Item label="Tipo">{kinds[kit.kind]}</Descriptions.Item>
              <Descriptions.Item label="Kit ID">{kit.folio}</Descriptions.Item>
              <Descriptions.Item label="Estatus">
                {kit.registered ? 'Registrado' : 'Nuevo'}
              </Descriptions.Item>
            </Descriptions>
            {!kit.registered && (
              <div className="text-center m-4">
                <Button
                  type="primary"
                  size="large"
                  className="text-center btn-warning"
                  onClick={() => registerOrder()}
                  loading={loading}
                >
                  <strong>Registrar</strong>
                </Button>
              </div>
            )}
            <div className="m-3">
              <p>{error && <Alert closable message={error} type="error" showIcon />}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = () => ({})

export default connect(mapStateToProps)(withRouter(RegisterOrder))
