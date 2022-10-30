import styles from "../../burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const IngredientCard = (props) => {
    return (
        <div className={`${styles['ingredientCard']} mb-4`}>
            <div className={styles['ingredientCardsStuffing']}>
                {props.obj.type === "bun" ? null :
                    <div className={styles['ingredientCardsStuffingList']}>
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
        </div>
    )
}

export default IngredientCard;
