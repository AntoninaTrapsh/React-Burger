import styles from "../../burger-ingredients.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";

const IngredientsGroup = (props) => {
    return (
        <section>
            <div className="text text_type_main-medium">{props.title}</div>
            <div className={`${styles.ingredientGroupItems} mb-10 mt-6`}>
                {props.ingredients.map((ingredient) => {
                    return <IngredientCard key={ingredient._id} ingredient={ingredient}/>
                })}
            </div>
        </section>

    )
}

export default IngredientsGroup;
