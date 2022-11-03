import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"
import IngredientsClient from "../../services/ingredients-client";

function App() {
    const [ingredientsData, setIngredientsData] = useState([]);
    useEffect(() => {
        IngredientsClient.getIngredients('ingredients').then((data) => {
            console.log(data.data);
            setIngredientsData(data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <div className="App">
            <AppHeader/>
            <main>
                {
                    !!ingredientsData.length &&
                    <>
                        <BurgerIngredients ingredientsData={ingredientsData}/>
                        <BurgerConstructor ingredientsData={ingredientsData}/>
                    </>
                }
            </main>
        </div>
    );
}

export default App;
