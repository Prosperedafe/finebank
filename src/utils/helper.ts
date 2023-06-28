export const isAuthenticated = () => {

    const authToken = localStorage.getItem("fbt/k/");
    const authName = localStorage.getItem("fdi/n/");

    if (authToken && authName !== "") {
        return true;
    }
    return false;
}
