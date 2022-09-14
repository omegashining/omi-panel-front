import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Button, Card, Col, Descriptions, Empty, Row, Badge } from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { loadOrder } from 'services/api.order.service'
import { history } from '../../../index'
import { kinds, orderStatus } from '../util'

const formNames = {
  lifestyleForm: 'Estilo de Vida',
  hormonalGeneralForm: 'Hormonal General',
  vitaminD3Form: 'Vitamina D3',
}

const OrderDetail = ({
  match: {
    params: { orderId },
  },
}) => {
  const [order, setOrder] = React.useState(null)

  useEffect(() => {
    if (orderId) findOrder(orderId)
  }, [orderId])

  const findOrder = id => {
    loadOrder(id)
      .then(_order => {
        setOrder(_order)
      })
      .catch(() => {
        setOrder(null)
      })
  }

  return (
    <div className="m-5">
      <Helmet title="Orden" />
      <div style={{ height: 200, margin: '50px auto' }}>
        {!order && (
          <div className="m-5">
            <Empty description="La orden no existe" />
          </div>
        )}
        {order && (
          <>
            <Descriptions title={`Orden ${orderId}`} column={4} layout="vertical" bordered>
              <Descriptions.Item label="Kit">{kinds[order.kit.kind]}</Descriptions.Item>
              <Descriptions.Item label="Kit ID">{order.kit.folio}</Descriptions.Item>
              <Descriptions.Item label="Fecha de registro">
                {moment(order.createdAt).format('DD/MM/YYYY')}
              </Descriptions.Item>
              <Descriptions.Item label="Estatus">
                {order.forms.reduce((a, f) => a && f.finished, true) ? (
                  <>
                    <Badge
                      text={orderStatus['forms-completed'].label}
                      color={orderStatus['forms-completed'].color}
                    />
                  </>
                ) : (
                  <>
                    <Badge
                      text={orderStatus[order.status].label}
                      color={orderStatus[order.status].color}
                    />
                  </>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Formularios">
                <Row>
                  {order.forms.map(form => (
                    <Col xs={24} md={12}>
                      <Badge.Ribbon
                        text={form.finished ? 'Completado' : 'Pendiente'}
                        color={form.finished ? 'green' : 'volcano'}
                      >
                        <Card title={formNames[form.kind]} className="m-3">
                          <div className="text-center">
                            {form.finished ? (
                              <Button
                                type="primary"
                                size="large"
                                className="text-center btn-warning"
                                onClick={() => history.push(`/order/${orderId}/${form.kind}`)}
                              >
                                <strong>Ver resumen</strong>
                              </Button>
                            ) : (
                              <Button
                                type="primary"
                                size="large"
                                className="text-center btn-warning"
                                onClick={() => history.push(`/order/${orderId}/${form.kind}`)}
                              >
                                <strong>Continuar</strong>
                              </Button>
                            )}
                          </div>
                        </Card>
                      </Badge.Ribbon>
                    </Col>
                  ))}
                </Row>
              </Descriptions.Item>
            </Descriptions>
          </>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = () => ({})

export default connect(mapStateToProps)(withRouter(OrderDetail))
