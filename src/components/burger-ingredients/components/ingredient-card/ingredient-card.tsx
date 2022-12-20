import styles from "./ingredient-card.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import {useDrag} from "react-dnd";
import {DND_TYPES} from "../../../../utils/consts";
import {Link, useLocation} from "react-router-dom";
import {IIngredientsList, TModalState} from "../../../../utils/interfaces";

interface IIngredientCard {
    ingredient: IIngredientsList;
}


const IngredientCard: FC<IIngredientCard> = ({ingredient}) => {
    const location = useLocation();

    const [, dragRef] = useDrag({
        type: DND_TYPES.CARD_FROM_INGREDIENTS,
        item: ingredient,
    });

    const ingredientId = ingredient._id;

    return (
        <Link<TModalState>
            key={ingredientId}
            to={{
                pathname: `/ingredients/${ingredientId}`,
                state: { background: location },
            }}
        >
            <div className={`mt-6 ${styles['ingredient-card__wrapper']}`} ref={dragRef}>
                <div className={styles['ingredient-card']}>
                    <img className="ml-4 mr-4" src={ingredient.image} alt={"Изображение ингредиента"}/>
                    <div className={`${styles['ingredient-card__price']} mt-1 mb-1`}>
                        <span className="text text_type_digits-default mr-2">{ingredient.price}</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">{ingredient.name}</p>
                </div>
                {
                    !!ingredient.quantity &&
                    <div className={styles['ingredient-card__counter']}>
                        <Counter count={ingredient.quantity} size="default"/>
                    </div>
                }
            </div>
        </Link>
    )
}

export default IngredientCard;
