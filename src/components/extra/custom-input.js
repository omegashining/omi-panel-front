import React, { useState } from 'react'
import { Input, InputNumber, Radio } from 'antd'

export default ({
  value = {},
  onChange,
  label = <></>,
  placeholder = '',
  width = 150,
  isNumeric = false,
}) => {
  const [details, setDetails] = useState('')
  const [number, setNumber] = useState(0)
  const [option, setOption] = useState(0)

  const triggerChange = changedValue => {
    onChange({ details, number, option, ...value, ...changedValue })
  }

  const onDetailsChange = e => {
    const newValue = e.target.value
    setDetails(newValue)

    triggerChange({
      details: newValue,
    })
  }

  const onNumberChange = newValue => {
    setNumber(newValue)

    triggerChange({
      number: newValue,
    })
  }

  const onOptionChange = e => {
    const newOption = e.target.value
    setOption(newOption)

    triggerChange({
      option: newOption,
    })
  }

  return (
    <>
      <Radio.Group value={value.option || option} name="radiogroup" onChange={onOptionChange}>
        <Radio value={1}>Si</Radio>
        <Radio value={2}>No</Radio>
      </Radio.Group>
      {value.option === 1 && !isNumeric && (
        <>
          <Input
            type="text"
            onChange={onDetailsChange}
            value={value.details || details}
            placeholder={placeholder}
            style={{
              width,
            }}
          />{' '}
          {label}
        </>
      )}
      {value.option === 1 && isNumeric && (
        <>
          <InputNumber
            onChange={onNumberChange}
            value={value.number || number}
            placeholder={placeholder}
            min={0}
            max={100}
            style={{
              width,
            }}
          />{' '}
          {label}
        </>
      )}
    </>
  )
}
