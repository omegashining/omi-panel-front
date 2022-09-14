import React, { useEffect, useState } from 'react'
import { Table, Spin, Modal, Button, Tooltip, notification } from 'antd'
import { connect } from 'react-redux'
import { UserSwitchOutlined, MailOutlined } from '@ant-design/icons'
import { getMedics, sendInvitation } from "services/api.user.service";
import { Link } from 'react-router-dom'
import PreRegisterMedic from "./register";

const UserStatus = {
  pending: 'Pendiente',
  active: 'Activo',
  inactive: 'Desactivado'
}

const Medics = () => {
  const [showPreRegisterModal, setShowPreRegisterModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [medics, setMedics] = useState([])

  const load = () => {
    getMedics().then(results => {
      setMedics( results );
      setLoading( false );
    })
  }

  useEffect(() => {
    load()
  }, []);

  const invite = email => {
    sendInvitation(email).then(() => {
      notification.success( { message: 'Invitación enviada', description: 'Se ha enviado nuevamente la invitación por correo' });
    }).catch(err => {
      notification.error( { message: 'Error enviando invitación', description: `${err.message} (code: ${err.code})` });
    })
  }

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Cédula Profesional',
      dataIndex: 'license',
      key: 'license'
    },
    {
      title: 'Especialidad',
      dataIndex: 'speciality',
      key: 'speciality'
    },
    {
      title: 'Estatus',
      dataIndex: 'status',
      key: 'status',
      render: status => UserStatus[status]
    },
    {
      title: 'Acciones',
      key: 'actions',
      /* eslint-disable no-underscore-dangle */
      render: (text, record) => (
        <>
          {record.status === 'pending' &&
            <Tooltip title="Reenviar invitación">
              <Link onClick={() => invite( record._id )} className="pr-3">
                <MailOutlined />
              </Link>
            </Tooltip>
          }
          <Link onClick={() => console.log(record)}>
            <UserSwitchOutlined />
          </Link>
        </>
      ),
    },
  ]

  if (loading) return <Spin tip="Loading..." />

  return (
    <div className="mb-4 kit__utils__table orders_table">
      <div className="text-right mb-4">
        <Button
          type="primary"
          size="large"
          onClick={() => setShowPreRegisterModal(true)}
        >
          <strong>Pre-Registrar Médico</strong>
        </Button>
      </div>
      <Table columns={columns} dataSource={medics} />
      <Modal
        title="Pre-Registrar Médico"
        visible={showPreRegisterModal}
        footer={null}
        onCancel={() => setShowPreRegisterModal(false)}
      >
        <PreRegisterMedic onSuccess={() => setShowPreRegisterModal(false)} />
      </Modal>
    </div>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Medics)
