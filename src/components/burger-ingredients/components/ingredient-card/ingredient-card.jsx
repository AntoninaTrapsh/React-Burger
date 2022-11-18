import styles from "./ingredient-card.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import INGREDIENTS_OBJECT_TYPE from "../../../../utils/types";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";
import {DND_TYPES} from "../../../../utils/consts";

const IngredientCard = (props) => {
    const [, dragRef] = useDrag({
        type: DND_TYPES.CARD_FROM_INGREDIENTS,
        item: props.ingredient,
    });

    return(
        <div className={`mt-6 ${styles['ingredient-card__wrapper']}`} onClick={() => props.handleIngredientCardOpen(props.ingredient)} ref={dragRef}>
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
    ingredient: INGREDIENTS_OBJECT_TYPE.isRequired,
    handleIngredientCardOpen: PropTypes.func.isRequired
};

export default IngredientCard;
