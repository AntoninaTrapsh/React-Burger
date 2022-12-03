import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
    SEND_LOGIN_REQUEST,
    SEND_REGISTRATION_REQUEST
} from "../actions/auth";

const initialState = {
    isAuth: false,

    user: {
        name: "",
        email: "",
    },

    code: "",

    accessToken: "",
    refreshToken: "",

    registrationError: false,
    registrationRequest: false,

    loginRequest: false,
    loginError: false,
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
            const { name, email } = payload.user;
            const { accessToken, refreshToken } = payload;
            return {
                ...state,
                registrationError: false,
                registrationRequest: false,
                isAuth: true,
                user: {
                    name,
                    email,
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
            const { name, email } = payload.user;
            const { accessToken, refreshToken } = payload;
            return {
                ...state,
                loginError: false,
                loginRequest: false,
                isAuth: true,
                user: {
                    name,
                    email,
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
        default:
            return state;
    }
};
