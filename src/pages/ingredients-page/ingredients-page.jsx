import React, {useEffect} from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./ingredients-page.module.css"

const IngredientsPage = () => {
    return (
        <section className={styles['ingredients-wrapper']}>
            <IngredientDetails/>
        </section>

    )
}

export default IngredientsPage;
