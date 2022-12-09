import { Route } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectAuthInfo} from "../../services/store/selectors/auth";
import { Redirect } from 'react-router-dom';
import {fetchUserInfo} from "../../services/store/actionCreators/auth";
import {useEffect} from "react";

export function ProtectedRoute({ children, ...rest }) {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectAuthInfo);

    useEffect(() => {
        dispatch(fetchUserInfo());
    })

    return (
    //     <Route
    //         {...rest}
    //         render={({location}) =>
    //             isAuth
    //                 ? children
    //                 : <Redirect
    //                 to={{
    //                     pathname: "/login",
    //                     state: {
    //                         from: location,
    //                     }
    //                 }} />
    //         }
    //     />
    // );

    <Route  {...rest}
        render={() => children}/>)
}
