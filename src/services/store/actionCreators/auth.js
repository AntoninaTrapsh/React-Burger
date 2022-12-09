import AuthClient from "../../clients/auth-client";
import {
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
    SEND_GET_USER_REQUEST,
    SEND_LOGIN_REQUEST,
    SEND_REGISTRATION_REQUEST,
    SEND_SIGN_OUT_REQUEST,
    SEND_UPDATING_USER_REQUEST,
    SIGN_OUT_ERROR,
    SIGN_OUT_SUCCESS, USER_UPDATING_ERROR,
    USER_UPDATING_SUCCESS
} from "../actions/auth";
import {FORM_TYPES, PROFILE_ACTIONS} from "../../../utils/consts";
import {addTokensToStorage, getTokenFromStorage, removeTokensFromStorage} from "../../../utils/localStorageHelper";

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
        case FORM_TYPES.SIGN_OUT: {
            return {
                type: SEND_SIGN_OUT_REQUEST,
            }
        }
        case PROFILE_ACTIONS.GET_USER_INFO: {
            return {
                type: SEND_GET_USER_REQUEST,
            }
        }
        case PROFILE_ACTIONS.CHANGE_USER_INFO: {
            return {
                type: SEND_UPDATING_USER_REQUEST,
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
                data.user.password = userData.password;
                dispatch(register(data));
                addTokensToStorage(data.accessToken, data.refreshToken);
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

        AuthClient.signIn("login", userData)
            .then((data) => {
                data.user.password = userData.password;
                dispatch(login(data));
                addTokensToStorage(data.accessToken, data.refreshToken);
            })
            .catch(() => {
                dispatch(getLoginError());
            })
    }
}

export function getSignOutError() {
    return {
        type: SIGN_OUT_ERROR,
    }
}

export function signOut() {
    return {
        type: SIGN_OUT_SUCCESS,
    }
}

export function fetchUserSignOut() {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.SIGN_OUT));

        const refreshToken = getTokenFromStorage("refreshToken");

        AuthClient.signOut("logout", refreshToken)
            .then((data) => {
                dispatch(signOut(data));
                removeTokensFromStorage();
            })
            .catch(() => dispatch(getSignOutError))
    }
}

export function getUserInfoError() {
    return {
        type: GET_USER_ERROR,
    }
}

export function getUserInfo(data) {
    return {
        type: GET_USER_SUCCESS,
        payload: data.user,
    }
}

export function fetchUserInfo() {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(PROFILE_ACTIONS.GET_USER_INFO));

        const token = getTokenFromStorage("accessToken")

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
        }

        AuthClient.fetchWithRefresh("user", options)
            .then((data) => {
                dispatch(getUserInfo(data));
            })
            .catch(() => dispatch(getUserInfoError()));
    }
}

export function updateUserInfoError() {
    return {
        type: USER_UPDATING_ERROR,
    }
}

export function updateUserInfo(data) {
    return {
        type: USER_UPDATING_SUCCESS,
        payload: data.user,
    }
}

export function changeUserInfo(data) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(PROFILE_ACTIONS.CHANGE_USER_INFO));

        const token = getTokenFromStorage("accessToken")

        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
            body: JSON.stringify(data),
        }

        AuthClient.fetchWithRefresh("user", options)
            .then((data) => {
                dispatch(updateUserInfo(data));
            })
            .catch(() => dispatch(updateUserInfoError()));
    }
}
