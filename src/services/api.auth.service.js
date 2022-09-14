import axios from 'axios'
import { notification } from 'antd'
import config from '../config'

export async function login(email, password) {
  return axios
    .post(`${config.api.url}/auth/login`, { email, password })
    .then(result => result.data.token)
    .then(token => {
      localStorage.setItem('token', token)
      return token
    })
    .catch(result => {
      const error = result.response.data
      if( error.code === 4 ){
        notification.warning( {
          message: 'Login Error',
          description: "Correo no validado",
        } )
      } else {
        notification.warning( {
          message: 'Login Error',
          description: `${error.message} (code: ${error.code})`,
        } )
      }
    })
}

export async function currentAccount() {
  const token = localStorage.getItem('token')
  return axios
    .get(`${config.api.url}/auth/current`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(result => result.data)
    .catch(() => ({}))
}

export async function logout() {
  localStorage.removeItem('token')
  return true
}
