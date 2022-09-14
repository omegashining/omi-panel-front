import locale from 'antd/es/date-picker/locale/es_ES'
import { Button, Col, DatePicker, Form, Input, InputNumber, Radio, Row, TimePicker } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'

export default (hormonesUsed, onChangeHormonesUsed) => ({
  image: '/resources/images/forms/vitamin-d.svg',
  section: 'Vitamina D3',
  description: '',
  sidebar: () => <></>,
  title: 'Hormonas y suplementos utilizados',
  content: (
    <>
      <Form.Item
        hasFeedback
        name="hormonesUsed"
        label="Ha utilizado alguna hormona en los últimos 2 meses."
        rules={[{ required: true, message: 'El campo es obligatorio' }]}
      >
        <Radio.Group name="radiogroup" onChange={onChangeHormonesUsed}>
          <Radio value={1}>Sí</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </Form.Item>

      {hormonesUsed === 1 && (
        <>
          <p>Indique cualquier hormona(s) utilizada(s) en los últimos 2 meses.</p>
          <Form.List name="hormones">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row key={key}>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'kind']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <Input placeholder="Tipo de hormona" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'brand']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <Input placeholder="Marca" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'application']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <Input placeholder="Aplicación" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'dose']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <InputNumber placeholder="Dosis" min={0} max={100} step={1} />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'date']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <DatePicker
                          size="large"
                          format="DD/MM/YYYY"
                          locale={locale}
                          placeholder="Fecha"
                        />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'schedule']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <TimePicker format="hh:mm A" placeholder="Horario" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'times']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <InputNumber
                          placeholder="Veces por día"
                          style={{ width: 150 }}
                          min={1}
                          max={100}
                          step={1}
                        />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={12} xl={6} className="p-1">
                      <Form.Item
                        {...restField}
                        name={[name, 'use']}
                        rules={[{ required: true, message: 'El campo es requerido' }]}
                      >
                        <Input placeholder="Tiempo de utilización" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Agregar
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </>
      )}
    </>
  ),
})
