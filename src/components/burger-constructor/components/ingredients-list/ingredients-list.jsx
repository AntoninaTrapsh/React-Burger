import Bun from "../bun/bun";
import styles from "./ingredients-list.module.css";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import {DND_TYPES} from "../../../../utils/consts";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addBunsToConstructor, addIngredientToConstructor} from "../../../../store/actionCreators/burger-constructor";
import {selectBuns, selectIngredientsList} from "../../../../store/selectors/burger-constructor";
import DefaultConstructorElement from "../default-constructor-element/default-constructor-element";

const IngredientsList = (props) => {
    const dispatch = useDispatch();
    const ingredients = useSelector(selectIngredientsList);
    console.log(ingredients);

    // const bun = props.ingredientsData.find((ingredient) => {
    //     return ingredient.type === "bun";
    // })

    const bun = useSelector(selectBuns);
    // console.log('buns', bun);

    const [, dropTargetRef] = useDrop({
        accept: DND_TYPES.CARD_FROM_INGREDIENTS,
        drop(ingredient) {
            handleOnDrop(ingredient);
        }
    });

    const handleOnDrop = (ingredient) => {
        if (ingredient.type === "bun") {
            dispatch(addBunsToConstructor(ingredient))
        } else {
            dispatch(addIngredientToConstructor(ingredient))
        }
    }

    // const totalPrice = () => {
    //     props.ingredientsData.reduce((sum, ingredient) => {
    //         return sum + ingredient.price;
    //     }, 0)
    // }

    return (
        <section ref={dropTargetRef}>
            <Bun position="top" data={bun} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
            {
                ingredients.length ?
                    <div className={`${styles['ingredient-list']} pr-2`}>
                        {ingredients.map((ingredient) => {
                            if (ingredient.type === "bun") {
                                return
                            }
                            return <IngredientCard key={ingredient.uuid} ingredient={ingredient} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
                        })}
                    </div> :
                    <div className={`${styles['empty-list']} pl-8 pr-2 mt-4 mb-4`}>
                        <DefaultConstructorElement>Выберите основные ингредиенты</DefaultConstructorElement>
                    </div>
            }
            <Bun position="bottom" data={bun} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
        </section>

    )
}

IngredientsList.propType = {
    ingredientsData: PropTypes.arrayOf(INGREDIENT_OBJECT_TYPE).isRequired,
    handleIngredientCardOpen: PropTypes.func.isRequired
}

export default IngredientsList;
