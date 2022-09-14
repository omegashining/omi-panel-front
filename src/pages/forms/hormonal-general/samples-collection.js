import React from 'react'
import moment from 'moment'
import 'moment/locale/es-us'
import locale from 'antd/es/date-picker/locale/es_ES'
import { Col, DatePicker, Form, Row, TimePicker, Tooltip } from 'antd'

export const spitInstructions1 = {
  image: '/resources/images/forms/spit.svg',
  section: 'Preparación para la toma de muestras de la prueba hormonal',
  description:
    'El presente instructivo contiene las indicaciones a realizar para una correcta toma de muestras para realizar los análisis de saliva ofrecidos por OmiGenomics. \n',
  sidebar: () => <></>,
  title: 'Preparación para la toma de muestras',
  content: (
    <div>
      <p>
        <strong>Prepare los siguientes requisitos para su recolección de muestras:</strong>
      </p>
      <p>
        1. <strong>IMPORTANTE:</strong> Escriba el Kit ID del código de barras que se encuentra en
        la caja de su kit, su nombre, fecha y hora de recolección en la etiqueta de los tubos de las
        muestras para la saliva con tinta permanente.
      </p>
      <img
        src="/resources/images/forms/hormonal-general-sample-label.svg"
        style={{ display: 'block', margin: '20px auto' }}
        alt=""
      />
    </div>
  ),
}

