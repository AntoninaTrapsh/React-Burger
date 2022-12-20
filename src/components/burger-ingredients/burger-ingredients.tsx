import React, {FC, useState} from "react";
import styles from "./burger-ingredients.module.css";
import IngredientsHeader from "./components/ingredients-header/ingredients-header";
import IngredientsNavigation from "./components/ingredients-navigation/ingredients-navigation";
import IngredientsList from "./components/ingredients-list/ingredients-list";
import {INGREDIENT_TYPES} from "./consts/consts";
import {TIngredientTypes} from "../../utils/interfaces";

const BurgerIngredients: FC = () => {
    const [activeTab, setActiveTab] = useState<TIngredientTypes>(INGREDIENT_TYPES.bun as TIngredientTypes);

    const handleChangeActiveTab = (tab: TIngredientTypes) => {
        setActiveTab(tab);
    }

    return (
        <section className={`${styles['burger-ingredients']} mr-10`}>
            <IngredientsHeader>Соберите бургер</IngredientsHeader>
            <IngredientsNavigation activeTab={activeTab}/>
            <IngredientsList handleChangeActiveTab={handleChangeActiveTab}/>
        </section>
    )
}

export default BurgerIngredients;
