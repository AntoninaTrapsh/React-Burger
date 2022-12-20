import styles from "./navigation.module.css";
import NavigationItem from "../navigation-item/navigation-item";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import {Link, useRouteMatch} from "react-router-dom";

const Navigation: FC = () => {

    const isConstructor: boolean = !!useRouteMatch({ path: '/', exact: true});
    const isFeed: boolean = !!useRouteMatch('/feed');
    const isProfile: boolean = !!useRouteMatch('/profile');

    return (
        <nav>
            <ul className={`${styles['navigation']} pt-4 pb-4`}>
                <div className={`${styles['navigation__order']}`}>
                    <NavigationItem
                        Icon={BurgerIcon}
                        isActive={isConstructor}
                        path="/"
                        text="Конструктор"
                    />
                    <NavigationItem
                        Icon={ListIcon}
                        isActive={isFeed}
                        path="/orders"
                        text="Лента заказов"
                    />
                </div>
                <Link to="/" className={`${styles.navigation__logo}`}>
                    <Logo />
                </Link>
                <div className={`${styles['navigation__profile']}`}>
                    <NavigationItem
                        Icon={ProfileIcon}
                        isActive={isProfile}
                        path="/profile"
                        text="Личный кабинет"
                    />
                </div>
            </ul>
        </nav>
    )
}

export default Navigation;
