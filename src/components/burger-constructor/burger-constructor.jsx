import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"
import IngredientsList from "./components/ingredients-list/ingredients-list";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchOrderDetails,
    openOrderDetailsModal
} from "../../services/store/actionCreators/order-details";
import {selectBuns, selectIngredientsList, selectTotalPrice} from "../../services/store/selectors/burger-constructor";
import {fetchUserInfo} from "../../services/store/actionCreators/auth";
import {selectAuthInfo, selectIsUserChecked} from "../../services/store/selectors/auth";
import {Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const totalPrice = useSelector(selectTotalPrice);
    const ingredientsData = useSelector(selectIngredientsList);
    const buns = useSelector(selectBuns);
    const isAuthChecked = useSelector(selectIsUserChecked);
    const isAuth = useSelector(selectAuthInfo)

    const handleOpenOrderModal = () => {
        dispatch(fetchUserInfo());
        if (isAuthChecked && isAuth) {
            showOrderDetails();
        } else {
            history.push({
                pathname: "/login",
            })
        }
    }

    const showOrderDetails = () => {
        dispatch(openOrderDetailsModal());
        dispatch(fetchOrderDetails('orders', [buns, ...ingredientsData, buns]));
    }

    const disabled = !buns || !ingredientsData.length;

    return (
        <section className="mt-25">
            <IngredientsList/>
            <section className={`${styles['burger__total-sum']} mt-10`}>
                <div className="text text_type_digits-medium mr-10 ">
                    {totalPrice} <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" htmlType="submit" disabled={disabled} onClick={() => handleOpenOrderModal()}>
                    Оформить заказ
                </Button>
            </section>
        </section>
    )
}

export default BurgerConstructor;
