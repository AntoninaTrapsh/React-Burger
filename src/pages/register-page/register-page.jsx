import React from "react";
import styles from "./register-page.module.css";
import AuthForm from "../../components/auth-form/auth-form";
import {FORM_TYPES} from "../../utils/consts";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchUserRegistration} from "../../services/store/actionCreators/auth";

const RegisterPage = () => {
    const dispatch = useDispatch();

    function onSubmit(e, data) {
        dispatch(fetchUserRegistration(data));
    }

    return (
        <section className={styles['register-page']}>
            <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
            <AuthForm onSubmit={onSubmit} type={FORM_TYPES.REGISTER} buttonTitle="Зарегистрироваться"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Уже зарегистрированы?
                <Link to="/login" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default RegisterPage;