export const spitInstructions2 = {
  image: '/resources/images/forms/spit.svg',
  section: 'Preparación para la toma de muestras de la prueba hormonal',
  description: '',
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

export const spitInstructions3 = {
  image: '/resources/images/forms/spit.svg',
  section: 'Toma de muestras para prueba hormonal',
  description: '',
  sidebar: () => <></>,
  title: 'Pasos para la toma de muestras',
  content: (
    <div>
      <p className="text-right p-3">
        <b>TIPS</b>
        <Tooltip
          style={{ marginRight: '20px' }}
          title={
            <div>
              <p>
                <b>¿Boca seca?</b> Intente presionar tu lengua contra los dientes. Huela (no coma)
                un limón u otra comida que pueda comenzar el flujo de saliva. Bostezar también puede
                ayudar.
              </p>
              <p>
                <b>¿Se equivocó en la recolección?</b> Sólo enjuague el tubo completo con agua
                caliente, sin jabón, deja secar al aire libre y comience de nuevo.
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
          <li>Cuando termine, cierre el tubo y colóquelo de nuevo en la bolsita de plástico.</li>
          <li>Repita los pasos 1 a 4 para la recolección del mediodía, tarde y noche.</li>
        </ol>
      </p>
    </div>
  ),
}

export const collectionTable = sex => ({
  image: '/resources/images/forms/spit.svg',
  section: 'Toma de muestras para prueba hormonal',
  description:
    'El presente instructivo contiene las indicaciones a realizar para una correcta toma de muestras para realizar los análisis de saliva ofrecidos por OmiGenomics. \n',
  sidebar: () => <></>,
  title: 'Tabla 1. Guía para la recolección de muestras',
  content: (
    <div className="table">
      <Row className="title">
        <Col className="padding-cell" span={24}>
          <p>
            <strog style={{ color: '#FFF' }}>
              Guías para la recolección de muestras (cuando su análisis sea de E2, E3, P4, T)
            </strog>
          </p>
        </Col>
      </Row>
      {sex === 'female' ? (
        <>
          <Row className="header">
            <Col className="border-cell padding-cell" span={8}>
              <p>
                <strog>Mujeres</strog>
              </p>
            </Col>
            <Col className="padding-cell" span={16}>
              <strog>Toma de muestras</strog>
            </Col>
          </Row>
          <Row className="content">
            <Col className="border-cell padding-cell" span={8}>
              <p>Periodos regulares.</p>
            </Col>
            <Col className="padding-cell" span={16}>
              Día 19, 20, o 21 de ciclo <br />
              (primer día del sangrado = día 1).
            </Col>
          </Row>
          <Row className="content">
            <Col className="border-cell padding-cell" span={8}>
              <p>Periodos irregulares.</p>
            </Col>
            <Col className="padding-cell" span={16}>
              Recolectar cuando no esté sangrando <br />
              (o 5 días antes del periodo esperado).
            </Col>
          </Row>
          <Row className="content">
            <Col className="border-cell padding-cell" span={8}>
              <p>Sin periodos.</p>
            </Col>
            <Col className="padding-cell" span={16}>
              Cualquier día del mes.
            </Col>
          </Row>
        </>
      ) : (
        <Row className="footer">
          <Col className="border-cell padding-cell" span={8}>
            <p>
              <strog>Hombres</strog>
            </p>
          </Col>
          <Col className="padding-cell" span={16}>
            <strog>Cualquier día del mes.</strog>
          </Col>
        </Row>
      )}
      <p className="note center">
        *Si usted está actualmente en tratamiento hormonal, para más información, revisar la{' '}
        <a href="#">Guía de usuarios de hormonas</a>.
      </p>
    </div>
  ),
})

export const samplingTake = {
  image: '/resources/images/forms/spit.svg',
  section: 'Preparación para la toma de muestras de prueba hormonal',
  description: '',
  sidebar: () => <></>,
  title: 'Preparación para la toma de muestras',
  content: (
    <>
      <p>
        4. <b>Recolección de muestras de saliva</b> (toma de muestras):
      </p>
      <table>
        <tr>
          <td>
            Recolecte la muestra en el tubo grande por la mañana en ayunas (sólo agua permitida),
            durante los primeros 30 minutos después de despertar.
          </td>
          <td>
            <img src="/resources/images/forms/sampling-morning.svg" alt="" className="p-3" />
          </td>
        </tr>
        <tr>
          <td>
            Recolecte en un tubo chico al medio día, antes de comer (horario sugerido 12:00 p.m).
          </td>
          <td>
            <img src="/resources/images/forms/sampling-day.svg" alt="" className="p-3" />
          </td>
        </tr>
        <tr>
          <td>
            Recolecte en un tubo chico por la tarde antes de cenar (horario sugerido 6:00 pm a 7:00
            pm).
          </td>
          <td>
            <img src="/resources/images/forms/sampling-afternoon.svg" alt="" className="p-3" />
          </td>
        </tr>
        <tr>
          <td>Recolecte el último tubo chico antes de dormir (horario sugerido 9:00 pm).</td>
          <td>
            <img src="/resources/images/forms/sampling-evening.svg" alt="" className="p-3" />
          </td>
        </tr>
      </table>
    </>
  ),
}

export const samplingSteps = {
  image: '/resources/images/forms/spit.svg',
  section: 'Importante',
  description:
    'Las muestras de saliva deben ser enviadas lo más pronto posible después de la recolección, éstas permanecerán estables en condiciones promedio de los envíos de paquetería. Si las muestras no son enviadas en las primeras 48 horas después de la toma, por favor de guardarlas en el refrigerador y anotar los días en la sección correspondiente del cuestionario hormonal.',
  sidebar: () => <></>,
  title: 'Pasos para la toma de muestra:',
  content: (
    <ol>
      <li>Enjuague su boca con agua 5 minutos antes de la toma de muestras.</li>
      <li>
        Comience a recolectar la saliva, permitiendo que se junte en su boca hasta transferirla al
        tubo.
      </li>
      <li>
        Llene el tubo por lo menos hasta la mitad de su capacidad. Usualmente se toma de 5 a 30
        minutos dependiendo del flujo de saliva.
      </li>
      <li>Cuando termine, cierre el tubo y colóquelo de nuevo en la bolsita de plástico.</li>
      <li>Repita los pasos 1 a 4 para la recolección del mediodía, tarde y noche.</li>
    </ol>
  ),
}

export const collectionForm = {
  image: '/resources/images/forms/spit_timer.svg',
  section: 'Registro de toma de muestra para prueba hormonal',
  description: '',
  sidebar: () => <></>,
  title: 'Recolección de Muestras',
  content: (
    <>
      <p className="instructions-1">
        Recolecte las muestras de saliva (1 muestra de saliva por cada tubo) y responda las
        siguientes preguntas.
      </p>
      <Form.Item
        hasFeedback
        name="recollectionTime"
        label="Fecha de recolección"
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
      <Row>
        <Col span={12}>Muestra por la mañana (6:00 - 9:00 A.M.)</Col>
        <Col span={12}>Muestra medio día (10:00 - 11:00 A.M.)</Col>
      </Row>
      <Row>
        <Col span={4}>
          <img src="/resources/images/forms/hormonal-general-saliva-sample.svg" width="30" alt="" />
        </Col>
        <Col span={8}>
          <Form.Item
            hasFeedback
            name="tube1"
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
              disabledHours={() => [
                0,
                1,
                2,
                3,
                4,
                5,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <img src="/resources/images/forms/hormonal-general-saliva-sample.svg" width="30" alt="" />
        </Col>
        <Col span={8}>
          <Form.Item
            hasFeedback
            name="tube2"
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
              disabledHours={() => [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>Muestra por la tarde (6:00 - 7:00 P.M.)</Col>
        <Col span={12}>Muestra por la noche (9:00 - 11:00 P.M.)</Col>
      </Row>
      <Row>
        <Col span={4}>
          <img src="/resources/images/forms/hormonal-general-saliva-sample.svg" width="30" alt="" />
        </Col>
        <Col span={8}>
          <Form.Item
            hasFeedback
            name="tube3"
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
              defaultValue={moment('12:00', 'hh:mm')}
              disabledHours={() => [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                20,
                21,
                22,
                23,
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <img src="/resources/images/forms/hormonal-general-saliva-sample.svg" width="30" alt="" />
        </Col>
        <Col span={8}>
          <Form.Item
            hasFeedback
            name="tube4"
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
              defaultValue={moment('12:00', 'hh:mm')}
              disabledHours={() => [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  ),
  notify: true,
}
