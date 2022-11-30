import React from 'react';
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

function App() {
    return (
        <div className="App">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route path="/" exact={true}>
                            <MainPage/>
                        </Route>
                        <Route path="/login" exact={true}>
                            <LoginPage />
                        </Route>
                        <Route path="/register" exact={true}>
                            <RegisterPage/>
                        </Route>
                        <Route path="/forgot-password" exact={true}>
                            <ForgotPasswordPage/>
                        </Route>
                        <Route path="/reset-password" exact={true}>
                            <ResetPasswordPage/>
                        </Route>
                        <ProtectedRoute path="/profile" exact={true}>
                            <ProfilePage/>
                        </ProtectedRoute>
                        <Route path="/ingredients/:id" exact={true}>
                            <IngredientsPage/>
                        </Route>
                    </Switch>
                </main>
        </div>
    );
}

export default App;
