import React from 'react'
import { Helmet } from 'react-helmet'
import { Button } from 'antd'
import { history } from '../../index'

const FinishForm = () => {
  return (
    <div>
      <Helmet title="Finalizado" />
      <div className="top-side-full">
        <div className="text-center mb-5">
          <h1 className="title mb-5 mt-5 px-3">
            <strong>¡Su información fue recibida con éxito!</strong>
          </h1>
          <h6 className="subtitle">
            Una vez llenado con éxito el cuestionario mande las muestras al laboratorio.
          </h6>
          <Button
            className="mt-5"
            type="primary"
            shape="round"
            size="large"
            onClick={() => history.push('/forms/package-delivery')}
          >
            Generar Guia
          </Button>
        </div>
      </div>

      <div>
        <div className="finish-left-side">
          <div className="logo">
            <img src="/resources/images/logo.svg" alt="" />
          </div>

          <div className="vertical-center">
            <div className="text-center mb-5">
              <h1 className="title mb-5 mt-5 px-3">
                <strong>¡Su información fue recibida con éxito!</strong>
              </h1>
              <h6 className="subtitle">
                Una vez llenado con éxito el cuestionario mande las muestras al laboratorio.
              </h6>
              <Button
                className="mt-5"
                type="primary"
                shape="round"
                size="large"
                onClick={() => history.push('/forms/package-delivery')}
              >
                Generar Guia
              </Button>
            </div>
          </div>
        </div>

        <div className="finish-main-side">
          <img src="/resources/images/finish.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default FinishForm
