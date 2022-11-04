import React from "react";
import styles from "./burger-ingredients.module.css";
import IngredientsHeader from "./components/ingredients-header/ingredients-header";
import IngredientsNavigation from "./components/ingredients-navigation/ingredients-navigation";
import IngredientsList from "./components/ingredients-list/ingredients-list";
import INGREDIENTS_OBJECT_TYPE from "../../utils/types";
import PropTypes from "prop-types";

const BurgerIngredients = (props) => {
    return (
        <section className={`${styles['burger-ingredients']} mr-10`}>
            <IngredientsHeader>Соберите бургер</IngredientsHeader>
            <IngredientsNavigation/>
            <IngredientsList ingredientsData={props.ingredientsData} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
        </section>
    )
}

BurgerIngredients.propTypes = {
    ingredientsData: PropTypes.arrayOf(INGREDIENTS_OBJECT_TYPE).isRequired
};

export default BurgerIngredients;
