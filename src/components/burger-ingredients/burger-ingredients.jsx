import React, {useState} from "react";
import {Tab, CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

const BurgerIngredients = (props) => {

    return (
        <section className={`${styles.burgerIngredientsList} mr-10`}>
            <HeaderIngredients>Соберите бургер</HeaderIngredients>
            <IngredientsNavigation/>
            <IngredientsList ingredientsData={props.ingredientsData}/>
        </section>
    )
}

const HeaderIngredients = (props) => {
    return (
        <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
    )
}

const IngredientsNavigation = () => {
    const [selectedIngredientType, setSelectedIngredientType] = useState('Булки')
    return (
        <>
            <div className="mb-10" style={{ display: 'flex' }}>
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
                    return <IngredientsGroup key={type} ingredients={groupIngredientsList} title={ingredientTypes[type]}/>
                })
            }
        </section>

    )
}

const IngredientsGroup = (props) => {
    return (
        <section>
            <div className="text text_type_main-medium">{props.title}</div>
            <div className={`${styles.ingredientGroupItems} mb-10 mt-6`}>
                {props.ingredients.map((ingredient) => {
                    return <IngredientCard key={ingredient._id} ingredient={ingredient}/>
                })}
            </div>
        </section>

    )
}

const IngredientCard = (props) => {
    return(
        <div className={`mt-6 ${styles.ingredientCardWrapper}`}>
            <div className={styles['ingredientCard']}>
                <img className="ml-4 mr-4" src={props.ingredient.image} alt={"Изображение ингредиента"}/>
                <div className={`${styles['ingredientCardPrice']} mt-1 mb-1`}>
                    <span className="text text_type_digits-default mr-2">{props.ingredient.price}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className="text text_type_main-default">{props.ingredient.name}</p>
            </div>
            <div className={styles['ingredientCounter']}>
                <Counter count={1} size="default"/>
            </div>
        </div>
    )
}

export default BurgerIngredients;
