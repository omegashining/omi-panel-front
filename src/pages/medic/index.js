import { Helmet } from 'react-helmet'
import React from 'react'
import { Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import AssignedOrders from "../orders/assigned";
import { history } from '../../index'

const { Header, Content } = Layout

const tabs = {
  orders: 0,
  medics: 1,
  info: 2,
}

const DigitalFileForm = ({
  user,
  match: {
    params: { tab },
  },
}) => {
  const current = tabs[tab] || 0

  return (
    <Layout>
      <Header className="files-header">
        <div className="header-options">
          <span className="selected-option">Médico</span>
        </div>
      </Header>
      <Content>
        <div>
          <Helmet title="Inicio" />
          <div className="file">
            <div className="title">
              <span>Expedientes Asignados</span>
            </div>
            <div className="file-details">
              <div className="file-detail-image">
                <img src="/resources/images/forms/digital-file-cara.svg" alt="Usuario" />
              </div>
              <div className="file-detail">
                <span className="name-detail">{user.name}</span>
                <span>Email: {user.email}</span>
                <span>Rol: Médico</span>
              </div>
            </div>

            <div className="file-container" style={{ clear: 'both' }}>
              <div className="file-sections">
                <div className={current === 0 ? 'selected-section' : 'section'}>
                  <Link onClick={() => history.push('/admin/orders')}>Expedientes</Link>
                </div>
              </div>
              <div className="file-content">
                {current === 0 && <AssignedOrders />}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps)(withRouter(DigitalFileForm))
