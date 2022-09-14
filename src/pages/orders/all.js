import React, { useEffect, useState } from 'react'
import { Modal, Table, Upload, Select, Form, notification, Spin, Tooltip } from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'
import { InboxOutlined, CloudDownloadOutlined, FormOutlined, CloudUploadOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import {
  uploadResults,
  downloadResults,
  loadAllOrders,
  updateStatus,
  assignMedic, uploadInterpretation, downloadIntepretation
} from 'services/api.order.service'
import { getMedics } from "services/api.user.service";
import { kinds, orderStatus } from './util'

const { Dragger } = Upload
const { Option } = Select

// eslint-disable-next-line no-underscore-dangle
export const handleDownloadResults = async ({ _id: id }) => {
  const array = await downloadResults( id );
  const data = new Blob([array], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(data)
  link.download = `${id}.pdf`
  link.click()
}

// eslint-disable-next-line no-underscore-dangle
export const handleDownloadInterpretation= async ({ _id: id }) => {
  const array = await downloadIntepretation( id );
  const data = new Blob([array], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(data)
  link.download = `${id}.pdf`
  link.click()
}

const AllOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [medics, setMedics] = useState([]);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showModalStatus, setShowModalStatus] = useState(false);
  const [showUploadResultsModal, setShowUploadResultsModal] = useState(false);
  const [showUploadInterpretModal, setShowUploadInterpretModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({ kit: {} });
  const [results, setResults] = useState();
  const [intepretation, setInterpretation] = useState();

  const [statusForm] = Form.useForm();
  const [assignForm] = Form.useForm();

  const load = () => {
    loadAllOrders().then(result => {
      setOrders(result)
      setLoading(false)
    });
    getMedics().then(result => {
      setMedics(result.filter( medic => medic.status === 'active' ))
    })
  }

  useEffect(() => {
    load()
  }, [])

  const propsResults = {
    name: 'file',
    multiple: false,
    accept: '.pdf',
    showUploadList: false,
    onChange( info ) {
      setResults( info.file );
    },
    beforeUpload: () => false,
  }

  const propsInterpretation = {
    name: 'file',
    multiple: false,
    accept: '.pdf',
    showUploadList: false,
    onChange( info ) {
      setInterpretation( info.file );
    },
    beforeUpload: () => false,
  }

  const changeStatus = () => {
    statusForm.validateFields().then(values => {
      // eslint-disable-next-line no-underscore-dangle
      updateStatus(selectedOrder._id, values.status).then( () => {
        notification.success( { message: 'Cambio de estatus', description: "Se ha cambiado correctamente el estatus de la orden" });
        setShowModalStatus( false );
        load();
      } ).catch( err => {
        notification.error( { message: 'Error al cambiar el estatus', description: `${err.message} (code: ${err.code})` });
        setShowModalStatus( false );
      })
    })
  }

  const assign = () => {
    assignForm.validateFields().then(values => {
      // eslint-disable-next-line no-underscore-dangle
      assignMedic(selectedOrder._id, values.medic).then( () => {
        notification.success( { message: 'Médico asignado', description: "Se ha asignado correctamente el médico" });
        setShowAssignModal( false );
        load();
      } ).catch( err => {
        notification.error( { message: 'Error al asignar el médico', description: `${err.message} (code: ${err.code})` });
        setShowAssignModal( false );
      })
    })
  }

  const showUploadResults = order => {
    setSelectedOrder( order );
    setShowUploadResultsModal( true );
  }

  const showUploadInterpretation = order => {
    setSelectedOrder( order );
    setShowUploadInterpretModal( true );
  }

  const handleUploadResults = async () => {
    if( !results ) return;
    // eslint-disable-next-line no-underscore-dangle
    uploadResults(selectedOrder._id, results).then(async () => {
      loadAllOrders().then(result => {
        setOrders( result );
      });
      setShowUploadResultsModal( false );
      setResults(null);
      notification.success( { message: 'Resultados subidos', description: "Se han subido correctamente los resultados" });
    }).catch( err => {
      notification.error( { message: 'Error al subir los resultados', description: `${err.message} (code: ${err.code})` });
    })
  }

  const handleUploadInterpretation = async () => {
    if( !intepretation ) return;
    // eslint-disable-next-line no-underscore-dangle
    uploadInterpretation(selectedOrder._id, intepretation).then(async () => {
      loadAllOrders().then(result => {
        setOrders( result );
      });
      setShowUploadInterpretModal( false );
      setInterpretation(null);
      notification.success( { message: 'Intepretación subida', description: "Se ha subido correctamente la interpretación" });
    }).catch( err => {
      notification.error( { message: 'Error al subir la interpretación', description: `${err.message} (code: ${err.code})` });
    })
  }

  const columns = [
    {
      title: 'Usuario',
      dataIndex: 'user',
      key: 'user.name',
      render: user => user.name,
    },
    {
      title: 'Kit ID',
      dataIndex: 'kit',
      key: 'kit',
      render: kit => kit.folio,
    },
    {
      title: 'Nombre del Kit',
      dataIndex: 'kit',
      key: 'kit.name',
      render: kit => kinds[kit.kind],
    },
    {
      title: 'Status del Kit',
      dataIndex: 'status',
      key: 'status',
      render: status => orderStatus[status].label,
    },
    {
      title: 'Día recibido',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: createdAt => moment(createdAt).format('DD/MM/YYYY'),
    },
    {
      title: 'Médico',
      dataIndex: 'medic',
      key: 'medic',
      render: medic => medic ? medic.name : 'Sin asignar'
    },
    {
      title: 'Acciones',
      // dataIndex: 'user',
      key: 'actions',
      /* eslint-disable no-underscore-dangle */
      render: (text, record) => (
        <>
          {!record.results ? (
            <Tooltip title="Subir resultados" placement="top">
              <Link onClick={() => showUploadResults(record)}>
                <CloudUploadOutlined style={{ fontSize: '200%', margin: 0, paddingRight: '10px' }} />
              </Link>
            </Tooltip>
          ) : (
            <Tooltip title="Descargar resultados" placement="top">
              <Link onClick={() => handleDownloadResults(record)}>
                <CloudDownloadOutlined style={{ fontSize: '200%', margin: 0, paddingRight: '10px' }} />
              </Link>
            </Tooltip>
          )}
          {!record.interpretation ? (
            <Tooltip title="Subir la interpretación" placement="top">
              <Link onClick={() => showUploadInterpretation(record)}>
                <CloudUploadOutlined style={{ fontSize: '200%', margin: 0, paddingRight: '10px' }} />
              </Link>
            </Tooltip>
          ) : (
            <Tooltip title="Descargar la interpretación" placement="top">
              <Link onClick={() => handleDownloadInterpretation(record)}>
                <CloudDownloadOutlined style={{ fontSize: '200%', margin: 0, paddingRight: '10px' }} />
              </Link>
            </Tooltip>
          )}
          <InfoCircleOutlined style={{ fontSize: '200%', margin: 0, paddingRight: '10px' }} />
          <Link
            onClick={() => {
              setShowModalStatus( true );
              setSelectedOrder( record );
            }}
          >
            <FormOutlined style={{ fontSize: '20px', margin: 0, paddingRight: '10px' }} />
          </Link>
          <Tooltip title="Asignar Médico" placement="top">
            <Link
              onClick={() => {
                setShowAssignModal( true );
                setSelectedOrder( record );
              }}
            >
              <img src="/resources/images/forms/doctor_icon.svg" width={24} alt="" />
            </Link>
          </Tooltip>
          <img src="/resources/images/forms/buy_icon.svg" width={24} alt="" />
        </>
      )
    }
  ];

  if (loading) return <Spin tip="Loading..." />

  return (
    <div className="mb-4 kit__utils__table orders_table">
      <Table columns={columns} dataSource={orders} />

      <Modal
        title="Subir la Intepretación"
        visible={showUploadInterpretModal}
        onOk={handleUploadInterpretation}
        onCancel={() => setShowUploadInterpretModal(false)}
      >
        {/* JSON.stringify(kitModal) */}
        <Dragger {...propsInterpretation}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Da click o arrastra tu archivo con resultados para el folio {selectedOrder.kit.folio} a esta
            área
          </p>
          <p className="ant-upload-hint">
            {intepretation
                ? `Archivo seleccionado "${intepretation.name}"`
                : 'Únicamente se permite un archivo PDF'}
          </p>
        </Dragger>
      </Modal>

      <Modal
        title="Subir Resultados"
        visible={showUploadResultsModal}
        onOk={handleUploadResults}
        onCancel={() => setShowUploadResultsModal(false)}
      >
        {/* JSON.stringify(kitModal) */}
        <Dragger {...propsResults}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Da click o arrastra tu archivo con resultados para el folio {selectedOrder.kit.folio} a esta
            área
          </p>
          <p className="ant-upload-hint">
            {results
              ? `Archivo seleccionado "${results.name}"`
              : 'Únicamente se permite un archivo PDF'}
          </p>
        </Dragger>
      </Modal>
      {showModalStatus &&
        <Modal
          title="Cambio de estatus de la orden"
          visible
          onOk={changeStatus}
          onCancel={() => setShowModalStatus( false )}
        >
          <Form
            name="basic"
            layout="vertical"
            autoComplete="off"
            requiredMark={false}
            className="p-4"
            form={statusForm}
            initialValues={{ status: selectedOrder.status }}
          >
            <Form.Item
              hasFeedback
              name="status"
              label="Estatus de la orden"
              rules={[{ required: true, message: 'El estatus es obligatorio' }]}
            >
              <Select className="w-100">
                {Object.keys( orderStatus ).slice( 2 ).map( key => (
                  <Option key={key} value={key}>{orderStatus[key].label}</Option>
                ) )}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      }
      {showAssignModal &&
        <Modal
          title="Asignar Médico"
          visible
          onOk={assign}
          onCancel={() => setShowAssignModal( false )}
        >
          <Form
            name="basic"
            layout="vertical"
            autoComplete="off"
            requiredMark={false}
            className="p-4"
            form={assignForm}
          >
            <Form.Item
              hasFeedback
              name="medic"
              label="Médico"
              rules={[{ required: true, message: 'El Médico es obligatorio' }]}
            >
              <Select className="w-100">
                {medics.map( medic => (
                  <Option key={medic._id} value={medic._id}>{medic.name} ({medic.speciality})</Option>
                ) )}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      }
    </div>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(AllOrders)
