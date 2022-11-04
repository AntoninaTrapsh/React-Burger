import Bun from "../bun/bun";
import styles from "./ingredients-list.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";
import INGREDIENT_OBJECT_TYPE from "./../../../../utils/consts";

const IngredientsList = (props) => {
    const bun = props.ingredientsData.find((ingredient) => {
        return ingredient.type === "bun";
    })

    return (
        <>
            <Bun position="top" data={bun} handleIngredientCardOpen={props.handleIngredientCardOpen}></Bun>
            <div className={`${styles['ingredient-list']} pr-2`}>
                {props.ingredientsData.map((ingredient) => {
                    return <IngredientCard key={ingredient._id} ingredient={ingredient} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
                })}
            </div>
            <Bun position="bottom" data={bun} handleIngredientCardOpen={props.handleIngredientCardOpen}></Bun>
        </>

    )
}

IngredientsList.propType = {
    ingredientsData: PropTypes.arrayOf(INGREDIENT_OBJECT_TYPE).isRequired
}

export default IngredientsList;
