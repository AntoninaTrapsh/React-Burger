import React from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = (props = []) => {
    return (
        <>
            <IngredientsList>
                {props.ingredientsData.map((obj) => {
                    return <IngredientCard key={obj.key} obj={obj}/>
                })}
            </IngredientsList>
            <div className="totalSum">
                610 <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large" htmlType="submit">
                Оформить заказ
            </Button>
        </>
    )
}

const IngredientsList = (props) => {
    return(
        <>
            <div>{props.children}</div>
        </>

    )
}

const IngredientCard = (props) => {
    return(
        <>
            <DragIcon type="primary" />
            <ConstructorElement
                isLocked={false}
                text={props.obj.name}
                price={props.obj.price}
                thumbnail={props.obj.image}
            />
        </>
    )
}

export default BurgerConstructor;
