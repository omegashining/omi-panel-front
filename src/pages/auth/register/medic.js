import React from 'react'
import { Helmet } from 'react-helmet'
import RegisterMedic from "components/cleanui/system/Auth/Register/medic";

const SystemRegister = () => {
  return (
    <div>
      <Helmet title="Completar Registro" />
      <RegisterMedic />
    </div>
  )
}

export default SystemRegister
