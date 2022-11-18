import {ADD_INGREDIENT, DELETE_INGREDIENT} from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    buns: null,
};

export const burgerConstructorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, payload],
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter((ingredient) => ingredient.uuid !== payload),
            }
        }
        default:
            return state;
    }
};
