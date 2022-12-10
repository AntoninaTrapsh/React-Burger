import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectAuthInfo, selectIsUserChecked} from "../../services/store/selectors/auth";
import {fetchUserInfo, isUserChecked} from "../../services/store/actionCreators/auth";
import {useEffect} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

export function ProtectedRoute({ children, authPage, ...rest }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserInfo());

        return () => {
            console.log("destroy")
            dispatch(isUserChecked(false))
        }
    }, [])

    const isAuth = useSelector(selectAuthInfo)
    const isAuthChecked = useSelector(selectIsUserChecked)
    const history = useHistory()

    if (!isAuthChecked) {
        // TODO need loader
        console.log('LOADER')
        return <div>LOADER</div>
    }

    if (authPage && isAuth) {
        history.goBack()
        return
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
