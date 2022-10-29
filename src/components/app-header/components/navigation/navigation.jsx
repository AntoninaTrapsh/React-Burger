import styles from "./navigation.module.css";
import NavigationItem from "../navigation-item/navigation-item";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const Navigation = () => {
    return (
        <nav>
            <ul className={`${styles['header__navigation']} pt-4 pb-4`}>
                <NavigationItem
                    isActive={true}
                    Icon={BurgerIcon}
                    text="Конструктор"
                />
                <NavigationItem
                    Icon={ListIcon}
                    isActive={false}
                    text="Лента заказов"
                />
                <Logo />
                <NavigationItem
                    Icon={ProfileIcon}
                    isActive={false}
                    text="Личный кабинет"
                />
            </ul>
        </nav>
    )
}

export default Navigation;
