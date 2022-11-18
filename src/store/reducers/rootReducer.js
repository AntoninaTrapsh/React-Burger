import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./burger-ingredients";
import {orderDetailsReducer} from "./order-details";
import {ingredientsDetailReducer} from "./ingredient-details";


export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    orderDetails: orderDetailsReducer,
    ingredientDetails: ingredientsDetailReducer,
})
