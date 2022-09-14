import React from "react";
import SimpleComponent from "./simpleComponent";
import withFunctions from "./withFunctions";

const ComponentWithHoc = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <>
            <ComponentWithHoc />
        </>
    );
};

export default ComponentWithHoc;
