import React, {FC, FormEvent} from "react";
import styles from "./forgot-password.module.css";
import AuthForm from "../../components/auth-form/auth-form";
import {FORM_TYPES} from "../../utils/consts";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    selectResetPasswordOnFirstStepStatus,
    selectResetPasswordOnSecondStepStatus
} from "../../services/store/selectors/auth";
import {resetPasswordOnFirstStep} from "../../services/store/actionCreators/auth";
import {IDefaultFormValues} from "../../utils/types";

const ForgotPasswordPage: FC = () => {
    const isFirstStepPassed: boolean = useSelector(selectResetPasswordOnFirstStepStatus);
    const isSecondStepPassed: boolean = useSelector(selectResetPasswordOnSecondStepStatus);
    const dispatch = useDispatch();

    function onSubmit(e: FormEvent<HTMLFormElement>, data: IDefaultFormValues): void {
        // @ts-ignore
        dispatch(resetPasswordOnFirstStep(data));
    }

    if (isFirstStepPassed) {
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
            <AuthForm onSubmit={onSubmit} type={FORM_TYPES.FORGOT_PASSWORD} buttonTitle="Восстановить"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вспомнили пароль?
                <Link to="/login" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default ForgotPasswordPage;
