import moment from "moment";
import actions from './actions'

const initialState = {
  id: '',
  name: '',
  email: '',
  role: '',
  sex: '',
  phone: '',
  birthday: moment(),
  verified: false,
  agreement: false,
  terms: false,
  avatar: '',
  authorized: false,
  loading: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
