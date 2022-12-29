import * as H from "history";

export interface IRequestOptions extends RequestInit{
    authorization?: string | null;
}

export interface IUserInfo {
    name: string,
    email: string,
    password: string,
}

export interface IDefaultFormValues extends IUserInfo{
    code?: string,
}

export interface IIndices {
    toIndex: number;
    fromIndex: number;
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

export interface IIngredientResponse {
    data: Array<IIngredient>
}

export interface IIngredientsList extends IIngredient {
    quantity: number;
}

export interface IConstructorIngredient extends IIngredient{
    uuid: string;
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

export interface IResponseStatus {
    success: boolean
}

export interface IRefreshData extends IResponseStatus{
    accessToken: string;
    refreshToken: string;
}

export interface IResponseMessage extends IResponseStatus {
    message: string;
}

export interface IAuthResponse extends IRefreshData {
    user: {
        email: string,
        name: string,
    },
}

export interface IUserData {
    user: {
        email: string,
        name: string,
        password: string,
    },
}

export interface IOrderDetails extends IResponseStatus {
    name: string;
    order: {
        number: string,
    }
}

