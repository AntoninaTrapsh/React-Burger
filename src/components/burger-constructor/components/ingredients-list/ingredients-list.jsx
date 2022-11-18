import Bun from "../bun/bun";
import styles from "./ingredients-list.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import {DND_TYPES} from "../../../../utils/consts";
import {useDrop} from "react-dnd";

const IngredientsList = (props) => {
    const bun = props.ingredientsData.find((ingredient) => {
        return ingredient.type === "bun";
    })

    const [, dropTargetRef] = useDrop({
        accept: DND_TYPES.CARD_FROM_INGREDIENTS,
        drop(ingredient) {
            handleOnDrop(ingredient);
        }
    });

    const handleOnDrop = (ingredient) => {
        console.log(ingredient.type);
    }

    // const totalPrice = () => {
    //     props.ingredientsData.reduce((sum, ingredient) => {
    //         return sum + ingredient.price;
    //     }, 0)
    // }

    return (
        <section ref={dropTargetRef}>
            <Bun position="top" data={bun} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
            <div className={`${styles['ingredient-list']} pr-2`}>
                {props.ingredientsData.map((ingredient) => {
                    return <IngredientCard key={ingredient._id} ingredient={ingredient} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
                })}
            </div>
            <Bun position="bottom" data={bun} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
        </section>

    )
}

IngredientsList.propType = {
    ingredientsData: PropTypes.arrayOf(INGREDIENT_OBJECT_TYPE).isRequired,
    handleIngredientCardOpen: PropTypes.func.isRequired
}

export default IngredientsList;
