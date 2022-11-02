import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {BUN_TYPES} from "../../consts/consts";

const Bun = (props) => {
    return (
        <div className="ml-8">
            <ConstructorElement
                type={props.position}
                isLocked={true}
                text={`${props.data.name} (${BUN_TYPES[props.position]})`}
                thumbnail={props.data.image}
                price={props.data.price}
            />
        </div>
    )
}

export default Bun;
