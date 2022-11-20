import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./burger-ingredients";
import {orderDetailsReducer} from "./order-details";
import {ingredientDetailsReducer} from "./ingredient-details";
import {burgerConstructorReducer} from "./burger-constructor";


export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    orderDetails: orderDetailsReducer,
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
})
