import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {BUN_TYPES} from "../../consts/consts";
import styles from "./bun.module.css"

const Bun = (props) => {
    return (
        <div className={`${styles['bun__wrapper']} ml-8`} onClick={() => props.handleIngredientCardOpen(props.data)}>
            <ConstructorElement
                type={props.position}
                isLocked={true}
                text={`${props.data.name} (${BUN_TYPES[props.position]})`}
                thumbnail={props.data.image}
                price={props.data.price}
            />
        </div>
    )
}

export default Bun;
