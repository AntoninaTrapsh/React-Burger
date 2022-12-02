import AuthClient from "../../clients/auth-client";
import {REGISTRATION_ERROR, REGISTRATION_SUCCESS, SEND_REGISTRATION_REQUEST} from "../actions/auth";

export function changeRequestStatus() {
    return {
        type: SEND_REGISTRATION_REQUEST,
    };
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
        dispatch(changeRequestStatus());

        AuthClient.register(url, userData)
            .then((data) => {
                dispatch(register(data));
            })
            .catch(() => dispatch(getRegistrationError()));
    };
}
