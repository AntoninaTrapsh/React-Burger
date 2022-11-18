import IngredientsClient from "../../services/ingredients-client";
import {
    LOAD_INGREDIENTS_FAILED,
    LOAD_INGREDIENTS_SUCCESS,
    SEND_INGREDIENTS_REQUEST
} from "../actions/burger-ingredients";

export function changeRequestStatus() {
    return {
        type: SEND_INGREDIENTS_REQUEST,
    };
}

export function fetchIngredients(url) {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus());

        IngredientsClient.getIngredients(url)
            .then((data) => {
                dispatch({
                    type: LOAD_INGREDIENTS_SUCCESS,
                    payload: data,
                });
            })
            .catch(() => dispatch({
                type: LOAD_INGREDIENTS_FAILED
            }));
    };
}