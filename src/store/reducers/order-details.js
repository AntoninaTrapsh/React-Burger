import {
    CLOSE_ORDER_DETAILS_MODAL,
    GET_ORDER_DATA_FAILED, GET_ORDER_DATA_SUCCESS,
    OPEN_ORDER_DETAILS_MODAL,
    SEND_ORDER_REQUEST
} from "../actions/order-details";

const initialState = {
    isOpen: false,
    orderId: '',
    orderRequest: false,
    orderFailed: false,
};

export const orderDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
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
                orderId: payload.order.number,
                orderRequest: false,
                orderFailed: false,
            };
        }
        case GET_ORDER_DATA_FAILED: {
            return {
                ...state,
                orderId: '',
                orderRequest: false,
                orderFailed: true,
            }
        }
        default:
            return state;
    }
};
