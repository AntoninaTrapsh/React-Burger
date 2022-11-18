import React, {useEffect} from "react";
import styles from "./burger-ingredients.module.css";
import IngredientsHeader from "./components/ingredients-header/ingredients-header";
import IngredientsNavigation from "./components/ingredients-navigation/ingredients-navigation";
import IngredientsList from "./components/ingredients-list/ingredients-list";
import PropTypes from "prop-types";
import {fetchIngredients} from "../../store/actionCreators/burger-ingredients";
import {useDispatch, useSelector} from "react-redux";
import {selectIngredients} from "../../store/selectors/burger-ingredients";

const BurgerIngredients = (props) => {
    const dispatch = useDispatch();

    const ingredientsData = useSelector(selectIngredients);

    useEffect(() => {
        dispatch(fetchIngredients('ingredients'));
    }, [dispatch])

    return (
        <section className={`${styles['burger-ingredients']} mr-10`}>
            <IngredientsHeader>Соберите бургер</IngredientsHeader>
            <IngredientsNavigation/>
            <IngredientsList ingredientsData={ingredientsData} handleIngredientCardOpen={props.handleIngredientCardOpen}/>
        </section>
    )
}

BurgerIngredients.propTypes = {
    handleIngredientCardOpen: PropTypes.func.isRequired
};

export default BurgerIngredients;
