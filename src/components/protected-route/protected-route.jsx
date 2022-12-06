import { Route } from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectAuthInfo} from "../../services/store/selectors/auth";
import { Redirect } from 'react-router-dom';

export function ProtectedRoute({ children, ...rest }) {
    const isAuth = useSelector(selectAuthInfo);

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
