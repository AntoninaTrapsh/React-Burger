import {
    ADD_BUNS,
    ADD_MAIN_INGREDIENT,
    CHANGE_INGREDIENT_POSITION, CLEAR_CONSTRUCTOR,
    DELETE_INGREDIENT
} from "../actions/burger-constructor";
import { v4 as uuid } from "uuid";
import {IConstructorIngredient, IIndices} from "../../../utils/types";

export interface IAddIngredientToConstructor {
    readonly type: typeof ADD_MAIN_INGREDIENT;
    payload: {
        readonly ingredient: IConstructorIngredient;
        readonly uuid: string;
    }
}

export interface IDeleteIngredientFromConstructor {
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: string;
}

export interface IAddBunsToConstructor {
    readonly type: typeof ADD_BUNS;
    readonly payload: IConstructorIngredient;
}

export interface IChangeIngredientPosition {
    readonly type: typeof CHANGE_INGREDIENT_POSITION;
    readonly payload: IIndices;
}

export interface IClearConstructor {
    readonly type: typeof CLEAR_CONSTRUCTOR;
}


export function addIngredientToConstructor(ingredient: IConstructorIngredient): IAddIngredientToConstructor {
    return {
        type: ADD_MAIN_INGREDIENT,
        payload: { ingredient: ingredient, uuid: uuid()}
    }
}

export function deleteIngredientFromConstructor(uuid: string): IDeleteIngredientFromConstructor {
    return {
        type: DELETE_INGREDIENT,
        payload: uuid,
    }
}

export function addBunsToConstructor(buns: IConstructorIngredient): IAddBunsToConstructor {
    return {
        type: ADD_BUNS,
        payload: buns,
    }
}

export function changeIngredientPosition(indices: IIndices): IChangeIngredientPosition {
    return {
        type: CHANGE_INGREDIENT_POSITION,
        payload: indices,
    }
}

export function clearConstructor(): IClearConstructor {
    return {
        type: CLEAR_CONSTRUCTOR,
    }
}
