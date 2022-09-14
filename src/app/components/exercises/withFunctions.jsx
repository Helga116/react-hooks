import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => localStorage.setItem("auth", "token");
    const onLogOut = () => localStorage.removeItem("auth");
    return (
        <CardWrapper>
            <Component isAuth={isAuth} onLogOut={onLogOut} onLogin={onLogin} />
        </CardWrapper>
    );
};

export default withFunctions;
