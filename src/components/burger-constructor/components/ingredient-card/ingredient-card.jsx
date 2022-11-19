import styles from "./ingredient-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import PropTypes from "prop-types";
import {useDrag, useDrop} from "react-dnd";
import {DND_TYPES} from "../../../../utils/consts";
import {useDispatch} from "react-redux";
import {
    changeIngredientPosition,
    deleteIngredientFromConstructor
} from "../../../../store/actionCreators/burger-constructor";

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

    const handleDeleteIngredient = (e, uuid) => {
        e.stopPropagation();
        dispatch(deleteIngredientFromConstructor(uuid));
    }

    return (
        <div className="mb-4" onClick={() => props.handleIngredientCardOpen(props.ingredient)} ref={ref}>
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
