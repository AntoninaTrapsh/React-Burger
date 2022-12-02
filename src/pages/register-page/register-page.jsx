import React from "react";
import styles from "./register-page.module.css";
import Form from "../../components/form/form";
import {FORM_TYPES} from "../../utils/consts";
import {Link} from "react-router-dom";

const RegisterPage = () => {

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className={styles['register-page']}>
            <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
            <Form onSumbit={onSubmit} type={FORM_TYPES.REGISTER} buttonTitle="Зарегистрироваться"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Уже зарегистрированы?
                <Link to="" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default RegisterPage;
