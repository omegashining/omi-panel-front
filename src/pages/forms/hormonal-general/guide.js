import { Col, Row } from 'antd'
import React from 'react'

export const guide1 = {
  image: '/resources/images/forms/spit.svg',
  section: 'Guía para Usuarios de Hormonas',
  description:
    'No es necesario detener su terapia actual de hormonas para comenzar con la recolección de muestras. Continúe utilizando sus hormonas prescritas. Favor de seguir la siguiente tabla para realizar óptimamente las tomas de saliva.',
  sidebar: () => <></>,
  title: 'Guía para Usuarios de Hormonas',
  content: (
    <div className="table">
      <Row className="title">
        <Col className="padding-cell" span={12}>
          <strong>Tipo de hormona</strong>
        </Col>
        <Col className="padding-cell" span={12}>
          <strong>Toma de muestras</strong>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>
            Tópicas <br />
            (geles, cremas, sprays, intravaginales)
          </p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>12 a 14 horas después de la última dosis.</p>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>
            Pastillas.
            <br />
            (progesterona).
          </p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>6 a 24 horas (óptimamente 6 a 10 horas después de la última dosis).</p>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>
            Pastillas <br />
            (todas las demás hormonas).
          </p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>12 a 24 horas después de la última dosis.</p>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>
            Tópicas <br />
            (geles, cremas, sprays, intravaginales).
          </p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>12 a 14 horas después de la última dosis.</p>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>Sublinguales.</p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>No se recomienda el análisis de saliva.</p>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>Parches</p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>1 a 2 días después de aplicar el parche.</p>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>Inyecciones/Pellets.</p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>En la mitad de tiempo entre cada inyección o inserto del pellet.</p>
        </Col>
      </Row>
      <Row className="content">
        <Col className="border-cell padding-cell" span={12}>
          <p>7-Keto DHEA (no DHEA regular).</p>
        </Col>
        <Col className="padding-cell" span={12}>
          <p>72 horas después de la última dosis.</p>
        </Col>
      </Row>
      <Row className="content-last">
        <Col className="padding-cell" span={24}>
          <p>
            Las siguientes también se clasifican como hormonas (recolecte como señalado arriba):{' '}
            <br />
            Control de natalidad. Melatonina. Cremas que contengan pregnenolona y/o derivados de
            placenta. Cremas antiinflamatorias esteroideas/ inhaladores/ medicamentos orales
            (ejemplo: hidrocortisona, prednisona, betametasona)
          </p>
        </Col>
      </Row>
    </div>
  ),
}

export const guide2 = {
  image: '/resources/images/forms/spit.svg',
  section: 'Guía para Usuarios de Hormonas',
  description:
    'No es necesario detener su terapia actual de hormonas para comenzar con la recolección de muestras. Continúe utilizando sus hormonas prescritas. Favor de seguir la siguiente tabla para realizar óptimamente las tomas de saliva.',
  sidebar: () => <></>,
  title: 'Guía para Usuarios de Hormonas',
  content: (
    <div>
      <p>
        Los usuarios de hormonas tópicas deben de seguir las siguientes instrucciones para evitar la
        contaminación directa de las muestras durante la recolección:
      </p>
      <p>
        No utilice las manos descubiertas para la aplicación de sus hormonas, por lo menos 2 días
        antes de la toma de su muestra (aplique sus hormonas utilizando guantes látex o
        preferentemente utiliza jeringas o aplicadores).
      </p>
      <p>
        No aplique las hormonas en su rostro o cuello la noche previa a la toma de la muestra,
        aplique en las áreas que pueden ser cubiertas con ropa para evitar la transferencia de
        hormonas de los dedos al rostro, labios o boca.
      </p>
      <p>
        Antes de recolectar su muestra, lave sus manos con jabón y seque con una toalla limpia,
        después evite tocar las llaves del baño, chapas de puertas, toallas, jabón u otros que
        puedan estar contaminados con rastros de la crema o gel hormonal tópico.
      </p>
    </div>
  ),
}
