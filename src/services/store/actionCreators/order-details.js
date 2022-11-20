import {
    CLOSE_ORDER_DETAILS_MODAL,
    GET_ORDER_DATA_FAILED,
    GET_ORDER_DATA_SUCCESS,
    OPEN_ORDER_DETAILS_MODAL,
    SEND_ORDER_REQUEST
} from "../actions/order-details";
import IngredientsClient from "../../clients/ingredients-client";

export function changeRequestStatus() {
    return {
        type: SEND_ORDER_REQUEST,
    };
}

export function openOrderDetailsModal(state) {
    return {
        type: OPEN_ORDER_DETAILS_MODAL,
    }
}

export function closeOrderDetailsModal(state) {
    return {
        type: CLOSE_ORDER_DETAILS_MODAL,
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
                dispatch({
                    type: GET_ORDER_DATA_SUCCESS,
                    payload: data,
                });
            })
            .catch(() => dispatch({
                type: GET_ORDER_DATA_FAILED
            }));
    };
}
