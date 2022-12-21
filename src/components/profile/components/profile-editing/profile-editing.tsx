import React, {FC, FormEvent, useState} from "react";
import {INPUT_SETTINGS} from "../../../../utils/consts";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import styles from "./profile-editing.module.css";
import {selectUserInfo} from "../../../../services/store/selectors/auth";
import {changeUserInfo} from "../../../../services/store/actionCreators/auth";
import {IDefaultFormValues, IFocusedFormValues, IUserInfo, TInputTypes} from "../../../../utils/types";

const ProfileEditing: FC = () => {
    const dispatch = useDispatch();
    const user: IUserInfo = useSelector(selectUserInfo);

    const initialFormValues: IDefaultFormValues = {
        name: user.name,
        email: user.email,
        password: user.password || "",
    }

    const initialFocusInputs: IFocusedFormValues = {
        name: false,
        email: false,
        password: false,
    }

    const [formValue, setFormValue] = useState(initialFormValues);
    const [focusInputs, setFocusInputs] = useState<IFocusedFormValues>(initialFocusInputs);
    const [isControlSubmitDisplayed, setIsControlSubmitDisplayed] = useState(false);

    const isEmptyFormValue = !formValue.name.trim() || !formValue.email || !formValue.password;
    let isChanged = formValue.name !== user.name || formValue.email !== user.email || formValue.password !== user.password;

    const isValidForm = !isEmptyFormValue && isChanged;

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // @ts-ignore
        dispatch(changeUserInfo(formValue));
        setIsControlSubmitDisplayed(false);
    }

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement>): void  =>{
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
        setIsControlSubmitDisplayed(true);
    }

    const onCancel = (): void => {
        setFormValue({
            ...initialFormValues,
        });
        setIsControlSubmitDisplayed(false);
    }

    const onFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
        setFocusInputs({
            ...focusInputs,
            [(e.target.name)]: true
        });
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
        setFocusInputs({
            ...focusInputs,
            [e.target.name]: false
        });
    }

    return (
        <section>
            <form className={styles['profile-editing__form']} onSubmit={onSubmit}>
                <div className="mb-6">
                    <Input
                        type={INPUT_SETTINGS.TYPE.TEXT as TInputTypes}
                        placeholder={INPUT_SETTINGS.PLACEHOLDER.NAME}
                        name={INPUT_SETTINGS.NAME.NAME}
                        icon={focusInputs.name ? "HideIcon" : "EditIcon"}
                        onChange={onFormChange}
                        value={formValue.name}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        type={INPUT_SETTINGS.TYPE.EMAIL as TInputTypes}
                        placeholder={INPUT_SETTINGS.PLACEHOLDER.EMAIL}
                        name={INPUT_SETTINGS.NAME.EMAIL}
                        icon={focusInputs.email ? "HideIcon" : "EditIcon"}
                        onChange={onFormChange}
                        value={formValue.email}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </div>
                <div className="mb-6">
                    <PasswordInput
                        name={INPUT_SETTINGS.NAME.PASSWORD}
                        icon={focusInputs.password ? "HideIcon" : "EditIcon"}
                        onChange={onFormChange}
                        value={formValue.password}
                    />
                </div>
                {
                    isControlSubmitDisplayed &&
                    <div className={styles['control']}>
                        <Button htmlType="reset" type="secondary" size="large" onClick={onCancel}>Отмена</Button>
                        <Button htmlType="submit" type="primary" size="large" disabled={!isValidForm}>Сохранить</Button>
                    </div>
                }
            </form>
        </section>
    )
}

export default ProfileEditing;
