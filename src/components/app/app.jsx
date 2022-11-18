import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../store/actionCreators/burger-ingredients";
import {selectIngredients} from "../../store/selectors/burger-ingredients";
import {closeIngredientDetails, openIngredientDetails} from "../../store/actionCreators/ingredient-details";
import {selectIngredientModalState} from "../../store/selectors/ingredient-details";

function App() {
    const dispatch = useDispatch();
    const ingredientsData = useSelector(selectIngredients);
    const isOpen = useSelector(selectIngredientModalState);

    const handleIngredientCardOpen = (ingredient) => {
        dispatch(openIngredientDetails(ingredient))
    }

    const handleIngredientCardClose = () => {
        dispatch(closeIngredientDetails())
    }

    useEffect(() => {
        dispatch(fetchIngredients('ingredients'));
    }, [dispatch])
    return (
        <div className="App">
            <AppHeader/>
            <main>
                {
                    ingredientsData &&
                    <>
                        <BurgerIngredients handleIngredientCardOpen={handleIngredientCardOpen}/>
                        <BurgerConstructor ingredientsData={ingredientsData} handleIngredientCardOpen={handleIngredientCardOpen} />
                    </>
                }
            </main>
            {
                isOpen &&
                <Modal title="Детали ингредиента" handleModalClose={handleIngredientCardClose}>
                    <IngredientDetails/>
                </Modal>
            }
        </div>
    );
}

export default App;
