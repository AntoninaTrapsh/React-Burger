import React from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = (props = []) => {
    return (
        <IngredientsList>
            {props.ingredientsData.map((obj) => {
                return <IngredientCard key={obj.key} obj={obj}/>
            })}
        </IngredientsList>
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
        <ConstructorElement
            isLocked={false}
            text={props.obj.name}
            price={props.obj.price}
            thumbnail={props.obj.image}
        />
    )
}

export default BurgerConstructor;
