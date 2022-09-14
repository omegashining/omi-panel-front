import React, { useEffect, useState } from 'react'
import { Badge, Button, Col, Collapse, Row, Spin } from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'
import { loadOrders } from 'services/api.order.service'
import { history } from '../../index'
import { kinds, orderStatus } from './util'
import { handleDownloadInterpretation, handleDownloadResults } from "./all";

const { Panel } = Collapse
/* eslint-disable no-underscore-dangle */
const Orders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadOrders().then(_orders => {
      setOrders(_orders)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <Spin tip="Loading..." />

  return (
    <Collapse className="orden-list" defaultActiveKey={orders.map(o => o.kit.folio)}>
      {orders.map(order => (
        <Panel header={`Kit de ${kinds[order.kit.kind]}`} key={order.kit.folio} className="orden">
          <Row>
            <Col md={12} xs={24}>
              <div className="order-detail">
                <div className="order-folio">
                  Kit ID: <strong>{order.kit.folio}</strong>
                </div>
                <div>
                  <p>
                    Fecha de solicitud:{' '}
                    <strong>{moment(order.createdAt).format('DD/MM/YYYY')}</strong>
                  </p>
                  <p>
                    Formularios: <strong>{order.forms.length}</strong>
                  </p>
                  <p>
                    Estatus: &nbsp;
                    <strong>
                      {order.forms.reduce((a, f) => a && f.finished, true) ? (
                        <>
                          <Badge color={orderStatus['forms-completed'].color} />{' '}
                          {orderStatus['forms-completed'].label}
                        </>
                      ) : (
                        <>
                          <Badge color={orderStatus[order.status].color} />{' '}
                          {orderStatus[order.status].label}
                        </>
                      )}
                    </strong>
                  </p>
                  <img src={orderStatus[order.status].image} alt="" />
                </div>
              </div>
            </Col>
            <Col md={12} xs={24} className="text-center mt-4">
              {order.forms.reduce((a, f) => a && f.finished, true) ? (
                <>
                  <Button
                    type="primary"
                    size="large"
                    className={
                      `text-center btn-warning ${order.kit.folio} mb-3` /* eslint-disable-next-line */
                    }
                    onClick={() => history.push(`/order/${order._id}/detail`)}
                  >
                    <strong>Generar guia</strong>
                  </Button>
                  <br />
                  <Button
                    type="primary"
                    size="large"
                    className="text-center btn-warning"
                    onClick={() =>
                      history.push(
                        `/order/${order._id}/${order.forms[order.forms.length - 1].kind}`,
                      )
                    }
                  >
                    <strong>Ver resumen</strong>
                  </Button>
                </>
              ) : (
                <Button
                  type="primary"
                  size="large"
                  className={`text-center btn-warning ${order.kit.folio}`}
                  onClick={() => {
                    const kind =
                      order.forms.length > 1 && order.forms[0].finished
                        ? `${order.forms[1].kind}/lifestyle`
                        : order.forms[0].kind
                    history.push(`/order/${order._id}/${kind}`)
                  }}
                >
                  <strong>Completar formularios</strong>
                </Button>
              )}
              {order.results &&
                <Button
                  type="primary"
                  size="large"
                  className={`text-center btn-warning ${order.kit.folio} mt-3`}
                  onClick={() => handleDownloadResults( order )}
                >
                  <strong>Descargar resultados</strong>
                </Button>
              }
              {order.results &&
                <Button
                  type="primary"
                  size="large"
                  className={`text-center btn-warning ${order.kit.folio} mt-3`}
                  onClick={() => handleDownloadInterpretation( order )}
                >
                  <strong>Descargar interpretación</strong>
                </Button>
              }
            </Col>
          </Row>
        </Panel>
      ))}
    </Collapse>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Orders)
