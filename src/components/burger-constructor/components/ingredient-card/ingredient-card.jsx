import styles from "./ingredient-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import PropTypes from "prop-types";

const IngredientCard = (props) => {
    return (
            <div className="mb-4" onClick={() => props.handleIngredientCardOpen(props.ingredient)}>
                    {props.ingredient.type === "bun" ? null :
                        <div className={styles['ingredient-card__stuffing-list']}>
                            <DragIcon type="primary"/>
                            <ConstructorElement
                                isLocked={false}
                                text={props.ingredient.name}
                                price={props.ingredient.price}
                                thumbnail={props.ingredient.image}
                            />
                        </div>
                    }
            </div>
    )
}

IngredientCard.propTypes = {
    ingredient: INGREDIENT_OBJECT_TYPE.isRequired,
    handleIngredientCardOpen: PropTypes.func.isRequired
};

export default IngredientCard;
