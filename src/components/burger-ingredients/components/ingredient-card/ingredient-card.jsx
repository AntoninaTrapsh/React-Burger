import styles from "./ingredient-card.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import INGREDIENTS_OBJECT_TYPE from "../../../../utils/types";
import {useDrag} from "react-dnd";
import {DND_TYPES} from "../../../../utils/consts";
import {openIngredientDetails} from "../../../../services/store/actionCreators/ingredient-details";
import {useDispatch} from "react-redux";

const IngredientCard = (props) => {
    const dispatch = useDispatch();
    const [, dragRef] = useDrag({
        type: DND_TYPES.CARD_FROM_INGREDIENTS,
        item: props.ingredient,
    });

    const handleIngredientCardOpen = (ingredient) => {
        dispatch(openIngredientDetails(ingredient))
    }

    return(
        <div className={`mt-6 ${styles['ingredient-card__wrapper']}`} onClick={() => handleIngredientCardOpen(props.ingredient)} ref={dragRef}>
            <div className={styles['ingredient-card']}>
                <img className="ml-4 mr-4" src={props.ingredient.image} alt={"Изображение ингредиента"}/>
                <div className={`${styles['ingredient-card__price']} mt-1 mb-1`}>
                    <span className="text text_type_digits-default mr-2">{props.ingredient.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className="text text_type_main-default">{props.ingredient.name}</p>
            </div>
            {
                !!props.ingredient.quantity &&
                <div className={styles['ingredient-card__counter']}>
                    <Counter count={props.ingredient.quantity} size="default"/>
                </div>
            }
        </div>
    )
}

IngredientCard.propTypes = {
    ingredient: INGREDIENTS_OBJECT_TYPE.isRequired,
};

export default IngredientCard;
