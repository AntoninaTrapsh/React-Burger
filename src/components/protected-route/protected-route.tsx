import {Route, useLocation} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectAuthInfo, selectIsAuthRequestEnded} from "../../services/store/selectors/auth";
import {fetchUserInfo, isUserChecked} from "../../services/store/actionCreators/auth";
import {FC, useEffect} from "react";
import Preloader from "../preloader/preloader";
import React from 'react';
import {TProtectedRouteLocation} from "../../utils/types";

interface IProtectedRouteProps {
    authPage?: boolean;
    path: string;
    exact?: boolean;
    children: JSX.Element;
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ children, authPage, ...rest }) => {
    const dispatch = useDispatch();
    const location = useLocation<TProtectedRouteLocation>();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUserInfo());

        return () => {
            dispatch(isUserChecked(false))
        }
    }, [dispatch])

    const isAuth: boolean = useSelector(selectAuthInfo)
    const isAuthRequestEnded: boolean = useSelector(selectIsAuthRequestEnded)

    if (!isAuthRequestEnded) {
        return <Preloader/>
    }

    if (authPage && isAuth) {
        const { from } = location.state || { from: { pathname: "/" } };
        return <Redirect to={from} />;
    }

    if (authPage && !isAuth) {
        return <Route {...rest} render={() => children}/>
    }

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuth
                    ? children
                    : <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: location,
                        }
                    }} />
            }
        />
    );
}
