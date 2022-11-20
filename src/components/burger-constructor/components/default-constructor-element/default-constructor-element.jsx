import React from "react";
import styles from "./default-constructor-element.module.css"
import PropTypes from "prop-types";

const DefaultConstructorElement = (props) => {
    const positionClass = props.position === "top" ? "top-element" : props.position === "bottom" ? "bottom-element" : "default-element";

    return (
        <div className={`${styles['constructor-element']} ${styles[positionClass]}`}>
            <p className="text text_type_main-default text_color_inactive">{props.children}</p>
        </div>
    )
}

DefaultConstructorElement.propTypes = {
    position: PropTypes.string,
    children: PropTypes.string.isRequired,
}

export default DefaultConstructorElement;
