import styles from "./navigation.module.css";
import NavigationItem from "../navigation-item/navigation-item";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const Navigation = () => {
    return (
        <nav>
            <ul className={`${styles['navigation']} pt-4 pb-4`}>
                <div className={`${styles['navigation__order']}`}>
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
                </div>
                <div className={`${styles.navigation__logo}`}>
                    <Logo />
                </div>
                <div className={`${styles['navigation__profile']}`}>
                    <NavigationItem
                        Icon={ProfileIcon}
                        isActive={false}
                        text="Личный кабинет"
                    />
                </div>
            </ul>
        </nav>
    )
}

export default Navigation;
