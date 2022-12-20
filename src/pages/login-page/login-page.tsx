import React, {FC, FormEvent} from "react";
import AuthForm from "../../components/auth-form/auth-form";
import {Link} from "react-router-dom";
import styles from "./login-page.module.css";
import {FORM_TYPES} from "../../utils/consts";
import {useDispatch} from "react-redux";
import {fetchUserLogin} from "../../services/store/actionCreators/auth";
import {IDefaultFormValues} from "../../utils/interfaces";

const LoginPage: FC = () => {
    const dispatch = useDispatch();

    function onSubmit(e: FormEvent<HTMLFormElement>, userData: IDefaultFormValues) {
        // @ts-ignore
        dispatch(fetchUserLogin("login", userData))
    }

    return (
        <section className={styles['login-page']}>
            <h2 className="text text_type_main-medium mb-6">Вход</h2>
            <AuthForm onSubmit={onSubmit} type={FORM_TYPES.SIGN_IN} buttonTitle="Войти"/>
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
