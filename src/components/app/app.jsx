import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"
import IngredientsClient from "../../services/ingredients-client";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function App() {
    const [ingredientsData, setIngredientsData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIngredient, setSelectedIngredient] = useState({})

    const handleIngredientCardOpen = (ingredient) => {
        setIsOpen(true);
        setSelectedIngredient(ingredient);
    }

    const handleIngredientCardClose = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        IngredientsClient.getIngredients('ingredients').then((data) => {
            setIngredientsData(data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <div className="App">
            <AppHeader/>
            <main>
                {
                    !!ingredientsData.length &&
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
