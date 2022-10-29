import React from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"

const BurgerConstructor = (props = []) => {
    return (
        <section className={`${styles.BurgerConstructor} mt-25`}>
            <IngredientsList>
                {props.ingredientsData.map((obj) => {
                    return <IngredientCard key={obj.key} obj={obj}/>
                })}
            </IngredientsList>
            <section className={`${styles.totalSum} mt-10`}>
                <div className="text text_type_digits-medium mr-10 ">
                    610 <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" htmlType="submit">
                    Оформить заказ
                </Button>
            </section>
        </section>
    )
}

const IngredientsList = (props) => {
    return(
        <>
            <div className={styles.hello}>{props.children}</div>
        </>

    )
}

const IngredientCard = (props) => {
    return(
        <div className={`${styles['ingredientCard']} mb-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
                isLocked={false}
                text={props.obj.name}
                price={props.obj.price}
                thumbnail={props.obj.image}
            />
        </div>
    )
}

export default BurgerConstructor;
