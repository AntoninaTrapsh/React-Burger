import React from "react";
import Form from "../../components/form/form";
import {Link} from "react-router-dom";
import styles from "./login-page.module.css";
import {FORM_TYPES} from "../../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserLogin} from "../../services/store/actionCreators/auth";
import {selectAuthInfo} from "../../services/store/selectors/auth";
import { Redirect } from 'react-router-dom';
import {useLocation} from "react-router-dom/cjs/react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectAuthInfo);
    const location = useLocation();

    console.log("L", location);

    function onSubmit(e, userData) {
        dispatch(fetchUserLogin("login", userData))
    }

    if (isAuth) {
        return (
            <Redirect
                to={ location.state?.from || '/' }
            />
        );
    }

    return (
        <section className={styles['login-page']}>
            <h2 className="text text_type_main-medium mb-6">Вход</h2>
            <Form onSumbit={onSubmit} type={FORM_TYPES.SIGN_IN} buttonTitle="Войти"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вы — новый пользователь?
                <Link to="/register" className={styles['link']}> Зарегистрироваться</Link>
            </p>

            <p className="text text_type_main-default text_color_inactive mt-4">
                Забыли пароль?
                <Link to="/forgot-password" className={styles['link']}> Восстановить пароль</Link>
            </p>
        </section>
    )
}

export default LoginPage;
