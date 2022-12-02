import React from "react";
import Form from "../../components/form/form";
import {Link} from "react-router-dom";
import styles from "./login-page.module.css";
import {FORM_TYPES} from "../../utils/consts";

const LoginPage = () => {

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className={styles['login-page']}>
            <h2 className="text text_type_main-medium mb-6">Вход</h2>
            <Form onSumbit={onSubmit} type={FORM_TYPES.SIGN_IN} buttonTitle="Войти"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вы — новый пользователь?
                <Link to="" className={styles['link']}> Зарегистрироваться</Link>
            </p>

            <p className="text text_type_main-default text_color_inactive mt-4">
                Забыли пароль?
                <Link to="" className={styles['link']}> Восстановить пароль</Link>
            </p>
        </section>
    )
}

export default LoginPage;
