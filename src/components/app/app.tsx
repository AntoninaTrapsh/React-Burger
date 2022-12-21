import React, {useEffect} from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import AppHeader from "../app-header/app-header";
import "./app.module.css"
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import RegisterPage from "../../pages/register-page/register-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import IngredientsPage from "../../pages/ingredients-page/ingredients-page";
import {ProtectedRoute} from "../protected-route/protected-route";
import Modal from "../modal/modal";
import {useDispatch} from "react-redux";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {fetchIngredients} from "../../services/store/actionCreators/burger-ingredients";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import ProfileOrders from "../profile/components/profile-orders/profile-orders";
import {TModalState} from "../../utils/types";

function App(): JSX.Element {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation<TModalState>();
    const background = location.state && location.state.background;

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchIngredients('/ingredients'));
    }, [dispatch]);

    const handleIngredientCardClose = () => {
        history.goBack();
    }

    return (
        <div className="App">
                <AppHeader/>
                <main>
                    <Switch location={background || location}>
                        <Route path="/" exact={true}>
                            <MainPage/>
                        </Route>

                        <ProtectedRoute authPage path="/login" exact={true}>
                            <LoginPage />
                        </ProtectedRoute>
                        <ProtectedRoute authPage path="/register" exact={true}>
                            <RegisterPage/>
                        </ProtectedRoute>

                        <ProtectedRoute authPage path="/forgot-password" exact={true}>
                            <ForgotPasswordPage/>
                        </ProtectedRoute>
                        <ProtectedRoute authPage path="/reset-password" exact={true}>
                            <ResetPasswordPage/>
                        </ProtectedRoute>

                        <ProtectedRoute path="/profile">
                            <ProfilePage/>
                        </ProtectedRoute>

                        <Route path="/ingredients/:ingredientId" exact={true}>
                            <IngredientsPage/>
                        </Route>

                        <ProtectedRoute path="/orders">
                            <ProfileOrders/>
                        </ProtectedRoute>

                        <Route>
                            <NotFoundPage/>
                        </Route>
                    </Switch>

                    {background && (
                        <Route
                            path='/ingredients/:ingredientId'
                            children={
                                <Modal title="Детали ингредиента" handleModalClose={handleIngredientCardClose}>
                                    <IngredientDetails/>
                                </Modal>
                            }
                        />
                    )}

                </main>
        </div>
    );
}

export default App;
