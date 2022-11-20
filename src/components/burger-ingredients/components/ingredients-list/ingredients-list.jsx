import styles from "./ingredients-list.module.css";
import React, {useCallback, useState} from "react";
import IngredientsGroup from "../ingredients-group/ingredients-group";
import {INGREDIENT_TYPES} from "../../consts/consts";
import PropTypes from "prop-types";
import INGREDIENTS_OBJECT_TYPE from "../../../../utils/types";

const IngredientsList = ({handleChangeActiveTab, ...props}) => {
    const [mainSectionHeight, setMainSectionHeight] = useState(0)

    const ingredientTypeKeys = Object.keys(INGREDIENT_TYPES);

    const handleScroll = useCallback((e) => {
        for (let i = 0; i < e.target.children.length; i++) {
            const el = e.target.children[i]
            const elRect = el.getBoundingClientRect()

            const currElPositionValid = elRect.top >= 0 && elRect.top <= mainSectionHeight
            const nextSectionPositionValid = e.target.children[i + 1] ? e.target.children[i + 1].getBoundingClientRect().top > mainSectionHeight : true

            if (currElPositionValid && nextSectionPositionValid) {
                handleChangeActiveTab(el.dataset.id);
                return;
            }
        }
    }, [mainSectionHeight, handleChangeActiveTab])

    const calcSectionHeight = useCallback((mainSection) => {
        if (mainSection) {
            setMainSectionHeight(mainSection.getBoundingClientRect().top + 50)
        }
    }, [])

    return(
        <section ref={(el) => calcSectionHeight(el)} className={styles['burger-ingredients__group-list']} onScroll={(e) => handleScroll(e)}>
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

IngredientsList.propTypes = {
    ingredientsData: PropTypes.arrayOf(INGREDIENTS_OBJECT_TYPE).isRequired,
    handleChangeActiveTab: PropTypes.func.isRequired,
}

export default IngredientsList;
