import React from "react";
import styles from "./burger-ingredients.module.css";
import IngredientsHeader from "./components/ingredients-header/ingredients-header";
import IngredientsNavigation from "./components/ingredients-navigation/ingredients-navigation";
import IngredientsList from "./components/ingredients-list/ingredients-list";

const BurgerIngredients = (props) => {

    return (
        <section className={`${styles['burger-ingredients']} mr-10`}>
            <IngredientsHeader>Соберите бургер</IngredientsHeader>
            <IngredientsNavigation/>
            <IngredientsList ingredientsData={props.ingredientsData}/>
        </section>
    )
}

export default BurgerIngredients;
