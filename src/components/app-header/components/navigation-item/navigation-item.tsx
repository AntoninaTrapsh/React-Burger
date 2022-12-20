import styles from "./navigation-item.module.css";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import {TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

interface INavigationItemProps {
    Icon: ({ type }: TIconProps) => JSX.Element;
    isActive: boolean;
    path: string;
    text: string;
}

const NavigationItem: FC<INavigationItemProps> = ({Icon, isActive, path, text}) => {
    return (
        <li className={`${styles['navigation-item']} p-5 text text_type_main-default`}>
            <Link  to={path}>
                <Icon type={isActive ? 'primary' : 'secondary'} />
                <span className={`${isActive ? '' : 'text_color_inactive'} ml-2`}>{text}</span>
            </Link>
        </li>
    );
};

export default NavigationItem;
