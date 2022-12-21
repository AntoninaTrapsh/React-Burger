import React, {FC, FormEvent, useState} from "react";
import {INPUT_SETTINGS} from "../../../../utils/consts";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import styles from "./profile-editing.module.css";
import {selectUserInfo} from "../../../../services/store/selectors/auth";
import {changeUserInfo} from "../../../../services/store/actionCreators/auth";
import {IDefaultFormValues, IUserInfo, TInputTypes} from "../../../../utils/types";

const ProfileEditing: FC = () => {
    const dispatch = useDispatch();
    const user: IUserInfo = useSelector(selectUserInfo);

    const initialFormValues: IDefaultFormValues = {
        name: user.name,
        email: user.email,
        password: user.password || "",
    }

    const [formValue, setFormValue] = useState(initialFormValues);
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

    return (
        <section>
            <form className={styles['profile-editing__form']} onSubmit={onSubmit}>
                <div className="mb-6">
                    <Input
                        type={INPUT_SETTINGS.TYPE.TEXT as TInputTypes}
                        placeholder={INPUT_SETTINGS.PLACEHOLDER.NAME}
                        name={INPUT_SETTINGS.NAME.NAME}
                        icon={"EditIcon"}
                        onChange={onFormChange}
                        value={formValue.name}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        type={INPUT_SETTINGS.TYPE.EMAIL as TInputTypes}
                        placeholder={INPUT_SETTINGS.PLACEHOLDER.EMAIL}
                        name={INPUT_SETTINGS.NAME.EMAIL}
                        icon={"EditIcon"}
                        onChange={onFormChange}
                        value={formValue.email}
                    />
                </div>
                <div className="mb-6">
                    <PasswordInput
                        name={INPUT_SETTINGS.NAME.PASSWORD}
                        icon={"EditIcon"}
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
