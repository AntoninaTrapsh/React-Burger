import styles from "./ingredient-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import {useDrag, useDrop} from "react-dnd";
import {DND_TYPES} from "../../../../utils/consts";
import {useDispatch} from "react-redux";
import {
    changeIngredientPosition,
    deleteIngredientFromConstructor
} from "../../../../services/store/actionCreators/burger-constructor";
import {decreaseIngredientCounter} from "../../../../services/store/actionCreators/burger-ingredients";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom/cjs/react-router-dom";

const IngredientCard = (props) => {
    const ref = React.useRef(null);

    const [, dragRef] = useDrag({
        type: DND_TYPES.CARD_FROM_CONSTRUCTOR,
        item: () => {
            return {
                uuid: props.ingredient.uuid,
                index: props.index
            }
        },
    });

    const [, dropRef ] = useDrop({
        accept: DND_TYPES.CARD_FROM_CONSTRUCTOR,
        hover: (item, monitor) => {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = props.index;
            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            const indices = {
                toIndex: dragIndex,
                fromIndex: hoverIndex
            }

            dispatch(changeIngredientPosition(indices));

            item.index = hoverIndex;
        }
    });

    dragRef(dropRef(ref));

    const dispatch = useDispatch();

    const handleDeleteIngredient = (ingredient) => {
        dispatch(deleteIngredientFromConstructor(ingredient.uuid));
        dispatch(decreaseIngredientCounter(ingredient._id));
    }

    return (
        <div className="mb-4" ref={ref}>
            <div className={styles['ingredient-card__stuffing-list']}>
                <DragIcon type="primary"/>
                <ConstructorElement
                    isLocked={false}
                    text={props.ingredient.name}
                    price={props.ingredient.price}
                    thumbnail={props.ingredient.image}
                    handleClose={() => handleDeleteIngredient(props.ingredient)}
                />
            </div>
        </div>
    )
}

IngredientCard.propTypes = {
    ingredient: INGREDIENT_OBJECT_TYPE.isRequired,
    index: PropTypes.number.isRequired,
};

export default IngredientCard;
