import React, {useState} from "react";
import styles from "./burger-ingredients.module.css";
import IngredientsHeader from "./components/ingredients-header/ingredients-header";
import IngredientsNavigation from "./components/ingredients-navigation/ingredients-navigation";
import IngredientsList from "./components/ingredients-list/ingredients-list";
import {INGREDIENT_TYPES} from "./consts/consts";

const BurgerIngredients = () => {
    const [activeTab, setActiveTab] = useState(INGREDIENT_TYPES.bun);

    const handleChangeActiveTab = (tab) => {
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
