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

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIngredient, setSelectedIngredient] = useState({});

    const ingredientsData = useSelector(selectIngredients);

    const dispatch = useDispatch();

    const handleIngredientCardOpen = (ingredient) => {
        setIsOpen(true);
        setSelectedIngredient(ingredient);
    }

    const handleIngredientCardClose = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        dispatch(fetchIngredients('ingredients'));
    }, [])
    return (
        <div className="App">
            <AppHeader/>
            <main>
                {
                    ingredientsData &&
                    <>
                        <BurgerIngredients ingredientsData={ingredientsData} handleIngredientCardOpen={handleIngredientCardOpen}/>
                        <BurgerConstructor ingredientsData={ingredientsData} handleIngredientCardOpen={handleIngredientCardOpen} />
                    </>
                }
            </main>
            {
                isOpen &&
                <Modal title="Детали ингредиента" handleModalClose={handleIngredientCardClose}>
                    <IngredientDetails ingredient={selectedIngredient}/>
                </Modal>
            }
        </div>
    );
}

export default App;
