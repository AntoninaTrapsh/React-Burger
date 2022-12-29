import {
    CLOSE_ORDER_DETAILS_MODAL,
    GET_ORDER_DATA_ERROR, GET_ORDER_DATA_SUCCESS,
    OPEN_ORDER_DETAILS_MODAL,
    SEND_ORDER_REQUEST
} from "../actions/order-details";
import {TOrderDetailsActions} from "../types";

type TOrderDetailsInitialState = {
    isOpen: boolean,
    orderId: string,
    orderRequest: boolean,
    orderError: boolean,
}

const initialState: TOrderDetailsInitialState = {
    isOpen: false,
    orderId: '',
    orderRequest: false,
    orderError: false,
};

export const orderDetailsReducer = (state = initialState, action: TOrderDetailsActions): TOrderDetailsInitialState => {
    switch (action.type) {
        case OPEN_ORDER_DETAILS_MODAL: {
            return {
                ...state,
                isOpen: true,
            }
        }
        case CLOSE_ORDER_DETAILS_MODAL: {
            return {
                ...state,
                isOpen: false,
                orderId: '',
            }
        }
        case SEND_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
            };
        }
        case GET_ORDER_DATA_SUCCESS: {
            return {
                ...state,
                orderId: action.payload.order.number,
                orderRequest: false,
                orderError: false,
            };
        }
        case GET_ORDER_DATA_ERROR: {
            return {
                ...state,
                orderId: '',
                orderRequest: false,
                orderError: true,
            }
        }
        default:
            return state;
    }
};
