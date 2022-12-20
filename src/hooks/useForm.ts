import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {IDefaultFormValues} from "../utils/interfaces";

interface IUseFormReturnValues {
    values: IDefaultFormValues;
    handleChange: (event: ChangeEvent<HTMLInputElement> ) => void;
    setValues: Dispatch<SetStateAction<IDefaultFormValues>>;
}

export function useForm(inputValues: IDefaultFormValues): IUseFormReturnValues {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}
