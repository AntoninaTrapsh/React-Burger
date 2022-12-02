import React from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import {FORM_TYPES, INPUT_SETTINGS} from "../../utils/consts";

const Form = ({type, onSubmit, buttonTitle}) => {

    const INITIAL_FORM_VALUES = {
        email: '',
        password: '',
        name: '',
    }

    const INPUT_CONDITIONS = {
        EMAIL_CONDITIONS: type === FORM_TYPES.SIGN_IN || type === FORM_TYPES.REGISTER || type === FORM_TYPES.FORGOT_PASSWORD,
        PASSWORD_CONDITIONS: type === FORM_TYPES.SIGN_IN || type === FORM_TYPES.REGISTER,
        NAME_CONDITIONS: type === FORM_TYPES.REGISTER,
        RESTORE_CONDITIONS: type === FORM_TYPES.FORGOT_PASSWORD,
    }

    const EMAIL_PLACEHOLDER = type === FORM_TYPES.FORGOT_PASSWORD ? INPUT_SETTINGS.PLACEHOLDER.RESTORE : INPUT_SETTINGS.PLACEHOLDER.EMAIL;

    const [formValue, setFormValue] = React.useState(INITIAL_FORM_VALUES);

    function onFormChange(e) {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    return (
            <form className={styles.form} onSubmit={onSubmit}>
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
                            value={formValue.password}
                            name={INPUT_SETTINGS.NAME.PASSWORD}
                            onChange={onFormChange}
                        />
                    </div>
                }
                <Button htmlType="submit" type="primary" size="large">{buttonTitle}</Button>
            </form>
    )
}

export default Form;
