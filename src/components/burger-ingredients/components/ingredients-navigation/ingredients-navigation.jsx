import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {INGREDIENT_TYPES} from "../../consts/consts";
import PropTypes from "prop-types";

const IngredientsNavigation = (props) => {
    const ingredientTypeKeys = Object.keys(INGREDIENT_TYPES);
    return (
        <>
            <div className="mb-10" style={{ display: 'flex' }}>
                {ingredientTypeKeys.map((type) => {
                    return <Tab value={INGREDIENT_TYPES[type]} key={type} active={props.activeTab === INGREDIENT_TYPES[type]} onClick={() => {}}>
                        {INGREDIENT_TYPES[type]}
                    </Tab>
                })}
            </div>
        </>
    )
}

IngredientsNavigation.propTypes = {
    activeTab: PropTypes.string.isRequired,
}

export default IngredientsNavigation;
