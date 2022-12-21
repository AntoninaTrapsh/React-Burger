import Bun from "../bun/bun";
import styles from "./ingredients-list.module.css";
import React, {FC} from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import {DND_TYPES} from "../../../../utils/consts";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {addBunsToConstructor, addIngredientToConstructor} from "../../../../services/store/actionCreators/burger-constructor";
import {selectBuns, selectIngredientsList} from "../../../../services/store/selectors/burger-constructor";
import DefaultConstructorElement from "../default-constructor-element/default-constructor-element";
import {resetPreviousBuns, increaseIngredientCounter} from "../../../../services/store/actionCreators/burger-ingredients";
import {IConstructorIngredient, IIngredient} from "../../../../utils/types";

const IngredientsList: FC = () => {
    const dispatch = useDispatch();
    const ingredients: IConstructorIngredient[] = useSelector(selectIngredientsList);
    const bun: IIngredient | null = useSelector(selectBuns);

    const [, dropTargetRef] = useDrop({
        accept: DND_TYPES.CARD_FROM_INGREDIENTS,
        drop(ingredient: IIngredient) {
            // @ts-ignore
            handleOnDrop(ingredient);
        }
    });

    const handleOnDrop = (ingredient: IIngredient): void => {
        if (ingredient.type === "bun") {
            dispatch(resetPreviousBuns());
            dispatch(addBunsToConstructor(ingredient));
            dispatch(increaseIngredientCounter(ingredient._id, 2));
        } else {
            dispatch(addIngredientToConstructor(ingredient))
            dispatch(increaseIngredientCounter(ingredient._id, 1));
        }
    }

    return (
        <section ref={dropTargetRef}>
            <Bun position="top" data={bun}/>
            {
                ingredients.length ?
                    <div className={`${styles['ingredient-list']} pr-2`}>
                        {ingredients.map((ingredient: IConstructorIngredient, index: number) => {
                            if (ingredient.type === "bun") {
                                return null
                            }
                            return <IngredientCard key={ingredient.uuid} index={index} ingredient={ingredient}/>
                        })}
                    </div> :
                    <div className={`${styles['empty-list']} pl-8 pr-2 mt-4 mb-4`}>
                        <DefaultConstructorElement>Выберите основные ингредиенты</DefaultConstructorElement>
                    </div>
            }
            <Bun position="bottom" data={bun}/>
        </section>

    )
}

export default IngredientsList;
