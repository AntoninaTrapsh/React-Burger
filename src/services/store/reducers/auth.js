import {REGISTRATION_ERROR, REGISTRATION_SUCCESS, SEND_REGISTRATION_REQUEST} from "../actions/auth";

const initialState = {
    name: "",
    email: "",
    password: "",
    code: "",
    accessToken: "",
    refreshToken: "",

    registrationError: false,
    registrationRequest: false,
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
                name,
                email,
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
        default:
            return state;
    }
};
