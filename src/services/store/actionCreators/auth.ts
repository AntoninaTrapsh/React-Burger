import AuthClient from "../../clients/api-client";
import {
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_SUCCESS,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    IS_USER_CHECKED,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
    SEND_FORGOT_PASSWORD_REQUEST,
    SEND_GET_USER_REQUEST,
    SEND_LOGIN_REQUEST,
    SEND_REGISTRATION_REQUEST,
    SEND_RESET_PASSWORD_REQUEST,
    SEND_SIGN_OUT_REQUEST,
    SEND_UPDATING_USER_REQUEST,
    SIGN_OUT_ERROR,
    SIGN_OUT_SUCCESS,
    USER_UPDATING_ERROR,
    USER_UPDATING_SUCCESS
} from "../actions/auth";
import {FORM_TYPES, PROFILE_ACTIONS} from "../../../utils/consts";
import {addTokensToStorage, getTokenFromStorage, removeTokensFromStorage} from "../../../utils/localStorageHelper";
import {IAuthResponse, IUserData, IUserInfo} from "../../../utils/types";

export interface IRegister {
    readonly type: typeof REGISTRATION_SUCCESS;
    readonly payload: IAuthResponse;
}

export interface IGetRegistrationError {
    readonly type: typeof REGISTRATION_ERROR;
}

export type TChangeRequestStatus =
    typeof SEND_REGISTRATION_REQUEST
    | typeof SEND_LOGIN_REQUEST
    | typeof SEND_SIGN_OUT_REQUEST
    | typeof SEND_GET_USER_REQUEST
    | typeof SEND_UPDATING_USER_REQUEST
    | typeof SEND_FORGOT_PASSWORD_REQUEST
    | typeof SEND_RESET_PASSWORD_REQUEST

export interface IChangeRequestStatus {
    readonly type?: TChangeRequestStatus;
}

export interface IGetLoginError {
    readonly type: typeof LOGIN_ERROR;
}

export interface ILogin {
    readonly type: typeof LOGIN_SUCCESS;
    readonly payload: IAuthResponse;
}

export interface ICatchResetPasswordOnFirstStepError {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
}

export interface ICatchResetPasswordOnSecondStepError {
    readonly type: typeof RESET_PASSWORD_ERROR;
}

export interface IGetResetPasswordOnFirstStepResponse {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IGetResetPasswordOnSecondStepResponse {
    readonly type: typeof RESET_PASSWORD_SUCCESS,
}

export interface IGetSignOutError {
    readonly type: typeof SIGN_OUT_ERROR,
}

export interface ISignOut {
    readonly type: typeof SIGN_OUT_SUCCESS,
}

export interface IGetUserInfoError {
    readonly type: typeof GET_USER_ERROR,
}

export interface IIsUserChecked {
    readonly type: typeof IS_USER_CHECKED,
    readonly payload: boolean,
}

export interface IGetUserInfo {
    readonly type: typeof GET_USER_SUCCESS,
    readonly payload: IUserData,
}

export interface IUpdateUserInfoError {
    readonly type: typeof USER_UPDATING_ERROR,
}

export interface IUpdateUserInfo {
     readonly type: typeof USER_UPDATING_SUCCESS,
     readonly payload: IUserData,
}

export function changeRequestStatus(action: string): IChangeRequestStatus {
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
        case FORM_TYPES.FORGOT_PASSWORD: {
            return {
                type: SEND_FORGOT_PASSWORD_REQUEST,
            }
        }
        case FORM_TYPES.RESET_PASSWORD: {
            return {
                type: SEND_RESET_PASSWORD_REQUEST,
            }
        }
        default: {
            return {}
        }
    }
}

export function register(data: IAuthResponse): IRegister {
    return {
        type: REGISTRATION_SUCCESS,
        payload: data,
    }
}

export function getRegistrationError(): IGetRegistrationError {
    return {
        type: REGISTRATION_ERROR,
    }
}

export function fetchUserRegistration(userData) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.REGISTER));

        AuthClient.register("/auth/register", userData)
            .then((data) => {
                data.user.password = userData.password;
                dispatch(register(data));
                addTokensToStorage(data.accessToken, data.refreshToken);
            })
            .catch(() => dispatch(getRegistrationError()));
    };
}

export function login(data: IAuthResponse): ILogin {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}

export function getLoginError(): IGetLoginError {
    return {
        type: LOGIN_ERROR,
    }
}

export function fetchUserLogin(url, userData) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.SIGN_IN));

        AuthClient.signIn("/auth/login", userData)
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

export function catchResetPasswordOnFirstStepError(): ICatchResetPasswordOnFirstStepError {
    return {
        type: FORGOT_PASSWORD_ERROR,
    }
}

export function catchResetPasswordOnSecondStepError(): ICatchResetPasswordOnSecondStepError {
    return {
        type: RESET_PASSWORD_ERROR,
    }
}

export function getResetPasswordOnFirstStepResponse(): IGetResetPasswordOnFirstStepResponse {
    return {
        type: FORGOT_PASSWORD_SUCCESS,
    }
}

export function getResetPasswordOnSecondStepResponse(): IGetResetPasswordOnSecondStepResponse {
    return {
        type: RESET_PASSWORD_SUCCESS,
    }
}

export function resetPasswordOnFirstStep(data) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.FORGOT_PASSWORD));

        AuthClient.resetPasswordOnFirstStep("/password-reset", data)
            .then((data) => {
                dispatch(getResetPasswordOnFirstStepResponse(data));
            })
            .catch(() => {
                dispatch(catchResetPasswordOnFirstStepError());
            })
    }
}

export function resetPasswordOnSecondStep(data) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.RESET_PASSWORD));

        AuthClient.resetPasswordOnSecondStep("/password-reset/reset", data)
            .then((data) => {
                dispatch(getResetPasswordOnSecondStepResponse(data));
            })
            .catch(() => {
                dispatch(catchResetPasswordOnSecondStepError());
            })
    }
}

export function getSignOutError(): IGetSignOutError {
    return {
        type: SIGN_OUT_ERROR,
    }
}

export function signOut(): ISignOut {
    return {
        type: SIGN_OUT_SUCCESS,
    }
}

export function fetchUserSignOut() {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus(FORM_TYPES.SIGN_OUT));

        const refreshToken = getTokenFromStorage("refreshToken");

        AuthClient.signOut("/auth/logout", refreshToken)
            .then((data) => {
                dispatch(signOut(data));
                removeTokensFromStorage();
            })
            .catch(() => dispatch(getSignOutError))
    }
}

export function getUserInfoError(): IGetUserInfoError {
    return {
        type: GET_USER_ERROR,
    }
}

export function isUserChecked(payload: boolean): IIsUserChecked {
    return {
        type: IS_USER_CHECKED,
        payload
    }
}

export function getUserInfo(data: IUserData): IGetUserInfo {
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

        AuthClient.fetchWithRefresh("/auth/user", options)
            .then((data) => {
                dispatch(getUserInfo(data));
            })
            .catch(() => dispatch(getUserInfoError()))
            .finally(() => {
                dispatch(isUserChecked(true))
            });
    }
}

export function updateUserInfoError(): IUpdateUserInfoError {
    return {
        type: USER_UPDATING_ERROR,
    }
}

export function updateUserInfo(data): IUpdateUserInfo {
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

        AuthClient.fetchWithRefresh("/auth/user", options)
            .then((data) => {
                dispatch(updateUserInfo(data));
            })
            .catch(() => dispatch(updateUserInfoError()));
    }
}
