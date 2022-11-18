import {ADD_INGREDIENT, DELETE_INGREDIENT} from "../actions/burger-constructor";
import { v4 as uuid } from "uuid";

export function addIngredientToConstructor(ingredient) {
    return {
        type: ADD_INGREDIENT,
        payload: {...ingredient, uuid: uuid()}
    }
}

export function deleteIngredientFromConstructor(uuid) {
    return {
        type: DELETE_INGREDIENT,
        payload: uuid,
    }
}
