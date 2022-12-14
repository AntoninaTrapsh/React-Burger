import React from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./auth-form.module.css";
import {FORM_TYPES, INPUT_SETTINGS} from "../../utils/consts";
import PropTypes from "prop-types";
import {useForm} from "../../hooks/useForm";

const AuthForm = ({type, onSubmit, buttonTitle}) => {

    const initialFormValues = {
        name: "",
        email: "",
        password: "",
        code: "",
    }

    const {values, handleChange} = useForm(initialFormValues);

    const INPUT_CONDITIONS = {
        EMAIL_CONDITIONS: type === FORM_TYPES.SIGN_IN || type === FORM_TYPES.REGISTER || type === FORM_TYPES.FORGOT_PASSWORD,
        PASSWORD_CONDITIONS: type === FORM_TYPES.SIGN_IN || type === FORM_TYPES.REGISTER || type === FORM_TYPES.RESET_PASSWORD,
        NAME_CONDITIONS: type === FORM_TYPES.REGISTER,
        RESTORE_CONDITIONS: type === FORM_TYPES.FORGOT_PASSWORD,
        RESET_PASSWORD_CONDITIONS: type === FORM_TYPES.RESET_PASSWORD,
    }

    const EMAIL_PLACEHOLDER = type === FORM_TYPES.FORGOT_PASSWORD ? INPUT_SETTINGS.PLACEHOLDER.RESTORE : INPUT_SETTINGS.PLACEHOLDER.EMAIL;
    const PASSWORD_PLACEHOLDER = type === FORM_TYPES.RESET_PASSWORD ? INPUT_SETTINGS.PLACEHOLDER.NEW_PASSWORD : INPUT_SETTINGS.PLACEHOLDER.PASSWORD;

    return (
            <form className={styles.form} onSubmit={(e) => {e.preventDefault(); onSubmit(e, values)}}>
                {
                    INPUT_CONDITIONS.NAME_CONDITIONS &&
                    <div className="mb-6">
                        <Input
                            type={INPUT_SETTINGS.TYPE.TEXT}
                            placeholder={INPUT_SETTINGS.PLACEHOLDER.NAME}
                            name={INPUT_SETTINGS.NAME.NAME}
                            onChange={handleChange}
                            value={values.name}
                        />
                    </div>
                }
                {
                    INPUT_CONDITIONS.EMAIL_CONDITIONS &&
                    <div className="mb-6">
                        <Input
                            type={INPUT_SETTINGS.TYPE.EMAIL}
                            placeholder={EMAIL_PLACEHOLDER}
                            name={INPUT_SETTINGS.NAME.EMAIL}
                            onChange={handleChange}
                            value={values.email}
                        />
                    </div>
                }
                {
                    INPUT_CONDITIONS.PASSWORD_CONDITIONS &&
                    <div className="mb-6">
                        <PasswordInput
                            placeholder={PASSWORD_PLACEHOLDER}
                            name={INPUT_SETTINGS.NAME.PASSWORD}
                            onChange={handleChange}
                            value={values.password}
                        />
                    </div>
                }
                {
                    INPUT_CONDITIONS.RESET_PASSWORD_CONDITIONS &&
                    <div className="mb-6">
                        <Input
                            type={INPUT_SETTINGS.TYPE.TEXT}
                            placeholder={INPUT_SETTINGS.PLACEHOLDER.CODE}
                            name={INPUT_SETTINGS.NAME.CODE}
                            onChange={handleChange}
                            value={values.code}
                        />
                    </div>
                }
                <Button htmlType="submit" type="primary" size="large">{buttonTitle}</Button>
            </form>
    )
}

AuthForm.propTypes = {
    type: PropTypes.string,
    onSubmit: PropTypes.func,
    buttonTitle: PropTypes.string,
}

export default AuthForm;
