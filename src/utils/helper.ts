export const isAuthenticated = () => {

    const authToken = localStorage.getItem("fb/em/");
    const authPassword = localStorage.getItem("fb/ps/");

    if (authToken && authPassword !== "") {
        return true;
    }
    return false;
}

