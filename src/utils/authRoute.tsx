import { useEffect } from "react";
import { isAuthenticated } from "./helper";
import {
    Outlet,
    useNavigate
} from "react-router-dom";

export const clearStorage = () => {
    localStorage.removeItem('c/em/')
    localStorage.removeItem('c/ps/')
    window.location.reload()
}

const AuthenticatedRoute = () => {
    const navigate = useNavigate();

    const authenticated = isAuthenticated();

    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
        }
    }, [authenticated]);

    useEffect(() => {
        setTimeout(clearStorage, 1000 * 60 * 60 * 3)
    }, [])

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AuthenticatedRoute;