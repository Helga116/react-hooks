import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const [buttonTextContent, setButtonTextContent] = useState("");
    useEffect(() => {
        setButtonTextContent(isAuth === "token" ? "Выйти из системы" : "Войти");
    }, []);

    const handleClick = () => {
        if (buttonTextContent === "Выйти из системы") {
            onLogOut();
            setButtonTextContent("Войти");
        } else {
            onLogin();
            setButtonTextContent("Выйти из системы");
        }
    };
    return (
        <>
            <button className="btn btn-primary" onClick={handleClick}>
                {buttonTextContent}
            </button>
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
