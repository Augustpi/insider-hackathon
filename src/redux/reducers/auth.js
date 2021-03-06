import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  id: null,
  name: null,
  email: null,
  password: null,
  rate: null,
  payment: null,
  photoUrl: "",
  lastPayDate: null,
  date: null,
  error: null,
  token: null,
  loading: false,
  authRedirectPath: '/'
};

const authStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    id: action.id,
    name: action.name,
    email: action.email,
    password: action.password,
    rate: action.rate,
    payment: action.payment,
    photoUrl: action.photoUrl,
    lastPayDate: action.lastPayDate,
    date: action.date,
    token: action.token,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state) => {
  return updateObject(state, initialState);
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const createNewUserSuccess = (state) => {
  return updateObject(state, { error: null, loading: false });
};

const createNewUserFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    case actionTypes.CREATE_USER_SUCCESS: return createNewUserSuccess(state, action);
    case actionTypes.CREATE_USER_FAIL: return createNewUserFail(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;