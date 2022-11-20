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

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const totalPrice = useSelector(selectTotalPrice);
    const ingredientsData = useSelector(selectIngredientsList);
    const buns = useSelector(selectBuns)

    const handleOpenOrderModal = () => {
        dispatch(openOrderDetailsModal());
        dispatch(fetchOrderDetails('orders', [buns, ...ingredientsData, buns]));
    }

    return (
        <section className="mt-25">
            <IngredientsList ingredientsData={ingredientsData}/>
            <section className={`${styles['burger__total-sum']} mt-10`}>
                <div className="text text_type_digits-medium mr-10 ">
                    {totalPrice} <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" htmlType="submit" onClick={() => handleOpenOrderModal()}>
                    Оформить заказ
                </Button>
            </section>
        </section>
    )
}

export default BurgerConstructor;
