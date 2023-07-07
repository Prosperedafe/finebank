export const isAuthenticated = () => {

    const authToken = localStorage.getItem("fb/em/");
    const authName = localStorage.getItem("fb/fn/");
    const authPassword = localStorage.getItem("fb/ps/");

    if (authToken && authPassword && authName !== "") {
        return true;
    }
    return false;
}

