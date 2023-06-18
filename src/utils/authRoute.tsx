// import { useEffect } from "react";
// import { isAuthenticated } from "./helper";
import {
    Outlet,
    // useNavigate
} from "react-router-dom";

const AuthenticatedRoute = () => {
    // const navigate = useNavigate()

    // const authenticated = isAuthenticated();
    // const auth: string = JSON.parse(localStorage.getItem('fbt/k/') as string)
    // console.log(auth);

    // useEffect(() => {
    //     if (!authenticated) {
    //         navigate("/login");
    //     }
    // }, [authenticated]);
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AuthenticatedRoute;