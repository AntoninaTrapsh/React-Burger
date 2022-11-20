import {CLOSE_INGREDIENT_DETAILS_MODAL, OPEN_INGREDIENT_DETAILS_MODAL} from "../actions/ingredient-details";

export function openIngredientDetails(ingredient) {
    return {
        type: OPEN_INGREDIENT_DETAILS_MODAL,
        payload: ingredient,
    };
}

export function closeIngredientDetails() {
    return {
        type: CLOSE_INGREDIENT_DETAILS_MODAL,
    };
}
