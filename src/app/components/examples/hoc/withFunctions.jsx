import React from "react";
import Card from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth") === "token";
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    return <>
        <Card>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </Card>
    </>;
};

export default withFunctions;
