import {ChangeEvent, FormEvent, useState} from "react";
import {IDefaultFormValues} from "../utils/interfaces";

export function useForm(inputValues: IDefaultFormValues) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}
