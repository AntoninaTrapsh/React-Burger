import React, {FC, FormEvent} from "react";
import styles from "../login-page/login-page.module.css";
import AuthForm from "../../components/auth-form/auth-form";
import {FORM_TYPES} from "../../utils/consts";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordOnSecondStep} from "../../services/store/actionCreators/auth";
import {
    selectResetPasswordOnFirstStepStatus,
    selectResetPasswordOnSecondStepStatus
} from "../../services/store/selectors/auth";
import {IDefaultFormValues} from "../../utils/types";

const ResetPasswordPage: FC = () => {
    const dispatch = useDispatch();
    const isFirstStepPassed: boolean = useSelector(selectResetPasswordOnFirstStepStatus);
    const isSecondStepPassed: boolean = useSelector(selectResetPasswordOnSecondStepStatus);

    function onSubmit(e: FormEvent<HTMLFormElement>, data: IDefaultFormValues): void {
        // @ts-ignore
        dispatch(resetPasswordOnSecondStep(data));
    }

    if (!isFirstStepPassed) {
        return (
            <Redirect
                to="/forgot-password"
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
        <section className={styles['login-page']}>
            <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
            <AuthForm onSubmit={onSubmit} type={FORM_TYPES.RESET_PASSWORD} buttonTitle="Сохранить"/>
            <p className="text text_type_main-default text_color_inactive mt-20">
                Вспомнили пароль?
                <Link to="/login" className={styles['link']}> Войти</Link>
            </p>
        </section>
    )
}

export default ResetPasswordPage;
