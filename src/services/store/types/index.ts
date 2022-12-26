import {
    IAddBunsToConstructor,
    IAddIngredientToConstructor,
    IChangeIngredientPosition,
    IClearConstructor,
    IDeleteIngredientFromConstructor
} from "../actionCreators/burger-constructor";
import {
    IChangeRequestStatus,
    IDecreaseIngredientCounter,
    IGetIngredientsError,
    IIncreaseIngredientCounter,
    ILoadIngredients,
    IResetPreviousBuns
} from "../actionCreators/burger-ingredients";
import {
    ICloseOrderDetailsModal,
    IChangeOrderDetailsStatus,
    IGetOrderData,
    IGetOrderDataError,
    IOpenOrderDetailsModal
} from "../actionCreators/order-details";
import {
    ICatchResetPasswordOnFirstStepError,
    ICatchResetPasswordOnSecondStepError, IChangeAuthRequestStatus,
    IGetLoginError,
    IGetRegistrationError,
    IGetResetPasswordOnFirstStepResponse,
    IGetResetPasswordOnSecondStepResponse,
    IGetSignOutError,
    IGetUserInfo,
    IGetUserInfoError,
    IIsUserChecked,
    ILogin,
    IRegister,
    ISignOut,
    IUpdateUserInfo,
    IUpdateUserInfoError
} from "../actionCreators/auth";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {store} from "../store";

export type TBurgerConstructorActions =
    IAddIngredientToConstructor
    | IDeleteIngredientFromConstructor
    | IAddBunsToConstructor
    | IChangeIngredientPosition
    | IClearConstructor;


export type TBurgerIngredientsActions =
    IIncreaseIngredientCounter
    | IDecreaseIngredientCounter
    | ILoadIngredients
    | IChangeRequestStatus
    | IGetIngredientsError
    | IResetPreviousBuns;

export type TOrderDetailsActions =
    IGetOrderData
    | IOpenOrderDetailsModal
    | IChangeOrderDetailsStatus
    | ICloseOrderDetailsModal
    | IGetOrderDataError;

export type TAuthActions =
    IRegister
    | IGetRegistrationError
    | IGetLoginError
    | ILogin
    | ICatchResetPasswordOnFirstStepError
    | ICatchResetPasswordOnSecondStepError
    | IGetResetPasswordOnFirstStepResponse
    | IGetResetPasswordOnSecondStepResponse
    | IGetSignOutError
    | ISignOut
    | IGetUserInfoError
    | IIsUserChecked
    | IGetUserInfo
    | IUpdateUserInfoError
    | IUpdateUserInfo
    | IChangeAuthRequestStatus;

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TBurgerIngredientsActions | TBurgerConstructorActions | TOrderDetailsActions | TAuthActions;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
    >;
