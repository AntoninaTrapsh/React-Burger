import styles from "./ingredient-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";
import {DND_TYPES} from "../../../../utils/consts";
import {useDispatch} from "react-redux";
import {deleteIngredientFromConstructor} from "../../../../store/actionCreators/burger-constructor";

const IngredientCard = (props) => {
    const [, dragRef] = useDrag({
        type: DND_TYPES.CARD_FROM_CONSTRUCTOR,
        item: props.ingredient,
    });

    const dispatch = useDispatch();

    const handleDeleteIngredient = (e, uuid) => {
        e.stopPropagation();
        dispatch(deleteIngredientFromConstructor(uuid));
    }

    return (
        <div className="mb-4" onClick={() => props.handleIngredientCardOpen(props.ingredient)} ref={dragRef}>
            <div className={styles['ingredient-card__stuffing-list']}>
                <DragIcon type="primary"/>
                <ConstructorElement
                    isLocked={false}
                    text={props.ingredient.name}
                    price={props.ingredient.price}
                    thumbnail={props.ingredient.image}
                    handleClose={(e) => handleDeleteIngredient(e, props.ingredient.uuid)}
                />
            </div>
        </div>
    )
}

IngredientCard.propTypes = {
    ingredient: INGREDIENT_OBJECT_TYPE.isRequired,
    handleIngredientCardOpen: PropTypes.func.isRequired
};

export default IngredientCard;
