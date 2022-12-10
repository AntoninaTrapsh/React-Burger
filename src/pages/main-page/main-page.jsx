import React, {useEffect} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import Modal from "../../components/modal/modal";
import OrderDetails from "../../components/order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {selectIngredients} from "../../services/store/selectors/burger-ingredients";
import {selectOrderDetailsState} from "../../services/store/selectors/order-details";
import {closeOrderDetailsModal} from "../../services/store/actionCreators/order-details";

const MainPage = () => {
    const dispatch = useDispatch();
    const ingredientsData = useSelector(selectIngredients);
    const isOrderDetailsOpen = useSelector(selectOrderDetailsState);

    const handleCloseOrderModal = () => {
        dispatch(closeOrderDetailsModal());
    }

    return (
        <div style={{"display":"flex"}}>
            {
                ingredientsData &&
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </DndProvider>
            }
            {
                isOrderDetailsOpen &&
                <Modal handleModalClose={handleCloseOrderModal}>
                    <OrderDetails/>
                </Modal>
            }
        </div>
    )
}

export default MainPage;
