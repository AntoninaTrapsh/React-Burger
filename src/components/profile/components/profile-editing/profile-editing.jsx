import React, {useState} from "react";
import {INPUT_SETTINGS} from "../../../../utils/consts";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import styles from "./profile-editing.module.css";
import {selectUserInfo} from "../../../../services/store/selectors/auth";

const ProfileEditing = () => {
    const user = useSelector(selectUserInfo);

    const initialFormValues = {
        name: user.name,
        email: user.email,
        password: user.password,
    }

    const initialFocusInputs = Object.keys(initialFormValues).reduce((obj, input) => {
        obj[input] = false;
        return obj;
    }, {})

    const [formValue, setFormValue] = useState(initialFormValues);
    const [focusInputs, setFocusInputs] = useState(initialFocusInputs);

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onFormChange = (e)  =>{
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    const onCancel = () => {
        setFormValue({
            ...initialFormValues,
        });
    }

    const onFocus = (e) => {
        setFocusInputs({
            ...focusInputs,
            [e.target.name]: true
        });
    }

    const onBlur = (e) => {
        setFocusInputs({
            ...focusInputs,
            [e.target.name]: false
        });
    }

    const onIconClick = (e) => {
        if (focusInputs[e.target.name]) {
            setFormValue({
                ...initialFormValues,
            });
        }
    }

    return (
        <section>
            <form className={styles['profile-editing__form']} onSubmit={onSubmit}>
                <div className="mb-6">
                    <Input
                        type={INPUT_SETTINGS.TYPE.TEXT}
                        placeholder={INPUT_SETTINGS.PLACEHOLDER.NAME}
                        name={INPUT_SETTINGS.NAME.NAME}
                        icon={focusInputs.name ? "CloseIcon" : "EditIcon"}
                        onChange={onFormChange}
                        value={formValue.name}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onIconClick={onIconClick}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        type={INPUT_SETTINGS.TYPE.EMAIL}
                        placeholder={INPUT_SETTINGS.PLACEHOLDER.EMAIL}
                        name={INPUT_SETTINGS.NAME.EMAIL}
                        icon={focusInputs.email ? "CloseIcon" : "EditIcon"}
                        onChange={onFormChange}
                        value={formValue.email}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onIconClick={onIconClick}
                    />
                </div>
                <div className="mb-6">
                    <PasswordInput
                        name={INPUT_SETTINGS.NAME.PASSWORD}
                        icon={focusInputs.password ? "CloseIcon" : "EditIcon"}
                        onChange={onFormChange}
                        value={formValue.password}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onIconClick={onIconClick}
                    />
                </div>
                <div className={styles['control']}>
                    <Button htmlType="reset" type="secondary" size="large" onClick={onCancel}>Отмена</Button>
                    <Button htmlType="submit" type="primary" size="large">Сохранить</Button>
                </div>
            </form>
        </section>
    )
}

export default ProfileEditing;
