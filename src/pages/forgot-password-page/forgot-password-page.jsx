import React from "react";
import styles from "./forgot-password.module.css";
import Form from "../../components/form/form";
import {FORM_TYPES} from "../../utils/consts";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    selectResetPasswordOnFirstStepStatus,
    selectResetPasswordOnSecondStepStatus
} from "../../services/store/selectors/auth";
import {resetPasswordOnFirstStep} from "../../services/store/actionCreators/auth";

const ForgotPasswordPage = () => {
    const isFirstStepPassed = useSelector(selectResetPasswordOnFirstStepStatus);
    const isSecondStepPassed = useSelector(selectResetPasswordOnSecondStepStatus);
    const dispatch = useDispatch();

    function onSubmit(e, data) {
        dispatch(resetPasswordOnFirstStep(data));
    }

    if (isFirstStepPassed && !isSecondStepPassed) {
        return (
            <Redirect
                to="/reset-password"
            />
        )
    }

    if (isSecondStepPassed) {
        return (
            <Redirect
                to="/login"
            />
        )
    }

    return (
        <section className={styles['forgot-password-page']}>
            <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
            <Form onSubmit={onSubmit} type={FORM_TYPES.FORGOT_PASSWORD} buttonTitle="Восстановить"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вспомнили пароль?
                <Link to="/login" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default ForgotPasswordPage;
