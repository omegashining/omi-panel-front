import axios from 'axios'
import config from '../config'

export async function find(folio) {
  const token = localStorage.getItem('token');

  return axios.get(`${config.api.url}/kit/${folio}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(result => result.data );
}

export async function test() {
  return false;
}
