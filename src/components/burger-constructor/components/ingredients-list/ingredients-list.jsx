import Bun from "../bun/bun";
import styles from "../../burger-constructor.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";

const IngredientsList = (props = []) => {
    const bun = props.ingredientsData.find((ingredient) => {
        return ingredient.type === "bun";
    })

    return (
        <>
            <Bun position="top" data={bun}></Bun>
            <div className={styles.hello}>
                {props.ingredientsData.map((obj) => {
                    return <IngredientCard key={obj._id} obj={obj}/>
                })}
            </div>
            <Bun position="bottom" data={bun}></Bun>
        </>

    )
}

export default IngredientsList;
