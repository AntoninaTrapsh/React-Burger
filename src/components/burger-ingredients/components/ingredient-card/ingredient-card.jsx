import styles from "../../burger-ingredients.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const IngredientCard = (props) => {
    return(
        <div className={`mt-6 ${styles.ingredientCardWrapper}`}>
            <div className={styles['ingredientCard']}>
                <img className="ml-4 mr-4" src={props.ingredient.image} alt={"Изображение ингредиента"}/>
                <div className={`${styles['ingredientCardPrice']} mt-1 mb-1`}>
                    <span className="text text_type_digits-default mr-2">{props.ingredient.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className="text text_type_main-default">{props.ingredient.name}</p>
            </div>
            <div className={styles['ingredientCounter']}>
                <Counter count={1} size="default"/>
            </div>
        </div>
    )
}

export default IngredientCard;
