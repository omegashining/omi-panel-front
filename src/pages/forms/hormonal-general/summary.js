import React from 'react'
import moment from 'moment'
import { Col, Row, Table } from 'antd'
import { symptomsMen, symptomsWomen } from './constants'

const columns = [
  {
    title: 'Tipo',
    dataIndex: 'kind',
    key: 'kind',
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Aplicación',
    dataIndex: 'application',
    key: 'application',
  },
  {
    title: 'Dosis',
    dataIndex: 'dose',
    key: 'dose',
  },
  {
    title: 'Fecha y Hora',
    dataIndex: 'dose',
    key: 'dose',
    render: (_, row) => (
      <span>
        {moment(row.date).format('DD/MM/YYYY')} {moment(row.schedule).format('hh:mm a')}
      </span>
    ),
  },
  {
    title: 'Veces por dia',
    dataIndex: 'times',
    key: 'times',
  },
  {
    title: 'Tiempo de uso',
    dataIndex: 'use',
    key: 'use',
  },
]

export const generalOverview = (data, user) => {
  const symptoms = user.sex === 'female' ? symptomsWomen : symptomsMen
  const results = ['Ninguno', 'Poco', 'Moderado', 'Severo']
  return {
    image: '/resources/images/forms/summary.svg',
    section: 'Verifique sus resultados',
    description: 'Verifique que la información sea la correcta',
    sidebar: () => <></>,
    title: 'Resultados',
    content: (
      <div className="summary">
        <Row>
          <Col sm={24} xl={7}>
            <div className="title">Información General</div>
            <div>
              <b>Nombre:</b> {user.name}
            </div>
            <div>
              <b>Sexo Biológico:</b> {user.sex === 'female' ? 'Mujer' : 'Hombre'}
            </div>
            <div>
              <b>Correo Electrónico:</b> {user.email}
            </div>
            <div>
              <b>Teléfono:</b> {user.phone}
            </div>
            <div>
              <b>Fecha de Nacimiento:</b> {moment(user.birthday).format('DD/MM/YYYY')}
            </div>
          </Col>
          <Col sm={24} xl={17}>
            <div className="title">Recolección de Muestra</div>
            <div>
              <b>Día de Recolección:</b> {moment(user.recollectionTime).format('DD/MM/YYYY')}{' '}
              <b>Hora:</b> {moment(user.sampleHour).format('hh:mm a')}
            </div>
            <div className="title">Ha utilizado alguna hormona en los últimos 2 meses.</div>
            <div>
              <b>{data.hormonesUsed === 1 ? 'Si' : 'No'}</b>
            </div>
            {data.hormonesUsed === 1 && (
              <Table columns={columns} dataSource={data.hormones} pagination={false} />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="title">Síntomas</div>
            <Row>
              {symptoms.map((s, index) => {
                const result =
                  data[
                    `symptom${user.sex === 'female' ? 'Women' : 'Men'}-${Math.floor(index / 12) +
                      1}-${(index % 12) + 1}`
                  ]
                return (
                  <Col xl={12} md={12} xs={24}>
                    <b>{s}:</b> {results[result - 1]} ({result})
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </div>
    ),
    notify: false,
  }
}

export const symptomsOverview = () => {
  // const symptoms = user.sex === 'female' ? [...symptomsAll, ...symptomsWomen] : symptomsAll;
  return <></>
}
