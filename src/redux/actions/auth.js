import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = () => {
  return {};
};

export const authFail = (error, currentUser) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
    currentUser: currentUser
  };
};

export const createNewUserSuccess = () => {
  return {
    type: actionTypes.CREATE_USER_SUCCESS
  };
};

export const createNewUserFail = (error) => {
  return {
    type: actionTypes.CREATE_USER_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('currentUser');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

const loginMethodHandler = async (dispatch, token, values, method) => {
  // user ip address
  await axios.get('https://api.ipify.org/?format=jsonp&callback=a')
    .then(ipAddress => ipAddress.data.substring(9, ipAddress.data.length - 4));
  // login
  // dispatch
}

/* Login with Email */
export const signUp = (_values) => {
  return async dispatch => {
    dispatch(authStart());
  }
}

export const login = (email, password) => {
  return async dispatch => {
    dispatch(authStart());
    if (email) {
      try {
        // Login handler
      } catch (error) {
        dispatch(authFail('Lütfen daha sonra tekrar deneyiniz', null));
      }
    } else {
      await dispatch(authFail(null, null));
    }
  };
};


export const authCheckState = () => {
  return dispatch => {
    // Login state check
    // dispatch(logout());
  };
};