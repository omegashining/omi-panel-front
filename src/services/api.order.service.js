import axios from 'axios'
import { upload } from "utils/api";
import config from '../config'

export async function register(folio) {
  const token = localStorage.getItem('token')

  return axios
    .post(
      `${config.api.url}/order`,
      { folio },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    .then(result => result.data)
}

export async function loadAssignedOrders() {
  const token = localStorage.getItem('token')

  return axios
    .get(`${config.api.url}/order/assigned`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(result => result.data)
    .catch(() => [])
}

export async function loadAllOrders() {
  const token = localStorage.getItem('token')

  return axios
    .get(`${config.api.url}/order/all`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(result => result.data)
    .catch(() => [])
}

export async function loadOrders() {
  const token = localStorage.getItem('token')

  return axios
    .get(`${config.api.url}/order/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(result => result.data)
    .catch(() => [])
}

export async function loadOrder(orderId) {
  const token = localStorage.getItem('token')

  return axios
    .get(`${config.api.url}/order/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(result => result.data)
    .catch(() => [])
}

export function uploadResults( id, file, onUploadProgress = () => {} ) {
  return upload( `/order/results/${id}`, [file], {}, onUploadProgress );
}

export async function downloadResults( id ) {
  const token = localStorage.getItem('token')

  return axios
    .get(`${config.api.url}/order/results/${id}`, { responseType: 'blob',
      headers: { Authorization: `Bearer ${token}` },
    }).then( result => result.data ).catch(() => null)
}

export function uploadInterpretation( id, file, onUploadProgress = () => {} ) {
  return upload( `/order/interpretation/${id}`, [file], {}, onUploadProgress );
}

export async function downloadIntepretation( id ) {
  const token = localStorage.getItem('token')

  return axios
    .get(`${config.api.url}/order/interpretation/${id}`, { responseType: 'blob',
      headers: { Authorization: `Bearer ${token}` },
    }).then( result => result.data ).catch(() => null)
}

export async function updateStatus( id, status ) {
  const token = localStorage.getItem('token')

  return axios
    .put(
      `${config.api.url}/order/${id}/status`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } },
    )
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

/* eslint-disable no-underscore-dangle */
export async function assignMedic( id, medic ) {
  const token = localStorage.getItem('token')

  return axios
    .put(
      `${config.api.url}/order/${id}/assign`,
      { medic },
      { headers: { Authorization: `Bearer ${token}` } },
    )
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