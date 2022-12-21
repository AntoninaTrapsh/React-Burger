import React, {FC, FormEvent} from "react";
import styles from "./register-page.module.css";
import AuthForm from "../../components/auth-form/auth-form";
import {FORM_TYPES} from "../../utils/consts";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchUserRegistration} from "../../services/store/actionCreators/auth";
import {IDefaultFormValues} from "../../utils/interfaces";

const RegisterPage: FC = () => {
    const dispatch = useDispatch();

    function onSubmit(e: FormEvent<HTMLFormElement>, data: IDefaultFormValues): void {
        // @ts-ignore
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
