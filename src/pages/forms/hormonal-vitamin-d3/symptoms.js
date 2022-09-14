import React from 'react'
import { Form, Radio } from 'antd'
import { symptomsAll, symptomsWomen, tips } from './constants'
import Tip from '../../../components/extra/tip'

export default sex => {
  const symptoms = sex === 'female' ? [...symptomsAll, ...symptomsWomen] : symptomsAll
  return Array(Math.ceil(symptoms.length / 12))
    .fill(0)
    .map((_, current) => ({
      image: '/resources/images/forms/vitamin-d.svg',
      section: current === 0 ? 'Cuestionario Vitamina D3' : 'Vitamina D3',
      description: current === 0 ? `Indique los síntomas e intensidad según corresponda` : '',
      sidebar: () => <></>,
      title: (
        <>
          Indique los síntomas
          <br />
          <small>0 (Ninguno), 1 (Poco), 2 (Moderado), 3 (Severo)</small>
        </>
      ),
      content: (
        <div className="custom-form">
          {symptoms.slice(current * 12, (current + 1) * 12).map((field, index) => (
            <Form.Item
              hasFeedback
              name={`symptom${sex === 'female' ? 'Women' : 'Men'}-${current + 1}-${index + 1}`}
              label={tips[field] ? <Tip text={field} tip={tips[field]} /> : field}
              key={`symptom-${current + 1}-${index + 1}`}
              rules={[
                {
                  required: true,
                  message: 'El campo es obligatorio',
                },
              ]}
            >
              <Radio.Group name="radiogroup">
                <Radio value={1}>0</Radio>
                <Radio value={2}>1</Radio>
                <Radio value={3}>2</Radio>
                <Radio value={4}>3</Radio>
              </Radio.Group>
            </Form.Item>
          ))}
        </div>
      ),
      notify: true,
    }))
}
