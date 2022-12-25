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
    IGetOrderData,
    IGetOrderDataError,
    IOpenOrderDetailsModal
} from "../actionCreators/order-details";
import {
    ICatchResetPasswordOnFirstStepError,
    ICatchResetPasswordOnSecondStepError,
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
    | IChangeRequestStatus
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
    | IUpdateUserInfo;
