import styles from "./ingredient-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import {DropTargetMonitor, useDrag, useDrop, XYCoord} from "react-dnd";
import {DND_TYPES} from "../../../../utils/consts";
import {useDispatch} from "react-redux";
import {
    changeIngredientPosition,
    deleteIngredientFromConstructor
} from "../../../../services/store/actionCreators/burger-constructor";
import {decreaseIngredientCounter} from "../../../../services/store/actionCreators/burger-ingredients";
import {IConstructorIngredient} from "../../../../utils/interfaces";

interface IIngredientCard {
    index: number;
    ingredient: IConstructorIngredient;
}

interface IIndices {
    toIndex: number;
    fromIndex: number;
}

const IngredientCard: FC<IIngredientCard> = (props) => {
    const ref = React.useRef<HTMLDivElement>(null);

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
        hover: (item: IConstructorIngredient, monitor: DropTargetMonitor<IConstructorIngredient, IConstructorIngredient>) => {
            if (!ref.current) {
                return
            }
            const dragIndex: number = item.index;
            const hoverIndex: number = props.index;
            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect: DOMRect = ref.current.getBoundingClientRect();
            const clientOffset: XYCoord | null = monitor.getClientOffset();
            const hoverMiddleY: number = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverClientY: number = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            const indices: IIndices = {
                toIndex: dragIndex,
                fromIndex: hoverIndex
            }

            dispatch(changeIngredientPosition(indices));

            item.index = hoverIndex;
        }
    });

    dragRef(dropRef(ref));

    const dispatch = useDispatch();

    const handleDeleteIngredient = (ingredient: IConstructorIngredient): void => {
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

export default IngredientCard;
