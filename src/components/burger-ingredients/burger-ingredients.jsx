import React, {useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
    return (
        <>
            <h1>Соберите бургер</h1>
            <IngredientsNavigation/>
            <IngredientsList>
                <IngredientCard/>
            </IngredientsList>s
        </>
    )
}

const IngredientsNavigation = () => {
    const [current, setCurrent] = useState('one')
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

const IngredientsList = (props) => {
    return(
        <>
            <div>{props.children}</div>
        </>

    )
}

const IngredientCard = () => {
    return(
        <></>
    )
}

export default BurgerIngredients;
