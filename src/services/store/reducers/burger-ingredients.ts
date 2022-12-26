import {
    RESET_PREVIOUS_BUNS,
    DECREASE_INGREDIENT_COUNTER,
    INCREASE_INGREDIENT_COUNTER,
    LOAD_INGREDIENTS_ERROR,
    LOAD_INGREDIENTS_SUCCESS,
    SEND_INGREDIENTS_REQUEST
} from "../actions/burger-ingredients";
import {IIngredient} from "../../../utils/types";
import {TBurgerIngredientsActions} from "../types";

type TInitialBurgerIngredientsState = {
    ingredients: Array<IIngredient> | null,
    ingredientsRequest: boolean,
    ingredientsError: boolean,
}

const initialState = {
    ingredients: null,
    ingredientsRequest: false,
    ingredientsError: false,
};

export const burgerIngredientsReducer = (state = initialState, { type, payload }: TBurgerIngredientsActions): TInitialBurgerIngredientsState => {
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
                ingredients: payload.data.map((ingredient) => {
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
            const ingredientIndex = state.ingredients.findIndex((ingredient) => {
                return ingredient._id === payload.id;
            });
            let ingredients = [...state.ingredients];
            if (ingredientIndex >= 0) {
                ingredients[ingredientIndex].quantity += payload.quantity;
            }
            return {
                ...state,
                ingredients: ingredients,
            }
        }
        case DECREASE_INGREDIENT_COUNTER: {
            const ingredientIndex = state.ingredients.findIndex((ingredient) => {
                return ingredient._id === payload;
            });
            let ingredients = [...state.ingredients];
            if (ingredientIndex >= 0) {
                ingredients[ingredientIndex].quantity--;
            }
            return {
                ...state,
                ingredients: ingredients,
            }
        }
        case RESET_PREVIOUS_BUNS: {
            const ingredients = state.ingredients;
            const bunIndex = state.ingredients.findIndex((ingredient) => {
                return ingredient.type === "bun" && ingredient.quantity !== 0;
            })
            if (bunIndex >= 0) {
                ingredients[bunIndex].quantity = 0;
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
