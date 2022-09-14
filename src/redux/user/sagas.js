import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import moment from "moment";
import { login, currentAccount, logout } from 'services/api.auth.service'
import { acceptAgreement, acceptTerms } from 'services/api.user.service'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(login, email, password)
  yield put({
    type: 'user/LOAD_CURRENT_ACCOUNT',
  })
  if (success) {
    yield history.push('/')
    notification.success({
      message: 'Inicio de sesión',
      description: 'Ha accedido correctamente a OmiGenomics',
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const response = yield call(currentAccount)
  if (response) {
    const { _id: id, name, email, role, verified, sex, birthday, agreement, phone, terms } = response

    yield put({
      type: 'user/SET_STATE',
      payload: {
        id,
        name,
        email,
        role,
        sex,
        phone,
        birthday: moment(birthday),
        verified,
        agreement,
        terms,
        avatar: '',
        authorized: !!id,
      },
    })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  yield call(logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      sex: '',
      phone: '',
      birthday: moment(),
      avatar: '',
      terms: false,
      agreement: false,
      authorized: false,
      loading: false,
    },
  })
}

export function* ACCEPT_AGREEMENT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(acceptAgreement)
  if (success) {
    notification.success({
      message: 'Aviso de Privacidad',
      description: 'Has aceptado el aviso de privacidad ',
    })
  }
  yield put({
    type: 'user/LOAD_CURRENT_ACCOUNT',
  })
  yield put({
    type: 'user/SET_STATE',
    payload: {
      agreement: !!success,
      loading: false,
    },
  })
}

export function* ACCEPT_TERMS() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(acceptTerms)
  if (success) {
    notification.success({
      message: 'Términos y Condiciones',
      description: 'Has aceptado los términos y condiciones',
    })
  }
  yield put({
    type: 'user/LOAD_CURRENT_ACCOUNT',
  })
  yield put({
    type: 'user/SET_STATE',
    payload: {
      agreement: !!success,
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    takeEvery(actions.ACCEPT_AGREEMENT, ACCEPT_AGREEMENT),
    takeEvery(actions.ACCEPT_TERMS, ACCEPT_TERMS),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
