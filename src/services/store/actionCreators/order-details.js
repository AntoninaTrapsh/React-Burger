import {
    CLOSE_ORDER_DETAILS_MODAL,
    GET_ORDER_DATA_ERROR,
    GET_ORDER_DATA_SUCCESS,
    OPEN_ORDER_DETAILS_MODAL,
    SEND_ORDER_REQUEST
} from "../actions/order-details";
import IngredientsClient from "../../clients/ingredients-client";
import {clearConstructor} from "./burger-constructor";

export function changeRequestStatus() {
    return {
        type: SEND_ORDER_REQUEST,
    };
}

export function openOrderDetailsModal() {
    return {
        type: OPEN_ORDER_DETAILS_MODAL,
    }
}

export function closeOrderDetailsModal() {
    return {
        type: CLOSE_ORDER_DETAILS_MODAL,
    }
}

export function getOrderData(data) {
    return {
        type: GET_ORDER_DATA_SUCCESS,
        payload: data,
    }
}

export function getOrderDataError() {
    return {
        type: GET_ORDER_DATA_ERROR
    }
}

export function fetchOrderDetails(url, ingredients) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus());

        const ingredientsIds = ingredients.reduce((arr, ingredient) => {
            return [...arr, ingredient._id];
        }, [])

        IngredientsClient.sendOrderDetails(url, ingredientsIds)
            .then((data) => {
                dispatch(getOrderData(data));
                dispatch(clearConstructor());
            })
            .catch(() => dispatch(getOrderDataError()));
    };
}
