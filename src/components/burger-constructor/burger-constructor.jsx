import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"
import IngredientsList from "./components/ingredients-list/ingredients-list";
import INGREDIENT_OBJECT_TYPE from "./../../utils/consts";
import PropTypes from "prop-types";

const BurgerConstructor = (props = []) => {
    return (
        <section className="mt-25">
            <IngredientsList ingredientsData={props.ingredientsData} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
            <section className={`${styles['burger__total-sum']} mt-10`}>
                <div className="text text_type_digits-medium mr-10 ">
                    610 <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" htmlType="submit">
                    Оформить заказ
                </Button>
            </section>
        </section>
    )
}


BurgerConstructor.propTypes = {
    ingredientsData: PropTypes.arrayOf(INGREDIENT_OBJECT_TYPE).isRequired
};

export default BurgerConstructor;
