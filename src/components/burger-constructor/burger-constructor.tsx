import React, {FC, ReactElement, useEffect} from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"
import IngredientsList from "./components/ingredients-list/ingredients-list";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchOrderDetails,
    openOrderDetailsModal
} from "../../services/store/actionCreators/order-details";
import {selectBuns, selectIngredientsList, selectTotalPrice} from "../../services/store/selectors/burger-constructor";
import {fetchUserInfo, isUserChecked} from "../../services/store/actionCreators/auth";
import {selectAuthInfo, selectIsAuthRequestEnded} from "../../services/store/selectors/auth";
import Preloader from "../preloader/preloader";
import {useHistory} from "react-router-dom";
import {IIngredient} from "../../utils/types";

const BurgerConstructor: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const totalPrice: number = useSelector(selectTotalPrice);
    const ingredientsData: IIngredient[] = useSelector(selectIngredientsList);
    const buns: IIngredient | null = useSelector(selectBuns);
    const isAuthChecked: boolean = useSelector(selectIsAuthRequestEnded);
    const isAuth: boolean = useSelector(selectAuthInfo)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUserInfo());
        return () => {
            dispatch(isUserChecked(false))
        }
    }, [dispatch])

    const handleOpenOrderModal = (): ReactElement | void => {
        if (!isAuthChecked) {
            return <Preloader/>
        }
        if (isAuthChecked && isAuth) {
            showOrderDetails();
        } else {
            history.push(
                {
                    pathname: '/login',
                    state: {
                        from: '/'
                    }
                }
            )
        }
    }

    const showOrderDetails = (): void => {
        dispatch(openOrderDetailsModal());
        // @ts-ignore
        dispatch(fetchOrderDetails('/orders', [buns, ...ingredientsData, buns]));
    }

    const disabled: boolean = !buns || !ingredientsData.length;

    return (
        <section className="mt-25">
            <IngredientsList/>
            <section className={`${styles['burger__total-sum']} mt-10`}>
                <div className="text text_type_digits-medium mr-10 ">
                    {totalPrice} <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" htmlType="submit" disabled={disabled} onClick={() => handleOpenOrderModal()}>
                    ???????????????? ??????????
                </Button>
            </section>
        </section>
    )
}

export default BurgerConstructor;
