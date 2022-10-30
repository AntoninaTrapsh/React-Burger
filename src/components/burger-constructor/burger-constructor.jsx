import React from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css"

const BurgerConstructor = (props = []) => {
    return (
        <section className={`${styles.BurgerConstructor} mt-25`}>
            <IngredientsList ingredientsData={props.ingredientsData}/>
            <section className={`${styles.totalSum} mt-10`}>
                <div className="text text_type_digits-medium mr-10 ">
                    610 <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" htmlType="submit">
                    Оформить заказ
                </Button>
            </section>
        </section>
    )
}

const IngredientsList = (props = []) => {
    const bun = props.ingredientsData.find((ingredient) => {
        return ingredient.type === "bun";
    })

    console.log(props.ingredientsData);
    return (
        <>
            <Bun position="top" data={bun}></Bun>
            <div className={styles.hello}>
                {props.ingredientsData.map((obj) => {
                    return <IngredientCard key={obj._id} obj={obj}/>
                })}
            </div>
            <Bun position="bottom" data={bun}></Bun>
        </>

    )
}

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

const Bun = (props) => {
    const bunTypes = {
        top: "верх",
        bottom: "низ"
    }
    return (
        <div className="ml-8">
            <ConstructorElement
                type={props.position}
                isLocked={true}
                text={`${props.data.name} (${bunTypes[props.position]})`}
                thumbnail={props.data.image}
                price={props.data.price}
            />
        </div>
    )
}

export default BurgerConstructor;
