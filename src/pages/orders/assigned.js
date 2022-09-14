import React, { useEffect, useState } from 'react'
import { Modal, Table, Spin, Tooltip } from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import {
  loadAssignedOrders,
} from 'services/api.order.service'
import { kinds, orderStatus } from './util'


const AssignedOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({ kit: {} });

  const load = () => {
    loadAssignedOrders().then( results => {
      setOrders( results )
      setLoading( false )
    });
  }

  useEffect(() => {
    load()
  }, [])


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
      title: 'Acciones',
      // dataIndex: 'user',
      key: 'actions',
      /* eslint-disable no-underscore-dangle */
      render: (text, record) => (
        <>
          {['results', 'interpreted', 'reporting'].indexOf( record.status ) >= 0 &&
          <Tooltip title="Ver receta" placement="top">
            <Link
              onClick={() => {
                setShowPrescriptionModal( true );
                setSelectedOrder( record );
              }}
            >
              <FormOutlined style={{ fontSize: '20px', margin: 0, paddingRight: '10px' }} />
            </Link>
          </Tooltip>
          }
        </>
      )
    }
  ];

  if (loading) return <Spin tip="Loading..." />

  return (
    <div className="mb-4 kit__utils__table orders_table">
      <Table columns={columns} dataSource={orders} />
      {showPrescriptionModal &&
        <Modal
          title="Interpretación de Resultados"
          visible
          onOk={()=>{}}
          onCancel={() => setShowPrescriptionModal( false )}
        >
          <pre>
            {`
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/bbs/v1",
    "https://w3id.org/prescription/v1"
  ],
  "type": [
    "VerifiableCredential",
    "DigitalPrescription"
  ],
  "id": "f5fab2b4:5a78:4efa:8275:ce2d45c25310",
  "name": "Prescription",
  "issuer": "did:lac:main:0x1219c03bbd327c80e966366bb5c69151e72c72aa",
  "issuanceDate": "2022-06-22T16:31:44.160Z",
  "expirationDate": "2022-06-30T16:31:29.541Z",
  "trustedList": "0x052413149BD54acC9571B022de9069fd13b386E3",
  "credentialSubject": {
    "id": "did:lac:main:0xeaa30ea9dd1da717034bcd9ebee5b62694d10ce7",
    "name": "${selectedOrder.user.name}",
    "gender": "${selectedOrder.user.sex}",
    "birthDate": "${moment(selectedOrder.user.birthday).format('DD/MM/YYYY')}",
    "medicaments": [{
        "name": "Minoxidil",
        "brand": "Minoxidil",
        "disease": "Hair Loss",
        "atcCode": "J07BL01",
        "frequency": "daily",
        "dose": "500mg"
    }, {
        "name": "Diazepam",
        "brand": "Valium",
        "disease": "Anxiety",
        "atcCode": "F92CLV3",
        "frequency": "weekly",
        "dose": "100mg"
    }]
  },
  "credentialStatus": {
    "id": "0x82F1f28e4EA6F8F41e7720853a2D2DD127c317E9",
    "type": "SmartContract"
  },
  "credentialHash": "0x2484583b668680ae61fa17b68ee48275be159ef3ac808fbf988ceb933fd62877",
  "proof": [
    {
      "type": "EcdsaSecp256k1Signature2019",
      "created": "2022-06-22T16:31:46.283Z",
      "proofPurpose": "assertionMethod",
      "verificationMethod": "did:lac:main:0x1219c03bbd327c80e966366bb5c69151e72c72aa#vm-0",
      "domain": "0xB75951ca8dc29841e4d82d7e40867A745E62867b",
      "proofValue": "0x2433a7aa6b0f26c81ebef8aefeb30a2a30d974df4f837ab8eca84b31d1e44f3e40eaf1c18be19f8cf043fa214c7d2e2a23fc492edf713836e1aa1cdc6f4f55871c"
    },
    {
      "type": "BbsBlsSignature2020",
      "created": "2022-06-22T16:31:47Z",
      "proofPurpose": "assertionMethod",
      "proofValue": "ie9KuaYPiRcWgaWgwyb5v/qBvkg36+Sattx+Uc69rYh+DzRgf8yqGmkaKJZ9RgU4PCEKheAL533XtEFpI936wRbWoGG2foMj11z6zj//0V4kqQtbXvfHEVXyVJExiKJqiOG4wD5DTd+8HaHmZZmKKg==",
      "verificationMethod": "did:lac:main:0x1219c03bbd327c80e966366bb5c69151e72c72aa#vm-3"
    }
  ]
}

            `}
          </pre>
        </Modal>
      }
    </div>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(AssignedOrders)
