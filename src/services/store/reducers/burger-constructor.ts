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

const initialState: TBurgerConstructorInitialState = {
    ingredients: [],
    buns: null,
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorInitialState => {
    switch (action.type) {
        case ADD_MAIN_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter((ingredient) => ingredient.uuid !== action.payload),
            }
        }
        case ADD_BUNS: {
            return {
                ...state,
                buns: action.payload
            }
        }
        case CHANGE_INGREDIENT_POSITION: {
            const ingredients = [...state.ingredients];
            ingredients.splice(action.payload.toIndex, 0, ingredients.splice(action.payload.fromIndex, 1)[0]);
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
