import React from "react";
import styles from "../login-page/login-page.module.css";
import Form from "../../components/form/form";
import {FORM_TYPES} from "../../utils/consts";
import {Link} from "react-router-dom";

const ResetPasswordPage = () => {
    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className={styles['login-page']}>
            <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
            <Form onSumbit={onSubmit} type={FORM_TYPES.RESET_PASSWORD} buttonTitle="Сохранить"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вспомнили пароль?
                <Link to="" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default ResetPasswordPage;
