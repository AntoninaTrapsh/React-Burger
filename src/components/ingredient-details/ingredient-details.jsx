import React from "react";
import styles from "./ingredient-details.module.css"
import {useSelector} from "react-redux";
import {selectIngredients} from "../../services/store/selectors/burger-ingredients";
import {useParams} from "react-router-dom/cjs/react-router-dom";

const IngredientDetails = () => {
    const { ingredientId } = useParams();
    const ingredient = useSelector(selectIngredients)?.find((ingredient) => ingredient._id === ingredientId);

    return (
        ingredient &&
        <div className={`${styles['ingredient-detail']}`}>
            <img src={ingredient.image_large} alt={ingredient.name} className={`${styles['ingredient-detail__image']}`}/>
            <h1 className="text text_type_main-medium mb-8 mt-4">{ingredient.name}</h1>
            <div className={`${styles['ingredient-detail__items']} text text_color_inactive text_type_main-default`}>
                <div className={`${styles['ingredient-detail__item']} mr-5`}>
                    <span>Калории, ккал</span>
                    <span className="text text_type_digits-default mt-2">{ingredient.calories}</span>
                </div>
                <div className={`${styles['ingredient-detail__item']} mr-5`}>
                    <span>Белки, г</span>
                    <span className="text text_type_digits-default mt-2">{ingredient.proteins}</span>
                </div>
                <div className={`${styles['ingredient-detail__item']} mr-5`}>
                    <span>Жиры, г</span>
                    <span className="text text_type_digits-default mt-2">{ingredient.fat}</span>
                </div>
                <div className={`${styles['ingredient-detail__item']}`}>
                    <span>Углеводы, г</span>
                    <span className="text text_type_digits-default mt-2">{ingredient.carbohydrates}</span>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;
