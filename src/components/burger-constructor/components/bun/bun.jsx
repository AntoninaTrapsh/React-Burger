import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {BUN_TYPES} from "../../consts/consts";
import styles from "./bun.module.css"
import DefaultConstructorElement from "../default-constructor-element/default-constructor-element";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom/cjs/react-router-dom";

const Bun = (props) => {
    const location = useLocation();

    const ingredientId = props.data?._id;

    return (
        <Link
            key={ingredientId}
            to={{
                pathname: `/ingredients/${ingredientId}`,
                state: { background: location },
            }}
        >
            <div className={`${styles['bun__wrapper']} ml-8 pt-4 pb-4`}>
                {
                    props.data ?
                        <ConstructorElement
                            type={props.position}
                            isLocked={true}
                            text={`${props.data.name} (${BUN_TYPES[props.position]})`}
                            thumbnail={props.data.image}
                            price={props.data.price}
                        /> :
                        <DefaultConstructorElement position={props.position}>Выберите булочку</DefaultConstructorElement>

                }
            </div>
        </Link>
    )
}

Bun.propTypes = {
    data: INGREDIENT_OBJECT_TYPE,
    position: PropTypes.string.isRequired,
}

export default Bun;
