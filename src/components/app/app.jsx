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
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {selectOrderDetailsState} from "../../store/selectors/order-details";
import OrderDetails from "../order-details/order-details";
import {closeOrderDetailsModal} from "../../store/actionCreators/order-details";

function App() {
    const dispatch = useDispatch();
    const ingredientsData = useSelector(selectIngredients);
    const isIngredientCardOpen = useSelector(selectIngredientModalState);
    const isOrderDetailsOpen = useSelector(selectOrderDetailsState);

    const handleIngredientCardOpen = (ingredient) => {
        dispatch(openIngredientDetails(ingredient))
    }

    const handleIngredientCardClose = () => {
        dispatch(closeIngredientDetails())
    }

    const handleCloseOrderModal = () => {
        dispatch(closeOrderDetailsModal());
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
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients handleIngredientCardOpen={handleIngredientCardOpen}/>
                        <BurgerConstructor ingredientsData={ingredientsData} handleIngredientCardOpen={handleIngredientCardOpen} />
                    </DndProvider>
                    </>
                }
            </main>
            {
                isIngredientCardOpen &&
                <Modal title="Детали ингредиента" handleModalClose={handleIngredientCardClose}>
                    <IngredientDetails/>
                </Modal>
            }
            {
                isOrderDetailsOpen &&
                (<Modal handleModalClose={handleCloseOrderModal}>
                    <OrderDetails/>
                </Modal>)
            }
        </div>
    );
}

export default App;
