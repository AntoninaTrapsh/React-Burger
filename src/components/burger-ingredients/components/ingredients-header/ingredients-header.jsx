import React from "react";

const IngredientsHeader = (props) => {
    return (
        <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
    )
}

export default IngredientsHeader;
