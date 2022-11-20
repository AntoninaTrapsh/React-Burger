import {
    ADD_BUNS,
    ADD_MAIN_INGREDIENT,
    CHANGE_INGREDIENT_POSITION,
    DELETE_INGREDIENT
} from "../actions/burger-constructor";
import { v4 as uuid } from "uuid";

export function addIngredientToConstructor(ingredient) {
    return {
        type: ADD_MAIN_INGREDIENT,
        payload: {...ingredient, uuid: uuid()}
    }
}

export function deleteIngredientFromConstructor(uuid) {
    return {
        type: DELETE_INGREDIENT,
        payload: uuid,
    }
}

export function addBunsToConstructor(buns) {
    return {
        type: ADD_BUNS,
        payload: buns,
    }
}

export function changeIngredientPosition(indices) {
    return {
        type: CHANGE_INGREDIENT_POSITION,
        payload: indices,
    }
}
