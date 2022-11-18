import {CLOSE_INGREDIENT_DETAILS_MODAL, OPEN_INGREDIENT_DETAILS_MODAL} from "../actions/ingredient-details";

const initialState = {
    isOpen: false,
    ingredient: null,
};

export const burgerIngredientsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case OPEN_INGREDIENT_DETAILS_MODAL: {
            return {
                ...state,
                isOpen: true,
                ingredient: payload,
            };
        }
        case CLOSE_INGREDIENT_DETAILS_MODAL: {
            return {
                isOpen: false,
                ingredient: null,
            }
        }
        default:
            return state;
    }
};
