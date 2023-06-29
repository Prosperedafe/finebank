export const isAuthenticated = () => {

    const authToken = localStorage.getItem("fb/em/");
    const authName = localStorage.getItem("fb/ps/");

    if (authToken && authName !== "") {
        return true;
    }
    return false;
}
