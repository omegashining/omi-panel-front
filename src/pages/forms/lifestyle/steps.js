import React from 'react'
import { Form, Radio } from 'antd'
import Tip from '../../../components/extra/tip'
import CustomInput from '../../../components/extra/custom-input'

export const form1 = {
  image: '/resources/images/forms/lifestyle-path.svg',
  section: '',
  fullHeight: true,
  description: '',
  sidebar: () => <></>,
  title: 'Seleccione la opción que mejor se adecúe a sus hábitos actuales',
  content: (
    <>
      <Form.Item
        hasFeedback
        name="personalStress"
        label="Nivel de estrés personal"
        rules={[{ required: true, message: 'El nivel de estrés personal es obligatorio' }]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Poco</Radio>
          <Radio value={2}>Moderado</Radio>
          <Radio value={3}>Alto</Radio>
          <Radio value={4}>Intenso</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="jobStress"
        label="Nivel de estrés laboral/escolar"
        rules={[
          {
            required: true,
            message: 'El nivel de estrés laboral/escolar es obligatorio',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Poco</Radio>
          <Radio value={2}>Moderado</Radio>
          <Radio value={3}>Alto</Radio>
          <Radio value={4}>Intenso</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="dreamHours"
        label="Horas de sueño"
        rules={[{ required: true, message: 'Las horas de sueño son obligatorias' }]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>1-2 horas</Radio>
          <Radio value={2}>3-4 horas</Radio>
          <Radio value={3}>5-6 horas</Radio>
          <Radio value={4}>Más de 6 horas</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="sunExposition"
        label="Exposición a la luz solar en 1 semana"
        rules={[
          {
            required: true,
            message: 'Las horas de exposición a la luz solar en 1 semana son obligatorias',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Menos de 3 horas</Radio>
          <Radio value={2}>4-6 horas</Radio>
          <Radio value={3}>7-9 horas</Radio>
          <Radio value={4}>Más de 10 horas</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  ),
}

export const form2 = {
  image: '/resources/images/forms/lifestyle-path.svg',
  section: '',
  fullHeight: true,
  description: '',
  sidebar: () => <></>,
  title: 'Exposición a productos capilares en 1 semana:',
  content: (
    <>
      <Form.Item
        hasFeedback
        name="shampoo"
        label="Shampoo anticaída"
        rules={[
          {
            required: true,
            message: 'La cantidad de veces del uso de shampoo anticaída en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>1-2 veces</Radio>
          <Radio value={3}>3-4 veces</Radio>
          <Radio value={4}>Más de 4 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="treatments"
        label="Tratamientos capilares"
        rules={[
          {
            required: true,
            message:
              'Las cantidad de veces del uso de tratamientos capilares en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>1-2 veces</Radio>
          <Radio value={3}>3-4 veces</Radio>
          <Radio value={4}>Más de 4 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="oils"
        label="Aceites (coco, argán, etc.)"
        rules={[
          {
            required: true,
            message: 'La cantidad de veces del uso de aceites en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>1-2 veces</Radio>
          <Radio value={3}>3-4 veces</Radio>
          <Radio value={4}>Más de 4 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="gel"
        label="Gel"
        rules={[
          {
            required: true,
            message: 'Las cantidad de veces del uso de gel en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>1-2 veces</Radio>
          <Radio value={3}>3-4 veces</Radio>
          <Radio value={4}>Más de 4 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="serum"
        label="Ceras"
        rules={[
          {
            required: true,
            message: 'Las cantidad de veces del uso de ceras en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>1-2 veces</Radio>
          <Radio value={3}>3-4 veces</Radio>
          <Radio value={4}>Más de 4 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="hairspray"
        label="Fijadores"
        rules={[
          {
            required: true,
            message: 'Las cantidad de veces del uso de fijadores en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>1-2 veces</Radio>
          <Radio value={3}>3-4 veces</Radio>
          <Radio value={4}>Más de 4 veces</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  ),
}

export const form3 = {
  image: '/resources/images/forms/lifestyle-path.svg',
  section: '',
  fullHeight: true,
  description: '',
  sidebar: () => <></>,
  title: 'Seleccione la opción que mejor se adecúa a sus hábitos actuales',
  content: (
    <>
      <Form.Item
        hasFeedback
        name="frequencyHair"
        label="Frecuencia de cepillado del cabello al día"
        rules={[
          {
            required: true,
            message: 'Las cantidad de veces del cepilladp del cabello al día es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>1-2 veces</Radio>
          <Radio value={3}>3-4 veces</Radio>
          <Radio value={4}>Más de 4 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="frequencyTaint"
        label="Frecuencia de tratamientos o aplicación de tintes/decoloraciones al año"
        rules={[
          {
            required: true,
            message:
              'La cantidad de veces de tratamientos o aplicación de tintes/decoloraciones al año es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="frequencyHeat"
        label="Frecuencia de uso de aparatos que generan calor en el cabello al mes (secadoras, planchas, etc.)"
        rules={[
          {
            required: true,
            message:
              'Las frecuencia de uso de aparatos que generan calor en el cabello al mes es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="frequencyWorkOut"
        label="Frecuencia de ejercitación en 1 semana"
        rules={[
          {
            required: true,
            message: 'La frecuencia de ejercitación en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  ),
}

export const form4 = {
  image: '/resources/images/forms/lifestyle-path.svg',
  section: '',
  fullHeight: true,
  description: '',
  sidebar: () => <></>,
  title: 'Hábitos alimenticios en 1 semana',
  content: (
    <>
      <Form.Item
        hasFeedback
        name="frequencyHealthyFood"
        label="Comidas saludables"
        rules={[
          {
            required: true,
            message:
              'La cantidad de veces del consumo de comida saludable en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="frequencyFastFood"
        label="Comida rápida/chatarra"
        rules={[
          {
            required: true,
            message:
              'La cantidad de veces del consumo de comida rápida/chatarra en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="frequencyVegetarianFood"
        label="Dieta vegetariana/vegana"
        rules={[
          {
            required: true,
            message:
              'La cantidad de veces del consumo de comida vegetariana/vegana en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="frequencyDisorders"
        label={<Tip text="Desórdenes alimenticios" tip="Anorexia, bulimia, obesidad" />}
        rules={[
          {
            required: true,
            message: 'Especificar si hay desórdenes alimenticios es obligatorio',
          },
          {
            validator: async (_, value) => {
              if (value.option === 1 && !value.details) throw new Error('El campo es obligatorio.')
              return value
            },
          },
        ]}
      >
        <CustomInput placeholder="Especifique" width={250} />
      </Form.Item>
    </>
  ),
}

export const form5 = {
  image: '/resources/images/forms/lifestyle-path.svg',
  section: '',
  fullHeight: true,
  description: '',
  sidebar: () => <></>,
  title: 'Seleccione la opción que mejor se adecúa a sus hábitos actuales',
  content: (
    <>
      <Form.Item
        hasFeedback
        name="smoker"
        label="Fumador"
        rules={[
          {
            required: true,
            message: 'Especificar si es fumador es obligatorio',
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
        <CustomInput placeholder="Veces al día" width={250} isNumeric />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="alcohol"
        label="Consumo de alcohol en 1 semana"
        rules={[
          {
            required: true,
            message: 'La cantidad de veces del consumo del alcohol en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="drugs"
        label={<Tip text="Consumo de drogas en 1 semana" tip="Drogas recreativas" />}
        rules={[
          {
            required: true,
            message: 'La cantidad de veces del consumo de drogas en 1 semana es obligatoria',
          },
        ]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Nunca</Radio>
          <Radio value={2}>2-3 veces</Radio>
          <Radio value={3}>5-6 veces</Radio>
          <Radio value={4}>Más de 7 veces</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  ),
}
