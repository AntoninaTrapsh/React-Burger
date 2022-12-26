import {
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_SUCCESS,
    GET_USER_ERROR,
    GET_USER_SUCCESS, IS_USER_CHECKED,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, SEND_FORGOT_PASSWORD_REQUEST,
    SEND_GET_USER_REQUEST,
    SEND_LOGIN_REQUEST,
    SEND_REGISTRATION_REQUEST, SEND_RESET_PASSWORD_REQUEST,
    SEND_SIGN_OUT_REQUEST,
    SEND_UPDATING_USER_REQUEST,
    SIGN_OUT_ERROR,
    SIGN_OUT_SUCCESS, USER_UPDATING_ERROR,
    USER_UPDATING_SUCCESS
} from "../actions/auth";
import {TAuthActions} from "../types";

type TAuthInitialState = {
    isAuth: boolean,
    isAuthRequestEnded: boolean,

    user: {
        name: string,
        email: string,
        password: string,
    },

    code: string,

    registrationError: boolean,
    registrationRequest: boolean,

    loginRequest: boolean,
    loginError: boolean,

    logoutRequest: boolean,
    logoutError: boolean,

    userInfoError: boolean,
    userInfoRequest: boolean,

    updatingUserInfoError: boolean,
    updatingUserRequest: boolean,

    resetPasswordOnFirstStepRequest: boolean,
    resetPasswordOnFirstStepError: boolean,
    isResetPasswordOnFirstStepPassed: boolean,

    resetPasswordOnSecondStepRequest: boolean,
    resetPasswordOnSecondStepError: boolean,
    isResetPasswordOnSecondStepPassed: boolean,
}

const initialState: TAuthInitialState  = {
    isAuth: false,
    isAuthRequestEnded: false,

    user: {
        name: "",
        email: "",
        password: "",
    },

    code: "",

    registrationError: false,
    registrationRequest: false,

    loginRequest: false,
    loginError: false,

    logoutRequest: false,
    logoutError: false,

    userInfoError: false,
    userInfoRequest: false,

    updatingUserInfoError: false,
    updatingUserRequest: false,

    resetPasswordOnFirstStepRequest: false,
    resetPasswordOnFirstStepError: false,
    isResetPasswordOnFirstStepPassed: false,

    resetPasswordOnSecondStepRequest: false,
    resetPasswordOnSecondStepError: false,
    isResetPasswordOnSecondStepPassed: false,
}

export const authReducer = (state = initialState, { type, payload }: TAuthActions): TAuthInitialState  => {
    switch (type) {
        case SEND_REGISTRATION_REQUEST: {
            return {
                ...state,
                registrationRequest: true,
            }
        }
        case REGISTRATION_SUCCESS: {
            const { name, email, password } = payload.user;
            const { accessToken, refreshToken } = payload;
            return {
                ...state,
                registrationError: false,
                registrationRequest: false,
                isAuth: true,
                user: {
                    name,
                    email,
                    password,
                },
                accessToken,
                refreshToken,
            }
        }
        case REGISTRATION_ERROR: {
            return {
                ...state,
                registrationError: true,
                registrationRequest: false,
            }
        }
        case SEND_LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,

            }
        }
        case LOGIN_SUCCESS: {
            const { name, email, password } = payload.user;
            const { accessToken, refreshToken } = payload;
            return {
                ...state,
                loginError: false,
                loginRequest: false,
                isAuth: true,
                user: {
                    name,
                    email,
                    password,
                },
                accessToken,
                refreshToken,
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginError: true,
                loginRequest: false,
            }
        }
        case SEND_SIGN_OUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true,

            }
        }
        case SIGN_OUT_SUCCESS: {
            return {
                ...initialState,
                isAuthRequestEnded: true,
            }
        }
        case SIGN_OUT_ERROR: {
            return {
                ...state,
                logoutError: true,
                logoutRequest: false,
            }
        }
        case SEND_GET_USER_REQUEST: {
            return {
                ...state,
                userInfoError: false,
                userInfoRequest: true,
            }
        }
        case GET_USER_SUCCESS: {
            const { name, email } = payload;
            return {
                ...state,
                userInfoRequest: false,
                isAuth: true,
                user: {
                   ...state.user,
                    name,
                    email,
                }

            }
        }
        case GET_USER_ERROR: {
            return {
                ...initialState,
                userInfoError: true,
            }
        }
        case IS_USER_CHECKED: {
            return {
                ...state,
                isAuthRequestEnded: payload
            }
        }
        case SEND_UPDATING_USER_REQUEST: {
            return {
                ...state,
                updatingUserRequest: true,
                updatingUserInfoError: false,
            }
        }
        case USER_UPDATING_SUCCESS: {
            const { name, email } = payload;
            return {
                ...state,
                updatingUserRequest: false,
                user: {
                    name,
                    email,
                }
            }
        }
        case USER_UPDATING_ERROR: {
            return {
                ...state,
                updatingUserRequest: false,
                updatingUserInfoError: true,
            }
        }
        case SEND_FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordOnFirstStepRequest: true,
                resetPasswordOnFirstStepError: false,

            }
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordOnFirstStepRequest: false,
                isResetPasswordOnFirstStepPassed: true,
                isResetPasswordOnSecondStepPassed: false,
            }
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                resetPasswordOnFirstStepRequest: false,
                resetPasswordOnFirstStepError: true,
            }
        }
        case SEND_RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordOnSecondStepRequest: true,
                resetPasswordOnSecondStepError: false,

            }
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordOnSecondStepRequest: false,
                isResetPasswordOnSecondStepPassed: true,
                isResetPasswordOnFirstStepPassed: false,
            }
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                resetPasswordOnSecondStepRequest: false,
                resetPasswordOnSecondStepError: true,
            }
        }
        default:
            return state;
    }
};
