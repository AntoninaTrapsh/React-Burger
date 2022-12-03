import AuthClient from "../../clients/auth-client";
import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS, SEND_LOGIN_REQUEST,
    SEND_REGISTRATION_REQUEST
} from "../actions/auth";
import {FORM_TYPES} from "../../../utils/consts";

export function changeRequestStatus(action) {
    switch (action) {
        case FORM_TYPES.REGISTER: {
            return {
                type: SEND_REGISTRATION_REQUEST,
            };
        }
        case FORM_TYPES.SIGN_IN: {
            return {
                type: SEND_LOGIN_REQUEST,
            }
        }
    }
}

export function register(data) {
    return {
        type: REGISTRATION_SUCCESS,
        payload: data,
    }
}

export function getRegistrationError() {
    return {
        type: REGISTRATION_ERROR,
    }
}

export function fetchUserRegistration(url, userData) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.REGISTER));

        AuthClient.register(url, userData)
            .then((data) => {
                dispatch(register(data));
            })
            .catch(() => dispatch(getRegistrationError()));
    };
}

export function login(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}

export function getLoginError() {
    return {
        type: LOGIN_ERROR,
    }
}

export function fetchUserLogin(url, userData) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.SIGN_IN));

        AuthClient.signIn("url", userData)
            .then((data) => {
                dispatch(login(data));
            })
            .catch(() => dispatch(getLoginError()))
    }
}
