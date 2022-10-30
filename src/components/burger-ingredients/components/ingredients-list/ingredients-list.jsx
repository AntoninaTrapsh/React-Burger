import styles from "./ingredients-list.module.css";
import React from "react";
import IngredientsGroup from "../ingredients-group/ingredients-group";
import {INGREDIENT_TYPES} from "../../consts/consts";

const IngredientsList = (props = []) => {
    const ingredientTypeKeys = Object.keys(INGREDIENT_TYPES);

    return(
        <section className={styles['burger-ingredients__group-list']}>
            {
                ingredientTypeKeys.map((type) => {
                    const groupIngredientsList = props.ingredientsData.reduce((list, ingredient) => {
                        if (type === ingredient.type) {
                            list.push(ingredient);
                        }
                        return list;
                    }, [])
                    return <IngredientsGroup key={type} ingredients={groupIngredientsList} title={INGREDIENT_TYPES[type]}/>
                })
            }
        </section>

    )
}

export default IngredientsList;