import React, {useEffect} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import OrderDetails from "../../components/order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {selectIngredients} from "../../services/store/selectors/burger-ingredients";
import {selectIngredientModalState} from "../../services/store/selectors/ingredient-details";
import {selectOrderDetailsState} from "../../services/store/selectors/order-details";
import {closeIngredientDetails} from "../../services/store/actionCreators/ingredient-details";
import {closeOrderDetailsModal} from "../../services/store/actionCreators/order-details";
import {fetchIngredients} from "../../services/store/actionCreators/burger-ingredients";

const MainPage = () => {
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
        <>
            {
                ingredientsData &&
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </DndProvider>
            }
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
        </>
    )
}

export default MainPage;
