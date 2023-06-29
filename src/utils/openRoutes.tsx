import { useEffect } from "react";
import { isAuthenticated } from "./helper";
import { Outlet, useNavigate } from "react-router-dom";

const OpenRoutes = () => {
    const navigate = useNavigate();

    const authenticated = isAuthenticated();

    useEffect(() => {
        if (authenticated) {
            navigate("/");
        }
    }, [authenticated]);

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default OpenRoutes;