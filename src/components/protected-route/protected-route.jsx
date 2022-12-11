import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectAuthInfo, selectIsAuthRequestEnded} from "../../services/store/selectors/auth";
import {fetchUserInfo, isUserChecked} from "../../services/store/actionCreators/auth";
import {useEffect} from "react";
import Preloader from "../preloader/preloader";
import {useLocation} from "react-router-dom/cjs/react-router-dom";

export function ProtectedRoute({ children, authPage, ...rest }) {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchUserInfo());

        return () => {
            dispatch(isUserChecked(false))
        }
    }, [dispatch])

    const isAuth = useSelector(selectAuthInfo)
    const isAuthRequestEnded = useSelector(selectIsAuthRequestEnded)

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
