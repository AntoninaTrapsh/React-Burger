import React from "react";
import styles from "./ingredient-details.module.css"

const IngredientDetails = (props) => {
    console.log(props);
    return (
        <div className={`${styles['ingredient-detail']}`}>
            <img src={props.ingredient.image_large} alt={props.ingredient.name} className={`${styles['ingredient-detail__image']}`}/>
            <h1 className="text text_type_main-medium mb-8 mt-4">{props.ingredient.name}</h1>
            <div className={`${styles['ingredient-detail__items']} text text_color_inactive text_type_main-default`}>
                <div className={`${styles['ingredient-detail__item']} mr-5`}>
                    <span>Калории, ккал</span>
                    <span className="text text_type_digits-default mt-2">{props.ingredient.calories}</span>
                </div>
                <div className={`${styles['ingredient-detail__item']} mr-5`}>
                    <span>Белки, г</span>
                    <span className="text text_type_digits-default mt-2">{props.ingredient.proteins}</span>
                </div>
                <div className={`${styles['ingredient-detail__item']} mr-5`}>
                    <span>Жиры, г</span>
                    <span className="text text_type_digits-default mt-2">{props.ingredient.fat}</span>
                </div>
                <div className={`${styles['ingredient-detail__item']}`}>
                    <span>Углеводы, г</span>
                    <span className="text text_type_digits-default mt-2">{props.ingredient.carbohydrates}</span>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;
