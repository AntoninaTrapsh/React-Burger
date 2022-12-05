import React from "react";
import styles from "./forgot-password.module.css";
import Form from "../../components/form/form";
import {FORM_TYPES} from "../../utils/consts";
import {Link} from "react-router-dom";

const ForgotPasswordPage = () => {
    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className={styles['forgot-password-page']}>
            <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
            <Form onSumbit={onSubmit} type={FORM_TYPES.FORGOT_PASSWORD} buttonTitle="Восстановить"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вспомнили пароль?
                <Link to="/login" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default ForgotPasswordPage;
