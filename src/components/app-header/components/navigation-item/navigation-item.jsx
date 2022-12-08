import styles from "./navigation-item.module.css";
import React from "react";
import {Link} from "react-router-dom";

const NavigationItem = ({Icon, ...props}) => {
    return (
        <li className={`${styles['navigation-item']} p-5 text text_type_main-default`}>
            <Link  to={props.path}>
                <Icon type={props.isActive ? 'primary' : 'secondary'} />
                <span className={`${props.isActive ? '' : 'text_color_inactive'} ml-2`}>{props.text}</span>
            </Link>
        </li>
    );
};

export default NavigationItem;
