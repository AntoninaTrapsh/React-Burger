import React, {FC} from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./ingredients-page.module.css"

const IngredientsPage: FC = () => {
    return (
        <section className={styles['ingredients-wrapper']}>
            <h1 className="text text_type_main-large mb-8 mt-4">
                Детали ингредиента
            </h1>
            <IngredientDetails/>
        </section>

    )
}

export default IngredientsPage;
