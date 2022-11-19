import {
    RESET_PREVIOUS_BUNS,
    DECREASE_INGREDIENT_COUNTER,
    INCREASE_INGREDIENT_COUNTER,
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
                ingredients: payload.data.map((ingredient) => {
                    return {
                        ...ingredient,
                        quantity: 0,
                    };
                }),
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
