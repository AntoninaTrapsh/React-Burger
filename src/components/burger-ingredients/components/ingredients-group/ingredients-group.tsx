import styles from "./ingredients-group.module.css";
import React, {FC} from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import {IIngredientsList} from "../../../../utils/interfaces";

interface IIngredientGroupProps {
    title: string;
    ingredients: IIngredientsList[];
}

const IngredientsGroup: FC<IIngredientGroupProps> = ({title, ingredients}) => {
    return (
        <section data-id={title}>
            <h2 className="text text_type_main-medium">{title}</h2>
            <div className={`${styles['ingredients-group__items']} mb-10 mt-6`}>
                {ingredients.map((ingredient) => {
                    return <IngredientCard key={ingredient._id} ingredient={ingredient}/>
                })}
            </div>
        </section>

    )
}

export default IngredientsGroup;
