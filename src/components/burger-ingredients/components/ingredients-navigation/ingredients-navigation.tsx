import React, {FC} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {INGREDIENT_TYPES} from "../../consts/consts";
import {TIngredientTypes} from "../../../../utils/interfaces";

interface IIngredientsNavigationProps {
    activeTab: TIngredientTypes;
}

const IngredientsNavigation: FC<IIngredientsNavigationProps> = ({activeTab}) => {
    const ingredientTypeKeys: TIngredientTypes[] = Object.keys(INGREDIENT_TYPES) as TIngredientTypes[];
    return (
        <>
            <div className="mb-10" style={{ display: 'flex' }}>
                {ingredientTypeKeys.map((type: TIngredientTypes) => {
                    return <Tab value={INGREDIENT_TYPES[type]} key={type} active={activeTab === INGREDIENT_TYPES[type]} onClick={() => {}}>
                        {INGREDIENT_TYPES[type]}
                    </Tab>
                })}
            </div>
        </>
    )
}

export default IngredientsNavigation;
