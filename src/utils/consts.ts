import {IInputSettings} from "./types";

export enum DND_TYPES {
    CARD_FROM_INGREDIENTS = "CARD_FROM_INGREDIENTS",
    CARD_FROM_CONSTRUCTOR = "CARD_FROM_CONSTRUCTOR",
}

export const INPUT_SETTINGS: IInputSettings = {
    TYPE: {
        TEXT: 'text',
        EMAIL: 'email',
        PASSWORD: 'password',
    },
    NAME: {
        NAME: 'name',
        EMAIL: 'email',
        PASSWORD: 'password',
        CODE: 'code',
    },
    PLACEHOLDER: {
        NAME: 'Имя',
        EMAIL: 'E-mail',
        PASSWORD: 'Пароль',
        CODE: 'Введите код из письма',
        RESTORE: 'Укажите e-mail',
        NEW_PASSWORD: 'Введите новый пароль',
    },
};

export enum FORM_TYPES {
    SIGN_IN = "SIGN_IN",
    SIGN_OUT = "SIGN_OUT",
    REGISTER = "REGISTER",
    FORGOT_PASSWORD = "FORGOT_PASSWORD",
    RESET_PASSWORD = "RESET_PASSWORD",
}

export enum PROFILE_ACTIONS {
    GET_USER_INFO = "GET_USER_INFO",
    CHANGE_USER_INFO = "CHANGE_USER_INFO",
}
