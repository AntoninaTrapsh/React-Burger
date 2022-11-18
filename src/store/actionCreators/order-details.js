import {GET_ORDER_DATA_FAILED, GET_ORDER_DATA_SUCCESS, SEND_ORDER_REQUEST} from "../actions/order-details";
import IngredientsClient from "../../services/ingredients-client";

export function changeRequestStatus() {
    return {
        type: SEND_ORDER_REQUEST,
    };
}

export function fetchOrderDetails(url, ingredients) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus());

        IngredientsClient.sendOrderDetails(url, ingredients)
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
