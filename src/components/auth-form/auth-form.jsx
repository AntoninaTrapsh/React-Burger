import React from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./auth-form.module.css";
import {FORM_TYPES, INPUT_SETTINGS} from "../../utils/consts";

const AuthForm = ({type, onSubmit, buttonTitle}) => {

    const initialFormValues = {
        name: "",
        email: "",
        password: "",
        code: "",
    }

    const INPUT_CONDITIONS = {
        EMAIL_CONDITIONS: type === FORM_TYPES.SIGN_IN || type === FORM_TYPES.REGISTER || type === FORM_TYPES.FORGOT_PASSWORD,
        PASSWORD_CONDITIONS: type === FORM_TYPES.SIGN_IN || type === FORM_TYPES.REGISTER || type === FORM_TYPES.RESET_PASSWORD,
        NAME_CONDITIONS: type === FORM_TYPES.REGISTER,
        RESTORE_CONDITIONS: type === FORM_TYPES.FORGOT_PASSWORD,
        RESET_PASSWORD_CONDITIONS: type === FORM_TYPES.RESET_PASSWORD,
    }

    const EMAIL_PLACEHOLDER = type === FORM_TYPES.FORGOT_PASSWORD ? INPUT_SETTINGS.PLACEHOLDER.RESTORE : INPUT_SETTINGS.PLACEHOLDER.EMAIL;
    const PASSWORD_PLACEHOLDER = type === FORM_TYPES.RESET_PASSWORD ? INPUT_SETTINGS.PLACEHOLDER.NEW_PASSWORD : INPUT_SETTINGS.PLACEHOLDER.PASSWORD;

    const [formValue, setFormValue] = React.useState(initialFormValues);

    const onFormChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    return (
            <form className={styles.form} onSubmit={(e) => {e.preventDefault(); onSubmit(e, formValue)}}>
                {
                    INPUT_CONDITIONS.NAME_CONDITIONS &&
                    <div className="mb-6">
                        <Input
                            type={INPUT_SETTINGS.TYPE.TEXT}
                            placeholder={INPUT_SETTINGS.PLACEHOLDER.NAME}
                            name={INPUT_SETTINGS.NAME.NAME}
                            onChange={onFormChange}
                            value={formValue.name}
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
                            onChange={onFormChange}
                            value={formValue.email}
                        />
                    </div>
                }
                {
                    INPUT_CONDITIONS.PASSWORD_CONDITIONS &&
                    <div className="mb-6">
                        <PasswordInput
                            placeholder={PASSWORD_PLACEHOLDER}
                            name={INPUT_SETTINGS.NAME.PASSWORD}
                            onChange={onFormChange}
                            value={formValue.password}
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
                            onChange={onFormChange}
                            value={formValue.code}
                        />
                    </div>
                }
                <Button htmlType="submit" type="primary" size="large">{buttonTitle}</Button>
            </form>
    )
}

export default AuthForm;
