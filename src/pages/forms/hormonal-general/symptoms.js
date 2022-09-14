import React from 'react'
import { Form, Radio } from 'antd'
import { symptomsMen, symptomsWomen, tips } from './constants'
import Tip from '../../../components/extra/tip'

const images = {
  female: {
    image: '/resources/images/forms/hormonal-woman.svg',
    title: 'Cuestionario Hormonal Mujer',
  },
  male: {
    image: '/resources/images/forms/hormonal-man.svg',
    title: 'Cuestionario Hormonal Hombre',
  },
}
export default (sex, lifestyle) => {
  const symptoms = sex === 'female' ? symptomsWomen : symptomsMen
  const image = lifestyle ? 'hormonal-general' : 'hormonal'
  return Array(Math.ceil(symptoms.length / 12))
    .fill(0)
    .map((_, current) => ({
      image: current === 0 ? images[sex].image : `/resources/images/forms/${image}.svg`,
      section: current === 0 ? images[sex].title : '',
      description: current === 0 ? `Indique los síntomas e intensidad según corresponda` : '',
      fullHeight: current !== 0,
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
