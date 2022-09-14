import React from 'react'
import 'moment/locale/es-us'
import locale from 'antd/es/date-picker/locale/es_ES'
import { Card, DatePicker, Form, Radio } from 'antd'
import CustomInput from '../../../components/extra/custom-input'

export default (isRemovedOvaries, onChangeRemovedOvaries) => ({
  image: '/resources/images/forms/hormonal.svg',
  section: 'Cuestionario Hormonal',
  sidebar: () => <></>,
  title: 'Responde las siguientes preguntas',
  content: (
    <Card title="Estatus actual de su ciclo menstrual:" size="small">
      <Form.Item
        hasFeedback
        name="lastMenstruation"
        label="Fecha del primer día de su última menstruación"
        rules={[
          {
            required: true,
            message: 'La fecha de su última menstruación es obligatoria',
          },
        ]}
      >
        <DatePicker
          size="large"
          format="DD/MM/YYYY"
          locale={locale}
          placeholder="Fecha de su última menstruación"
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="menstrualCycles"
        label="Ciclos menstruales"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Regulares</Radio>
          <Radio value={2}>Irregulares</Radio>
          <Radio value={3}>Sin ciclos menstruales</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="hysterectomy"
        label="Histerectomía"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Sí</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="isRemovedOvaries"
        label="Ovarios removidos"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio',
          },
        ]}
      >
        <Radio.Group name="radiogroup" onChange={onChangeRemovedOvaries}>
          <Radio value={1}>Sí</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </Form.Item>
      {isRemovedOvaries && (
        <Form.Item
          hasFeedback
          name="ovariesRemoved"
          label="Número de Ovarios removidos"
          rules={[
            {
              required: true,
              message: 'El campo es obligatorio',
            },
          ]}
        >
          <Radio.Group name="radiogroup">
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
          </Radio.Group>
        </Form.Item>
      )}
      <Form.Item
        hasFeedback
        name="currentPregnancy"
        label="Embarazo actual"
        rules={[
          {
            required: true,
            message: 'Especificar si esta embarazada es obligatorio',
          },
          {
            validator: async (_, value) => {
              if (value.option === 1 && !value.number)
                throw new Error('El campo es obligatorio y debe ser mayor a 0.')
              return value
            },
          },
        ]}
      >
        <CustomInput placeholder="Semanas de embarazo" width={250} isNumeric />
      </Form.Item>
    </Card>
  ),
  notify: true,
})
