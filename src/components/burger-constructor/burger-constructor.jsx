import React, {useState} from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"
import IngredientsList from "./components/ingredients-list/ingredients-list";
import INGREDIENT_OBJECT_TYPE from "../../utils/types";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {selectOrderDetailsState, selectOrderId} from "../../store/selectors/order-details";
import {useDispatch, useSelector} from "react-redux";
import {
    closeOrderDetailsModal,
    fetchOrderDetails,
    openOrderDetailsModal
} from "../../store/actionCreators/order-details";

const BurgerConstructor = (props = []) => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectOrderDetailsState);
    const orderId = useSelector(selectOrderId);

    const handleOpenOrderModal = () => {
        dispatch(openOrderDetailsModal());
        dispatch(fetchOrderDetails('orders', props.ingredientsData));
    }

    const handleCloseOrderModal = () => {
        dispatch(closeOrderDetailsModal());
    }

    return (
        <section className="mt-25">
            <IngredientsList ingredientsData={props.ingredientsData} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
            <section className={`${styles['burger__total-sum']} mt-10`}>
                <div className="text text_type_digits-medium mr-10 ">
                    610 <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" htmlType="submit" onClick={() => handleOpenOrderModal()}>
                    Оформить заказ
                </Button>
            </section>
            {
                isOpen &&
                (<Modal handleModalClose={handleCloseOrderModal}>
                    <OrderDetails orderId={orderId}/>
                </Modal>)
            }
        </section>
    )
}


BurgerConstructor.propTypes = {
    ingredientsData: PropTypes.arrayOf(INGREDIENT_OBJECT_TYPE).isRequired,
    handleIngredientCardOpen: PropTypes.func.isRequired
};

export default BurgerConstructor;
