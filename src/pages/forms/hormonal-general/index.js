import React, { useEffect } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Button, Form, Layout, Space, Spin } from 'antd'
import { loadForm, updateForm } from 'services/api.forms.service'
import { withRouter } from 'react-router-dom'
import { history } from '../../../index'
import Symptoms from './symptoms'
import MenstrualCycle from './menstrual-cycle'
import GeneralInstructions from './general-instructions'
import {
  collectionForm,
  collectionTable,
  // samplingSteps,
  samplingTake,
  spitInstructions1,
  spitInstructions2,
  spitInstructions3,
} from './samples-collection'
import Results from './results'
import { guide1, guide2 } from './guide'
import measures from './measures'
import Hormones from './hormones'
import { generalOverview } from './summary'

console.log(measures)

const { Sider, Header, Content } = Layout

const HormonalGeneralForm = ({
  user,
  match: {
    params: { orderId, previous },
  },
}) => {
  const [data, setData] = React.useState({})
  const [step, setStep] = React.useState(0)
  const [loading, setLoading] = React.useState(true)
  const [form] = Form.useForm()

  const onChangeRemovedOvaries = e => {
    setData({
      ...data,
      isRemovedOvaries: e.target.value,
    })
  }
  const onChangeHormonesUsed = e => {
    setData({
      ...data,
      hormonesUsed: e.target.value,
    })
  }

  const symptoms = Symptoms(user.sex, previous)
  const menstrualCycle = MenstrualCycle(data.isRemovedOvaries === 1, onChangeRemovedOvaries)
  const steps = [
    ...GeneralInstructions,
    spitInstructions1,
    spitInstructions2,
    samplingTake,
    spitInstructions3,
    collectionTable(user.sex),
    // samplingSteps,
    Results,
    collectionForm,
    guide1,
    guide2,
    measures,
    ...(user.sex === 'female' ? [menstrualCycle] : []),
    ...symptoms,
    Hormones(data.hormonesUsed, onChangeHormonesUsed),
    generalOverview(data, user),
  ]

  useEffect(() => {
    loadForm(orderId, 'hormonalGeneralForm').then(({ data: _data }) => {
      if (_data) {
        const current = _data.step || 1
        setStep(current >= steps.length ? current - 1 : current)

        if (_data.hormones)
          _data.hormones = _data.hormones.map(h => ({
            ...h,
            date: moment(h.date),
            schedule: moment(h.schedule),
          }))
        if (_data.recollectionTime) _data.recollectionTime = moment(_data.recollectionTime)
        if (_data.tube1) _data.tube1 = moment(_data.tube1)
        if (_data.tube2) _data.tube2 = moment(_data.tube2)
        if (_data.tube3) _data.tube3 = moment(_data.tube3)
        if (_data.tube4) _data.tube4 = moment(_data.tube4)
        // const current = _data.step || 0;
        // setStep( current >= steps.length ? current - 1 : current );
        delete _data.step
        setData(_data)
      }
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [user])

  const next = (notify = false, finished = false) => {
    form.validateFields().then(values => {
      const formData = { ...data, ...values, step: step + 1 }
      updateForm(orderId, 'hormonalGeneralForm', formData, finished, notify).then(() => {
        if (finished) {
          history.push('/forms/finish')
        } else {
          setData(formData)
          setStep(step + 1)
        }
      })
    })
  }

  const prev = () => {
    setStep(step - 1)
  }

  if (loading) return <Spin tip="Loading..." />
  return (
    <div>
      <Helmet title="Inicio" />
      <Form
        form={form}
        layout="vertical"
        hideRequiredMark
        onFinish={() => next(true, true)}
        className="mb-4"
        initialValues={{ ...data }}
      >
        <Header className="top-side">
          <Space>
            <img src={steps[step].image} alt="" />
            <div className="title">{steps[step].section}</div>
          </Space>
        </Header>
        <Layout>
          <Sider className="left-side" width={350}>
            <img
              src={steps[step].image}
              alt=""
              className={steps[step].fullHeight ? 'full-height' : ''}
            />
            <div className="title">{steps[step].section}</div>
            <div className="description">{steps[step].description}</div>
            {steps[step].sidebar()}
          </Sider>
          <Layout>
            <Content className="main-side">
              <div className="title">{steps[step].title}</div>
              <hr />
              <div className="main-content">{steps[step].content}</div>
              <div className="steps-action mt-5">
                {step === 0 && previous && (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ width: '220px' }}
                    onClick={() => history.push(`/order/${orderId}/lifestyleForm`)}
                  >
                    Anterior
                  </Button>
                )}
                {step > 0 && (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ width: '220px' }}
                    onClick={() => prev()}
                  >
                    Anterior
                  </Button>
                )}
                {step < steps.length - 1 && (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ width: '220px' }}
                    onClick={() => next(!!steps[step].save)}
                  >
                    Siguiente
                  </Button>
                )}
                {step === steps.length - 1 && (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ width: '220px' }}
                    htmlType="submit"
                    loading={loading}
                  >
                    <strong>Enviar cuestionario</strong>
                  </Button>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Form>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(withRouter(HormonalGeneralForm))
