import styles from "./ingredient-card.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {ingredientObjectType} from "../../../burger-constructor/consts/consts";

const IngredientCard = (props) => {
    return(
        <div className={`mt-6 ${styles['ingredient-card__wrapper']}`}>
            <div className={styles['ingredient-card']}>
                <img className="ml-4 mr-4" src={props.ingredient.image} alt={"Изображение ингредиента"}/>
                <div className={`${styles['ingredient-card__price']} mt-1 mb-1`}>
                    <span className="text text_type_digits-default mr-2">{props.ingredient.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className="text text_type_main-default">{props.ingredient.name}</p>
            </div>
            <div className={styles['ingredient-card__counter']}>
                <Counter count={1} size="default"/>
            </div>
        </div>
    )
}

IngredientCard.propTypes = {
    ingredient: ingredientObjectType.isRequired
};

export default IngredientCard;
