import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
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
import {useHistory, useLocation} from "react-router-dom/cjs/react-router-dom";
import Modal from "../modal/modal";
import {closeIngredientDetails} from "../../services/store/actionCreators/ingredient-details";
import {useDispatch} from "react-redux";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {fetchIngredients} from "../../services/store/actionCreators/burger-ingredients";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const background = location.state && location.state.background;

    useEffect(() => {
        dispatch(fetchIngredients('ingredients'));
    }, [dispatch]);

    const handleIngredientCardClose = () => {
        dispatch(closeIngredientDetails());
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

                        <ProtectedRoute path="/profile" exact={true}>
                            <ProfilePage/>
                        </ProtectedRoute>

                        <Route path="/ingredients/:ingredientId" exact={true}>
                            <IngredientsPage/>
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
