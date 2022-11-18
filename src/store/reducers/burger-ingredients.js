import {
    LOAD_INGREDIENTS_FAILED,
    LOAD_INGREDIENTS_SUCCESS,
    SEND_INGREDIENTS_REQUEST
} from "../actions/burger-ingredients";

const initialState = {
    ingredients: null,
    ingredientsRequest: false,
    ingredientsFailed: false,
};

export const burgerIngredientsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEND_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
            };
        }
        case LOAD_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredients: payload.data,
                ingredientsRequest: false,
                ingredientsFailed: false,
            };
        }
        case LOAD_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: true,
            }
        }
        default:
            return state;
    }
};
