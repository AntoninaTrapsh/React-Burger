import * as H from "history";

export interface IUserInfo {
    name: string,
    email: string,
    password: string,
}

export interface IDefaultFormValues extends IUserInfo{
    code?: string,
}

export interface IFocusFormValues {
    name: boolean;
    email: boolean;
    password: boolean;
}

export interface IIngredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export interface IIngredientsList extends IIngredient {
    quantity: number;
}

export interface IConstructorIngredient extends IIngredient{
    uuid: number;
    index: number;

}

export type TIngredientTypes = keyof IIngredientTabs

export interface IIngredientTabs {
    bun: string;
    sauce: string;
    main: string;
}

export interface IInputSettings {
    TYPE: {
        TEXT: string,
        EMAIL: string,
        PASSWORD: string,
    },
    NAME: {
        NAME: string,
        EMAIL: string,
        PASSWORD: string,
        CODE: string,
    },
    PLACEHOLDER: {
        NAME: string,
        EMAIL: string,
        PASSWORD: string,
        CODE: string,
        RESTORE: string,
        NEW_PASSWORD: string,
    },
}

export type TInputTypes = "password" | "email" | "text"

export type TModalState = {
    background: H.Location
}

export type TProtectedRouteLocation = {
    from: H.Location
}

