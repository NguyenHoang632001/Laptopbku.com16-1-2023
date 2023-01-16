import { login, logout } from 'services/UserService';
import * as actions from '../constants';

export const handleUserLogin = (email, password) => {
    return async (dispatch) => {
        try {
            let res = await login({ email, password });
            if (res && res.errCode === 0) {
                dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: res })
            } else {
                dispatch({ type: actions.USER_LOGIN_FAILED });
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: actions.USER_LOGIN_FAILED })
        }
    }
}

export const handleUserLogout = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: actions.USER_LOGOUT_SUCCESS });
        } catch (error) {
            console.log(error)
            dispatch({ type: actions.USER_LOGOUT_FAILED })
        }
    }
}