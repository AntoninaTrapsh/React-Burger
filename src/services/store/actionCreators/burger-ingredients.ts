import ApiClient from "../../clients/api-client";
import {
    RESET_PREVIOUS_BUNS,
    DECREASE_INGREDIENT_COUNTER,
    INCREASE_INGREDIENT_COUNTER,
    LOAD_INGREDIENTS_ERROR,
    LOAD_INGREDIENTS_SUCCESS,
    SEND_INGREDIENTS_REQUEST
} from "../actions/burger-ingredients";
import {IIngredient} from "../../../utils/types";

export interface IIncreaseIngredientCounter {
    readonly type: typeof INCREASE_INGREDIENT_COUNTER;
    readonly payload: {
        readonly id: string;
        readonly quantity: number;
    }
}

export interface IDecreaseIngredientCounter {
    readonly type: typeof DECREASE_INGREDIENT_COUNTER;
    readonly payload: string;
}

export interface ILoadIngredients {
    readonly type: typeof LOAD_INGREDIENTS_SUCCESS;
    readonly payload: IIngredient[];
}

export interface IChangeRequestStatus {
    readonly type: typeof SEND_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsError {
    readonly type: typeof LOAD_INGREDIENTS_ERROR;
}

export interface IResetPreviousBuns {
    readonly type: typeof RESET_PREVIOUS_BUNS;
}

export function changeRequestStatus(): IChangeRequestStatus {
    return {
        type: SEND_INGREDIENTS_REQUEST,
    };
}

export function loadIngredients(data: IIngredient[]): ILoadIngredients {
    return {
        type: LOAD_INGREDIENTS_SUCCESS,
        payload: data,
    }
}

export function getIngredientsError(): IGetIngredientsError {
    return {
        type: LOAD_INGREDIENTS_ERROR,
    }
}

export function resetPreviousBuns(): IResetPreviousBuns {
    return {
        type: RESET_PREVIOUS_BUNS,
    }
}

export function decreaseIngredientCounter(id: string): IDecreaseIngredientCounter {
    return {
        type: DECREASE_INGREDIENT_COUNTER,
        payload: id,
    };
}

export function increaseIngredientCounter(id: string, quantity: number): IIncreaseIngredientCounter {
    return {
        type: INCREASE_INGREDIENT_COUNTER,
        payload: {
            id, quantity
        }
    };
}

export function fetchIngredients(url: string): Promise<void> {
    return async (dispatch, getState) => {
        dispatch(changeRequestStatus());

        ApiClient.getIngredients(url)
            .then((data) => {
                dispatch(loadIngredients(data));
            })
            .catch(() => dispatch(getIngredientsError()));
    };
}
