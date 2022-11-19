import IngredientsClient from "../../services/ingredients-client";
import {
    RESET_PREVIOUS_BUNS,
    DECREASE_INGREDIENT_COUNTER,
    INCREASE_INGREDIENT_COUNTER,
    LOAD_INGREDIENTS_FAILED,
    LOAD_INGREDIENTS_SUCCESS,
    SEND_INGREDIENTS_REQUEST
} from "../actions/burger-ingredients";

export function changeRequestStatus() {
    return {
        type: SEND_INGREDIENTS_REQUEST,
    };
}

export function resetPreviousBuns() {
    return {
        type: RESET_PREVIOUS_BUNS,
    }
}

export function decreaseIngredientCounter(id) {
    return {
        type: DECREASE_INGREDIENT_COUNTER,
        payload: id,
    };
}

export function increaseIngredientCounter(id, quantity) {
    return {
        type: INCREASE_INGREDIENT_COUNTER,
        payload: {
            id, quantity
        }
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
