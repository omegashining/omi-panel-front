import axios from 'axios'
import { notification } from 'antd'
import moment from 'moment'
import config from '../config'

export async function register(user) {
  const token = localStorage.getItem('token')
  user.name = `${user.name} ${user.lastname}`
  return axios
    .post(`${config.api.url}/user`, { ...user }, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data.token)
    .then(() => {
      return true
    })
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function preRegisterMedic(user) {
  const token = localStorage.getItem('token')
  user.name = `${user.name} ${user.lastname}`
  return axios
    .put(`${config.api.url}/user/medic`, { ...user }, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data)
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function sendInvitation(id) {
  const token = localStorage.getItem('token')
  return axios
    .put(`${config.api.url}/user/medic/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data)
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function registerMedic(code, user) {
  const token = localStorage.getItem('token')
  user.name = `${user.name} ${user.lastname}`
  return axios
    .post(`${config.api.url}/user/medic/${code}`, { ...user }, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data)
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function recovery(user) {
  return axios
    .post(`${config.api.url}/user/recovery`, { ...user })
    .then(result => result.data)
    .then(() => {
      return true
    })
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function changePassword(user, code) {
  return axios
    .post(`${config.api.url}/user/changePassword/${code}`, { ...user })
    .then(result => result.data)
    .then(() => {
      return true
    })
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function getMedics() {
  const token = localStorage.getItem('token')
  return axios
    .get(`${config.api.url}/user/medics`, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data)
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function getMedic(code) {
  const token = localStorage.getItem('token');
  return axios
    .get(`${config.api.url}/user/medic/${code}`, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data)
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function getCurrent() {
  const token = localStorage.getItem('token')
  return axios
    .get(`${config.api.url}/user`, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data)
    .then(user => ({
      ...user,
      birthday: moment(user.birthday),
    }))
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function update(user) {
  const token = localStorage.getItem('token')
  return axios
    .put(`${config.api.url}/user`, { ...user }, { headers: { Authorization: `Bearer ${token}` } })
    .then(result => result.data.token)
    .then(() => {
      return true
    })
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export async function acceptAgreement() {
  const token = localStorage.getItem('token')
  return axios
    .post(
      `${config.api.url}/user/accept/agreement`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then(result => result.data)
    .catch(result => {
      const error = result.response.data
      notification.warning({
        message: 'Aviso de Privacidad',
        description: `${error.message} (code: ${error.code})`,
      })
    })
}

export async function acceptTerms() {
  const token = localStorage.getItem('token')
  return axios
    .post(
      `${config.api.url}/user/accept/terms`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then(result => result.data)
    .catch(result => {
      const error = result.response.data
      notification.warning({
        message: 'Terminos y Condiciones',
        description: `${error.message} (code: ${error.code})`,
      })
    })
}

export async function enableUser( id ) {
  const token = localStorage.getItem('token')
  return axios
    .put(
      `${config.api.url}/user/${id}/enable`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then(result => result.data.token)
    .then(() => {
      return true
    })
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

/* eslint-disable no-underscore-dangle */
export async function disabledUser( id ) {
  const token = localStorage.getItem('token')
  return axios
    .put(
      `${config.api.url}/user/${id}/disable`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then(result => result.data.token)
    .then(() => {
      return true
    })
    .catch(result => {
      const error = new Error(result.response.data.message)
      error.code = result.response.data.code
      throw error
    })
}

export const a = 4
