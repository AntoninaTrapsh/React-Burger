import React, {useEffect, useState} from "react";
import styles from "./burger-ingredients.module.css";
import IngredientsHeader from "./components/ingredients-header/ingredients-header";
import IngredientsNavigation from "./components/ingredients-navigation/ingredients-navigation";
import IngredientsList from "./components/ingredients-list/ingredients-list";
import PropTypes from "prop-types";
import {fetchIngredients} from "../../store/actionCreators/burger-ingredients";
import {useDispatch, useSelector} from "react-redux";
import {selectIngredients} from "../../store/selectors/burger-ingredients";
import {INGREDIENT_TYPES} from "./consts/consts";

const BurgerIngredients = (props) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(INGREDIENT_TYPES.bun);
    const ingredientsData = useSelector(selectIngredients);

    useEffect(() => {
        dispatch(fetchIngredients('ingredients'));
    }, [dispatch])

    const handleChangeActiveTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <section className={`${styles['burger-ingredients']} mr-10`}>
            <IngredientsHeader>Соберите бургер</IngredientsHeader>
            <IngredientsNavigation activeTab={activeTab}/>
            <IngredientsList ingredientsData={ingredientsData} handleIngredientCardOpen={props.handleIngredientCardOpen} handleChangeActiveTab={handleChangeActiveTab}/>
        </section>
    )
}

BurgerIngredients.propTypes = {
    handleIngredientCardOpen: PropTypes.func.isRequired
};

export default BurgerIngredients;
