import React from "react";
import styles from "./register-page.module.css";
import Form from "../../components/form/form";
import {FORM_TYPES} from "../../utils/consts";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchUserRegistration} from "../../services/store/actionCreators/auth";

const RegisterPage = () => {
    const dispatch = useDispatch();

    function onSubmit(e, data) {
        dispatch(fetchUserRegistration("register", data));
        console.log(1);
    }

    return (
        <section className={styles['register-page']}>
            <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
            <Form onSubmit={onSubmit} type={FORM_TYPES.REGISTER} buttonTitle="Зарегистрироваться"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Уже зарегистрированы?
                <Link to="" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default RegisterPage;
