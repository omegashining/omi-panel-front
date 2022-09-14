import { Helmet } from 'react-helmet'
import React from 'react'
import { Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import AllOrders from '../orders/all'
import Medics from "../users/medics";
import { history } from '../../index'

const { Header, Content } = Layout

const tabs = {
  orders: 0,
  medics: 1,
  info: 2,
}

const DigitalFileForm = ({
  match: {
    params: { tab },
  },
}) => {
  const current = tabs[tab] || 0

  return (
    <Layout>
      <Header className="files-header">
        <div className="header-options">
          <span className="selected-option">Administrador</span>
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
              <span>Expedientes Digitales</span>
            </div>
            <div className="file-details">
              <div className="file-detail-image">
                <img src="/resources/images/forms/digital-file-cara.svg" alt="Usuario" />
              </div>
              <div className="file-detail">
                <span className="name-detail">Administrador</span>
                <span>Email: </span>
                <span>Teléfono: </span>
              </div>
            </div>

            <div className="file-container" style={{ clear: 'both' }}>
              <div className="file-sections">
                <div className={current === 0 ? 'selected-section' : 'section'}>
                  <Link onClick={() => history.push('/admin/orders')}>Expedientes</Link>
                </div>
                <div className={current === 1 ? 'selected-section' : 'section'}>
                  <Link onClick={() => history.push('/admin/medics')}>Medicos</Link>
                </div>
                <div className={current === 2 ? 'selected-section' : 'section'}>
                  <Link onClick={() => {}}>XXXXXXXXXXXXX</Link>
                </div>
              </div>
              <div className="file-content">
                {current === 0 && <AllOrders />}
                {current === 1 && <Medics />}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default withRouter(DigitalFileForm)
