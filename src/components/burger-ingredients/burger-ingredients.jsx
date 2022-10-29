import React, {useState} from "react";
import {Tab, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

const BurgerIngredients = (props) => {

    return (
        <section className={styles.burgerIngredientsList}>
            <h1>Соберите бургер</h1>
            <IngredientsNavigation/>
            <IngredientsList ingredientsData={props.ingredientsData}/>
        </section>
    )
}

const IngredientsNavigation = () => {
    const [selectedIngredientType, setSelectedIngredientType] = useState('Булки')
    return (
        <>
            <div style={{ display: 'flex' }}>
                <Tab value="Булки" active={selectedIngredientType === 'Булки'} onClick={setSelectedIngredientType}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={selectedIngredientType === 'Соусы'} onClick={setSelectedIngredientType}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={selectedIngredientType === 'Начинки'} onClick={setSelectedIngredientType}>
                    Начинки
                </Tab>
            </div>
        </>
    )
}

const IngredientsList = (props = []) => {
    const ingredientTypes = {
        bun: "Булки",
        sauce: "Соусы",
        main: "Начинки",
    }

    const ingredientTypeKeys = Object.keys(ingredientTypes);

    return(
        <section className={styles.ingredientsGroupList}>
            {
                ingredientTypeKeys.map((type) => {
                    const groupIngredientsList = props.ingredientsData.reduce((list, ingredient) => {
                        if (type === ingredient.type) {
                            list.push(ingredient);
                        }
                        return list;
                    }, [])
                    return <IngredientsGroup ingredients={groupIngredientsList} title={ingredientTypes[type]}/>
                })
            }
        </section>

    )
}

const IngredientsGroup = (props) => {
    return (
        <section>
            <div className="text text_type_main-medium">{props.title}</div>
            <div className={styles.ingredientGroupItems}>
                {props.ingredients.map((ingredient) => {
                    return <IngredientCard ingredient={ingredient}/>
                })}
            </div>
        </section>

    )
}

const IngredientCard = (props) => {
    return(
        <div className={styles.ingredientCardWrapper}>
            <img src={props.ingredient.image} alt={"Изображение ингредиента"}/>
            <div>
                <span>{props.ingredient.price}</span>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-default">{props.ingredient.name}</p>
        </div>
    )
}

export default BurgerIngredients;
