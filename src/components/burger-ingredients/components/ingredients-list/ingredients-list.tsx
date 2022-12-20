import styles from "./ingredients-list.module.css";
import React, {FC, useCallback, useState} from "react";
import IngredientsGroup from "../ingredients-group/ingredients-group";
import {INGREDIENT_TYPES} from "../../consts/consts";
import {useSelector} from "react-redux";
import {selectIngredients} from "../../../../services/store/selectors/burger-ingredients";
import {IIngredient, TIngredientTypes} from "../../../../utils/interfaces";

interface IIngredientsListProps {
    handleChangeActiveTab: (tab: TIngredientTypes) => void;
}

const IngredientsList: FC<IIngredientsListProps> = ({handleChangeActiveTab}) => {
    const ingredientsData = useSelector(selectIngredients);
    const [mainSectionHeight, setMainSectionHeight] = useState(0);

    const ingredientTypeKeys: TIngredientTypes[] = Object.keys(INGREDIENT_TYPES) as TIngredientTypes[];

    const handleScroll = useCallback((e: React.UIEvent<HTMLElement, UIEvent>) => {
        for (let i = 0; i < (e.target as HTMLElement).children.length; i++) {
            const el = (e.target as HTMLElement).children[i]
            const elRect: DOMRect = el.getBoundingClientRect()

            const currElPositionValid: boolean = elRect.top >= 0 && elRect.top <= mainSectionHeight
            const nextSectionPositionValid: boolean = (e.target as HTMLElement).children[i + 1] ? (e.target as HTMLElement).children[i + 1].getBoundingClientRect().top > mainSectionHeight : true

            if (currElPositionValid && nextSectionPositionValid) {
                handleChangeActiveTab((el as HTMLElement).dataset.id as TIngredientTypes);
                return;
            }
        }
    }, [mainSectionHeight, handleChangeActiveTab])

    const calcSectionHeight = useCallback((mainSection: HTMLElement) => {
        if (mainSection) {
            setMainSectionHeight(mainSection.getBoundingClientRect().top + 50)
        }
    }, [])

    return(
        <section ref={(el) => calcSectionHeight(el as HTMLElement)} className={styles['burger-ingredients__group-list']} onScroll={(e) => handleScroll(e)}>
            {
                ingredientTypeKeys.map((type: TIngredientTypes) => {
                    const groupIngredientsList = ingredientsData.reduce((list: IIngredient[], ingredient: IIngredient) => {
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
