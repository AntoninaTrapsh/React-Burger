import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {BUN_TYPES} from "../../consts/consts";
import styles from "./bun.module.css"
import DefaultConstructorElement from "../default-constructor-element/default-constructor-element";

const Bun = (props) => {
    return (
        <div className={`${styles['bun__wrapper']} ml-8 pt-4 pb-4`} onClick={() => {
            if (!props.data) {
                return
            }
            props.handleIngredientCardOpen(props.data)
        }}>
            {
                props.data ?
                    <ConstructorElement
                        type={props.position}
                        isLocked={true}
                        text={`${props.data.name} (${BUN_TYPES[props.position]})`}
                        thumbnail={props.data.image}
                        price={props.data.price}
                    /> :
                    <DefaultConstructorElement position={props.position}>Выберите булочку</DefaultConstructorElement>

            }
        </div>
    )
}

export default Bun;
