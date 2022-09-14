import React from 'react'
import { Form, InputNumber } from 'antd'
import { PicCenterOutlined } from '@ant-design/icons'

export default {
  image: '/resources/images/forms/hormonal-general.svg',
  section: '',
  description: '',
  fullHeight: true,
  sidebar: () => <></>,
  title: (
    <>
      Toma de medidas
      {/* <Tooltip
                  title={<img src="/resources/images/forms/gender_quiz.svg" alt="medidas" />}
                >
                  <img
                    src="/resources/images/forms/question.svg"
                    className="question"
                    alt="info"
                    style={{ height: '16px', margin: 0, display: 'inline' }}
                  />
                </Tooltip> */}
    </>
  ),
  content: (
    <div>
      <p>Indique sus medidas</p>
      <Form.Item
        hasFeedback
        name="weight"
        rules={[{ required: true, message: 'El peso es obligatorio' }]}
      >
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <InputNumber
          addonBefore={<PicCenterOutlined className="site-form-item-icon" />}
          min={0}
          max={180}
          placeholder="Peso (Kg)"
          size="large"
          className="w-100"
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="height"
        rules={[{ required: true, message: 'La altura es obligatoria' }]}
      >
        <InputNumber
          addonBefore={<PicCenterOutlined className="site-form-item-icon" />}
          min={0}
          max={2.2}
          placeholder="Altura (mts)"
          size="large"
          className="w-100"
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="waist"
        rules={[{ required: true, message: 'La medida de cintura es obligatoria' }]}
      >
        <InputNumber
          addonBefore={<PicCenterOutlined className="site-form-item-icon" />}
          min={0}
          max={150}
          placeholder="Medida de cintura (cm)"
          size="large"
          className="w-100"
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="heap"
        rules={[{ required: true, message: 'La medida de cadera es obligatoria' }]}
      >
        <InputNumber
          addonBefore={<PicCenterOutlined className="site-form-item-icon" />}
          min={0}
          max={150}
          placeholder="Medida de cadera (cm)"
          size="large"
          className="w-100"
        />
      </Form.Item>
    </div>
  ),
}
