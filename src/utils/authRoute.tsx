import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./helper";

const AuthenticatedRoute = () => {
    const navigate = useNavigate()

    const authenticated = isAuthenticated();
    const auth: string = JSON.parse(localStorage.getItem('fbt/k/') as string)
    console.log(auth);

    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
        }
    }, [authenticated]);
    return (
        <div></div>
    )
}

export default AuthenticatedRoute;