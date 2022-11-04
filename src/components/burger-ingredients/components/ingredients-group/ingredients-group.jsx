import styles from "./ingredients-group.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";
import INGREDIENTS_OBJECT_TYPE from "../../../../utils/types";

const IngredientsGroup = (props) => {
    return (
        <section>
            <div className="text text_type_main-medium">{props.title}</div>
            <div className={`${styles['ingredients-group__items']} mb-10 mt-6`}>
                {props.ingredients.map((ingredient) => {
                    return <IngredientCard key={ingredient._id} ingredient={ingredient} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
                })}
            </div>
        </section>

    )
}

IngredientsGroup.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(INGREDIENTS_OBJECT_TYPE).isRequired,
}
export default IngredientsGroup;
