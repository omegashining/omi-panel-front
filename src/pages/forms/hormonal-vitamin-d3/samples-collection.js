import React from 'react'
import 'moment/locale/es-us'
import locale from 'antd/es/date-picker/locale/es_ES'
import { Col, DatePicker, Form, Row, TimePicker, Tooltip } from 'antd'
import moment from 'moment'

export const spitInstructions1 = {
  image: '/resources/images/forms/spit.svg',
  section: 'Preparación para la toma de muestra de la prueba de Vitamina D3',
  description:
    'El presente instructivo contiene las indicaciones a realizar para una correcta toma de muestra para realizar el análisis de saliva ofrecido por OmiGenomics.',
  sidebar: () => <></>,
  title: 'Preparación para la toma de muestras',
  content: (
    <div>
      <p>
        <strong>Prepare los siguientes requisitos para tu recolección de muestra:</strong>
      </p>
      <p>
        1. <b>IMPORTANTE:</b> Escriba el Kit ID del código de barras que se encuentra en la caja de
        su kit, su nombre, fecha y hora de recolección en la etiqueta de los tubos de las muestras
        para la saliva con tinta permanente.
      </p>
      <p style={{ textAlign: 'center' }}>
        <img
          src="/resources/images/forms/hormonal-general-sample-label.svg"
          alt="sample"
          style={{ margin: '20px auto' }}
        />
      </p>
    </div>
  ),
}

export const spitInstructions2 = {
  image: '/resources/images/forms/spit.svg',
  section: 'Preparación para la toma de muestra de la prueba de Vitamina D3',
  description:
    'El presente instructivo contiene las indicaciones a realizar para una correcta toma de muestra para realizar el análisis de saliva ofrecido por OmiGenomics.',
  sidebar: () => <></>,
  title: 'Preparación para la toma de muestras',
  content: (
    <div>
      <p>2. Lave y seque sus manos con una toalla limpia.</p>
      <p style={{ textAlign: 'center' }}>
        <img src="/resources/images/forms/wash-hands.svg" alt="wash" height={100} />
      </p>
      <p>
        3. <b>IMPORTANTE:</b> No coma, beba (sólo agua permitida), ni lave sus dientes al menos 2
        horas antes de realizar la toma de muestra. No utilice productos en sus labios durante el
        día de la toma de muestra.
      </p>
      <p style={{ textAlign: 'center' }}>
        <img
          src="/resources/images/forms/denied-actions.svg"
          alt="denied actions"
          height={100}
          style={{ margin: '20px auto' }}
        />
      </p>
    </div>
  ),
}

export const samplingTake = {
  image: '/resources/images/forms/spit.svg',
  section: 'Toma de muestra para prueba de Vitamina D3',
  description:
    'Recolecte la muestra en el tubo por la mañana en ayunas (sólo agua permitida), durante los primeros 30 minutos después de despertar.',
  sidebar: () => <></>,
  title: 'Pasos para la toma de muestra',
  content: (
    <div>
      <p className="text-right p-3">
        <b>TIPS</b>
        <Tooltip
          title={
            <div>
              <p>
                <b>¿Boca seca?</b> Intente presionar su lengua contra los dientes. Huela (no coma)
                un limón u otra comida que pueda comenzar el flujo de saliva. Bostezar también puede
                ayudar.
              </p>
              <p>
                <b>¿Se equivocó en la recolección?</b> Sólo enjuague el tubo completo con agua
                caliente, sin jabón, deje secar al aire libre y comience de nuevo.
              </p>
            </div>
          }
          color="cyan"
          placement="bottom"
        >
          <img src="/resources/images/forms/question.svg" className="question" alt="info" />
        </Tooltip>
      </p>
      <p>
        <ol>
          <li>Enjuague su boca con agua 5 minutos antes de la toma de muestra.</li>
          <li>
            Comience a recolectar la saliva, permitiendo que se junte en su boca hasta transferirla
            al tubo.
          </li>
          <li>
            Llene el tubo por lo menos hasta la mitad de su capacidad. Usualmente se toma de 5 a 30
            minutos dependiendo del flujo de saliva.
          </li>
          <li>
            Cuando termine, cierre el tubo y colóquelo de nuevo en la bolsa recolectora de muestra.
          </li>
        </ol>
      </p>
    </div>
  ),
}

export const collectionForm = {
  image: '/resources/images/forms/spit_timer.svg',
  section: 'Registro de toma de muestra para prueba de Vitamina D3',
  description: '',
  sidebar: () => <></>,
  title: 'Recolección de Muestras',
  content: (
    <>
      <p className="instructions-1">Recolecte la muestra de saliva y llena el cuestionario.</p>
      <Form.Item
        hasFeedback
        name="recollectionTime"
        label="Fecha de recolección de la muestra."
        rules={[{ required: true, message: 'La fecha de recolección es obligatoria' }]}
      >
        <DatePicker
          size="large"
          format="DD/MM/YYYY"
          locale={locale}
          style={{ width: 150 }}
          placeholder="DD/MM/AAAA"
        />
      </Form.Item>
      <p>
        <b>Muestra</b>
      </p>
      <Row>
        <Col xs={1}>
          <img src="/resources/images/forms/hormonal-general-saliva-sample.svg" width="30" alt="" />
        </Col>
        <Col xs={23}>
          <Form.Item
            hasFeedback
            name="sampleHour"
            label=""
            rules={[{ required: true, message: 'El campo es obligatorio' }]}
          >
            <TimePicker
              size="large"
              format="hh:mm A"
              showNow={false}
              locale={locale}
              style={{ width: 150 }}
              placeholder="Selecciona la hora"
              hideDisabledOptions
              inputReadOnly
              use12Hours
              defaultValue={moment('00:00', 'hh:mm')}
              disabledHours={() => [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  ),
  notify: true,
}
