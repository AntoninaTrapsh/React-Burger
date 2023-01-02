import {
    RESET_PREVIOUS_BUNS,
    DECREASE_INGREDIENT_COUNTER,
    INCREASE_INGREDIENT_COUNTER,
    LOAD_INGREDIENTS_ERROR,
    LOAD_INGREDIENTS_SUCCESS,
    SEND_INGREDIENTS_REQUEST
} from "../actions/burger-ingredients";
import {IIngredient, IIngredientsList} from "../../../utils/types";
import {TBurgerIngredientsActions} from "../types";

type TInitialBurgerIngredientsState = {
    ingredients: Array<IIngredientsList> | null,
    ingredientsRequest: boolean,
    ingredientsError: boolean,
}

const initialState: TInitialBurgerIngredientsState = {
    ingredients: null,
    ingredientsRequest: false,
    ingredientsError: false,
};

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TInitialBurgerIngredientsState => {
    switch (action.type) {
        case SEND_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
            };
        }
        case LOAD_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredients: action.payload.data.map((ingredient) => {
                    return {
                        ...ingredient,
                        quantity: 0,
                    };
                }),
                ingredientsRequest: false,
                ingredientsError: false,
            };
        }
        case LOAD_INGREDIENTS_ERROR: {
            return {
                ...state,
                ingredients: [],
                ingredientsRequest: false,
                ingredientsError: true,
            }
        }
        case INCREASE_INGREDIENT_COUNTER: {
            let ingredients = null;
            if (Array.isArray(state.ingredients)) {
                ingredients = [...state.ingredients];
                const ingredientIndex = state.ingredients.findIndex((ingredient) => {
                    return ingredient._id === action.payload.id;
                });
                if (ingredientIndex >= 0) {
                    ingredients[ingredientIndex].quantity += action.payload.quantity;
                }
            }
            return {
                ...state,
                ingredients: ingredients,
            }
        }
        case DECREASE_INGREDIENT_COUNTER: {
            let ingredients = null;
            if (Array.isArray(state.ingredients)) {
                const ingredientIndex = state.ingredients.findIndex((ingredient: IIngredient) => {
                    return ingredient._id === action.payload;
                });
                ingredients = [...state.ingredients];
                if (ingredientIndex >= 0) {
                    ingredients[ingredientIndex].quantity--;
                }
            }
            return {
                ...state,
                ingredients: ingredients,
            }
        }
        case RESET_PREVIOUS_BUNS: {
            let ingredients = null;
            if (Array.isArray(state.ingredients)) {
                ingredients = state.ingredients;
                const bunIndex = state.ingredients.findIndex((ingredient) => {
                    return ingredient.type === "bun" && ingredient.quantity !== 0;
                })
                if (bunIndex >= 0) {
                    ingredients[bunIndex].quantity = 0;
                }
            }
            return {
                ...state,
                ingredients: ingredients,
            }
        }
        default:
            return state;
    }
};
