import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import {BUN_TYPES} from "../../consts/consts";
import styles from "./bun.module.css"
import DefaultConstructorElement from "../default-constructor-element/default-constructor-element";
import {Link, useLocation} from "react-router-dom";
import {IIngredient} from "../../../../utils/interfaces";

interface IBunProps {
    position: 'top' | 'bottom';
    data: IIngredient | null;
}

const Bun: FC<IBunProps> = ({position, data}) => {
    const location = useLocation();

    const ingredientId = data?._id;

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
                    data ?
                        <ConstructorElement
                            type={position}
                            isLocked={true}
                            text={`${data.name} (${BUN_TYPES[position]})`}
                            thumbnail={data.image}
                            price={data.price}
                        /> :
                        <DefaultConstructorElement position={position}>Выберите булочку</DefaultConstructorElement>

                }
            </div>
        </Link>
    )
}

export default Bun;
