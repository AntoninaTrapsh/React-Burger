import React, {useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {INGREDIENT_TYPES} from "../../consts/consts";

const IngredientsNavigation = () => {
    const [selectedIngredientType, setSelectedIngredientType] = useState('Булки')
    const ingredientTypeKeys = Object.keys(INGREDIENT_TYPES);
    return (
        <>
            <div className="mb-10" style={{ display: 'flex' }}>
                {ingredientTypeKeys.map((type) => {
                    return <Tab value={INGREDIENT_TYPES[type]} active={selectedIngredientType === INGREDIENT_TYPES[type]} onClick={setSelectedIngredientType}>
                        {INGREDIENT_TYPES[type]}
                    </Tab>
                })}
            </div>
        </>
    )
}

export default IngredientsNavigation;
