import {
    ADD_BUNS,
    ADD_MAIN_INGREDIENT,
    CHANGE_INGREDIENT_POSITION, CLEAR_CONSTRUCTOR,
    DELETE_INGREDIENT
} from "../actions/burger-constructor";
import {IConstructorIngredient} from "../../../utils/types";
import {TBurgerConstructorActions} from "../types";

type TBurgerConstructorInitialState = {
    ingredients: Array<IConstructorIngredient>,
    buns: IConstructorIngredient | null,
}

const initialState = {
    ingredients: [],
    buns: null,
};

export const burgerConstructorReducer = (state = initialState, { type, payload }: TBurgerConstructorActions): TBurgerConstructorInitialState => {
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
        case CHANGE_INGREDIENT_POSITION: {
            const ingredients = [...state.ingredients];
            ingredients.splice(payload.toIndex, 0, ingredients.splice(payload.fromIndex, 1)[0]);
            return {
                ...state,
                ingredients: ingredients,
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ingredients: [],
                buns: null,
            }
        }
        default:
            return state;
    }
};
