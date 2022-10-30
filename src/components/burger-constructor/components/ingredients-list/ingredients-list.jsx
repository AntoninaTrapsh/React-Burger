import Bun from "../bun/bun";
import styles from "./ingredients-list.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";

const IngredientsList = (props) => {
    const bun = props.ingredientsData.find((ingredient) => {
        return ingredient.type === "bun";
    })

    return (
        <>
            <Bun position="top" data={bun}></Bun>
            <div className={`${styles['ingredient-list']} pr-2`}>
                {props.ingredientsData.map((ingredient) => {
                    return <IngredientCard key={ingredient._id} ingredient={ingredient}/>
                })}
            </div>
            <Bun position="bottom" data={bun}></Bun>
        </>

    )
}

export default IngredientsList;
