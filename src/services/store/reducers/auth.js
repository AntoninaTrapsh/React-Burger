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

const initialState = {
    isAuth: false,

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
}

export const authReducer = (state = initialState, { type, payload }) => {
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
        default:
            return state;
    }
};
