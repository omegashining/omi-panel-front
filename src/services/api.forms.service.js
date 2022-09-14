import axios from 'axios'
import { notification } from 'antd'
import config from '../config'

export async function updateForm( orderId, type, data, finished = false, notify = true ) {
  const token = localStorage.getItem('token')

  return axios.post(`${config.api.url}/form/${orderId}/${type}`, { data, finished }, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      if( notify )
        notification.success({
          message: 'Formulario',
          description: 'Se ha guardado correctamente el formulario',
        })
      return true;
    }).catch(result => {
      const error = result.response.data
      notification.warning({
        message: 'Formulario',
        description: `${error.message} (code: ${error.code})`,
      })
      throw new Error( error.message );
    })
}

export async function loadForm( orderId, type ) {
  const token = localStorage.getItem('token')

  return axios.get(`${config.api.url}/form/${orderId}/${type}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(result => result.data).catch(() => ({ data: {} }))
}
