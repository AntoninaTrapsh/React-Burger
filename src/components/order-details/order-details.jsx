import React from "react";
import orderImage from "../../images/done.svg"
import styles from "./order-details.module.css"
import { useSelector} from "react-redux";
import {selectOrderId, selectOrderRequestStatus} from "../../services/store/selectors/order-details";
import Preloader from "../preloader/preloader";

const OrderDetails = () => {
    const orderId = useSelector(selectOrderId);
    const requestStatus = useSelector(selectOrderRequestStatus);

    return (
        <div className={`${styles['order-details']} pb-15 pt-30`}>
            {
                requestStatus ?
                    <Preloader/> :
                    <>
                        <p className={`${styles['order-details__id']} text text_type_digits-large mb-8`}>{orderId}</p>
                        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
                        <img src={orderImage} alt="Заказ успешно создан"/>
                        <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
                        <span className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</span>
                    </>
            }
        </div>
    )
}

export default OrderDetails;
