import React, {FC} from "react";
import styles from "./default-constructor-element.module.css"

interface IDefaultConstructorElement {
    position?: "top" | "bottom";
    children: string;
}

const DefaultConstructorElement: FC<IDefaultConstructorElement> = (props) => {
    const positionClass = props.position === "top" ? "top-element" : props.position === "bottom" ? "bottom-element" : "default-element";

    return (
        <div className={`${styles['constructor-element']} ${styles[positionClass]}`}>
            <p className="text text_type_main-default text_color_inactive">{props.children}</p>
        </div>
    )
}

export default DefaultConstructorElement;
