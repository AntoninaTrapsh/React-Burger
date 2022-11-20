import React, {useEffect} from 'react';
import AppHeader from "../app-header/app-header";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import "./app.module.css"
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {selectIngredients} from "../../services/store/selectors/burger-ingredients";
import {closeIngredientDetails} from "../../services/store/actionCreators/ingredient-details";
import {selectIngredientModalState} from "../../services/store/selectors/ingredient-details";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {selectOrderDetailsState} from "../../services/store/selectors/order-details";
import OrderDetails from "../order-details/order-details";
import {closeOrderDetailsModal} from "../../services/store/actionCreators/order-details";
import {fetchIngredients} from "../../services/store/actionCreators/burger-ingredients";

function App() {
    const dispatch = useDispatch();
    const ingredientsData = useSelector(selectIngredients);
    const isIngredientCardOpen = useSelector(selectIngredientModalState);
    const isOrderDetailsOpen = useSelector(selectOrderDetailsState);

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
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients/>
                        <BurgerConstructor/>
                    </DndProvider>
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
                <Modal handleModalClose={handleCloseOrderModal}>
                    <OrderDetails/>
                </Modal>
            }
        </div>
    );
}

export default App;
