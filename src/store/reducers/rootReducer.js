import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./burger-ingredients";
import {orderDetailsReducer} from "./order-details";
import {ingredientDetailsReducer} from "./ingredient-details";


export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    orderDetails: orderDetailsReducer,
    ingredientDetails: ingredientDetailsReducer,
})
