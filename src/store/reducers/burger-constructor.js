import {ADD_BUNS, ADD_MAIN_INGREDIENT, DELETE_INGREDIENT} from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    buns: null,
};

export const burgerConstructorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MAIN_INGREDIENT: {
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
        case ADD_BUNS: {
            return {
                ...state,
                buns: payload
            }
        }
        default:
            return state;
    }
};
