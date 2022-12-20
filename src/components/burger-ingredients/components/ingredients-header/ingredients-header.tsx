import React, {FC} from "react";

interface IIngredientsHeaderProps {
    children: string;
}

const IngredientsHeader: FC<IIngredientsHeaderProps> = (props) => {
    return (
        <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
    )
}

export default IngredientsHeader;
