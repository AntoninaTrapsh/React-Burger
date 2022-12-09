import React from "react";
import styles from "./profile.module.css";
import {useRouteMatch} from "react-router-dom/cjs/react-router-dom";
import {NavLink} from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import ProfileEditing from "./components/profile-editing/profile-editing";
import ProfileOrders from "./components/profile-orders/profile-orders";
import {useDispatch} from "react-redux";
import {fetchUserSignOut} from "../../services/store/actionCreators/auth";

const Profile = () => {
    const dispatch = useDispatch();
    const { path } = useRouteMatch();

    const signOut = () => {
        dispatch(fetchUserSignOut());
    }

    return (
        <div className={styles['profile-wrapper']}>
            <nav>
                <ul className={styles['profile-navigation']}>
                    <li className={styles['profile-navigation__item']}>
                        <NavLink
                            className={`${styles['link']} text text_type_main-medium text_color_inactive`}
                            activeClassName={styles['active-link']}
                            to="/profile"
                            exact
                        >
                            Профиль
                        </NavLink>
                    </li>
                    <li className={styles['profile-navigation__item']}>
                        <NavLink
                            className={`${styles['link']} text text_type_main-medium text_color_inactive`}
                            activeClassName={styles['active-link']}
                            to="/orders"
                        >
                            История заказов
                        </NavLink>
                    </li>
                    <li className={styles['profile-navigation__item']}>
                        <button
                            className={`${styles['sign-out']} text text_type_main-medium text_color_inactive`}
                            onClick={signOut}
                        >
                            Выход
                        </button>
                    </li>
                </ul>
                <p className={`${styles['profile-description']} text text_type_main-default text_color_inactive mt-20`}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </nav>
            <Switch>
                <Route exact path={path}>
                    <ProfileEditing/>
                </Route>
                <Route exact path={`${path}/orders`}>
                    <ProfileOrders/>
                </Route>
            </Switch>
        </div>
    );
}

export default Profile;