export const isAuthenticated = () => {

    const authToken = localStorage.getItem("fbt/k/");
    // const ID = localStorage.getItem("fdi/d/");

    if (authToken !== "") {
        return true;
    }
    return false;
}
