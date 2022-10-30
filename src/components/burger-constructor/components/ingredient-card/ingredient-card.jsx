import styles from "./ingredient-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const IngredientCard = (props) => {
    return (
        <div className="mb-4">
                {props.obj.type === "bun" ? null :
                    <div className={styles['ingredient-card__stuffing-list']}>
                        <DragIcon type="primary"/>
                        <ConstructorElement
                            isLocked={false}
                            text={props.obj.name}
                            price={props.obj.price}
                            thumbnail={props.obj.image}
                        />
                    </div>
                }
        </div>
    )
}

export default IngredientCard;
