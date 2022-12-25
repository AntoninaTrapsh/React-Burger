import {
    CLOSE_ORDER_DETAILS_MODAL,
    GET_ORDER_DATA_ERROR,
    GET_ORDER_DATA_SUCCESS,
    OPEN_ORDER_DETAILS_MODAL,
    SEND_ORDER_REQUEST
} from "../actions/order-details";
import ApiClient from "../../clients/api-client";
import {clearConstructor} from "./burger-constructor";
import {IConstructorIngredient, IOrderDetails} from "../../../utils/types";

export interface IGetOrderData {
    readonly type: typeof GET_ORDER_DATA_SUCCESS;
    readonly payload: IOrderDetails;
}

export interface IOpenOrderDetailsModal {
    readonly type: typeof OPEN_ORDER_DETAILS_MODAL;
}

export interface IChangeRequestStatus {
    readonly type: typeof SEND_ORDER_REQUEST;
}

export interface ICloseOrderDetailsModal {
    readonly type: typeof CLOSE_ORDER_DETAILS_MODAL;
}

export interface IGetOrderDataError {
    readonly type: typeof GET_ORDER_DATA_ERROR;
}

export function changeRequestStatus(): IChangeRequestStatus {
    return {
        type: SEND_ORDER_REQUEST,
    };
}

export function openOrderDetailsModal(): IOpenOrderDetailsModal {
    return {
        type: OPEN_ORDER_DETAILS_MODAL,
    }
}

export function closeOrderDetailsModal(): ICloseOrderDetailsModal {
    return {
        type: CLOSE_ORDER_DETAILS_MODAL,
    }
}

export function getOrderData(data: IOrderDetails): IGetOrderData {
    return {
        type: GET_ORDER_DATA_SUCCESS,
        payload: data,
    }
}

export function getOrderDataError(): IGetOrderDataError {
    return {
        type: GET_ORDER_DATA_ERROR,
    }
}

export function fetchOrderDetails(url: string, ingredients: IConstructorIngredient[]): Promise<void> {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus());

        const ingredientsIds = ingredients.reduce((arr: Array<string>, ingredient: IConstructorIngredient) => {
            return [...arr, ingredient._id];
        }, [])

        ApiClient.sendOrderDetails(url, ingredientsIds)
            .then((data) => {
                dispatch(getOrderData(data));
                dispatch(clearConstructor());
            })
            .catch(() => dispatch(getOrderDataError()));
    };
}
