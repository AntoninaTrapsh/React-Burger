import React from "react";
import styles from "../login-page/login-page.module.css";
import Form from "../../components/form/form";
import {FORM_TYPES} from "../../utils/consts";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordOnSecondStep} from "../../services/store/actionCreators/auth";
import {
    selectResetPasswordOnFirstStepStatus,
    selectResetPasswordOnSecondStepStatus
} from "../../services/store/selectors/auth";

const ResetPasswordPage = () => {
    const dispatch = useDispatch();
    const isFirstStepPassed = useSelector(selectResetPasswordOnFirstStepStatus);
    const isSecondStepPassed = useSelector(selectResetPasswordOnSecondStepStatus);

    function onSubmit(e, data) {
        dispatch(resetPasswordOnSecondStep(data));
    }

    if (!isFirstStepPassed || isSecondStepPassed) {
        return (
            <Redirect
                to="/login"
            />
        )
    }

    return (
        <section className={styles['login-page']}>
            <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
            <Form onSubmit={onSubmit} type={FORM_TYPES.RESET_PASSWORD} buttonTitle="Сохранить"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вспомнили пароль?
                <Link to="/login" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default ResetPasswordPage;
