import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {BUN_TYPES} from "../../consts/consts";
import styles from "./bun.module.css"
import DefaultConstructorElement from "../default-constructor-element/default-constructor-element";
import {openIngredientDetails} from "../../../../services/store/actionCreators/ingredient-details";
import {useDispatch} from "react-redux";
import INGREDIENT_OBJECT_TYPE from "../../../../utils/types";
import PropTypes from "prop-types";

const Bun = (props) => {
    const dispatch = useDispatch();

    const handleIngredientCardOpen = (ingredient) => {
        dispatch(openIngredientDetails(ingredient))
    }
    return (
        <div className={`${styles['bun__wrapper']} ml-8 pt-4 pb-4`} onClick={() => {
            if (!props.data) {
                return
            }
            handleIngredientCardOpen(props.data)
        }}>
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
    )
}

Bun.propTypes = {
    data: INGREDIENT_OBJECT_TYPE,
    position: PropTypes.string.isRequired,
}

export default Bun;
