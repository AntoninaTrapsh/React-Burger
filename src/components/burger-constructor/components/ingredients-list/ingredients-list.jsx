import Bun from "../bun/bun";
import styles from "./ingredients-list.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import {DND_TYPES} from "../../../../utils/consts";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addIngredientToConstructor} from "../../../../store/actionCreators/burger-constructor";
import {selectIngredientsList} from "../../../../store/selectors/burger-constructor";

const IngredientsList = (props) => {
    const dispatch = useDispatch();
    const ingredients = useSelector(selectIngredientsList);
    // console.log(ingredients);

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
        dispatch(addIngredientToConstructor(ingredient))
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
                {ingredients.map((ingredient) => {
                    console.log(ingredient);
                    return <IngredientCard key={ingredient.uuid} ingredient={ingredient} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
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
