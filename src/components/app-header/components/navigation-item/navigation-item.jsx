import styles from "./navigation-item.module.css";
import React from "react";

const NavigationItem = ({Icon, ...props}) => {
    return (
        <li className={`${styles['navigation-item']} p-5 text`}>
            <Icon type={props.isActive ? 'primary' : 'secondary'} />
            <span className={`${props.isActive ? '' : 'text_color_inactive'} ml-2`}>{props.text}</span>
        </li>
    );
};

export default NavigationItem;
