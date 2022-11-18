import React from "react";
import styles from "./default-constructor-element.module.css"

const DefaultConstructorElement = (props) => {
    const positionClass = props.position === "top" ? "top-element" : props.type === "bottom" ? "bottom-element" : "default-element";

    return (
        <div className={`${styles['constructor-element']} ${styles[positionClass]}`}>
            <p className="text text_type_main-default text_color_inactive">{props.children}</p>
        </div>
    )
}

export default DefaultConstructorElement;
