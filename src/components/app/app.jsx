import React from 'react';
import AppHeader from "../app-header/app-header";

import {ingredientsData} from "../../utils/data";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "../app/app.module.css"

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <BurgerIngredients ingredientsData={ingredientsData}/>
                <BurgerConstructor ingredientsData={ingredientsData}/>
            </main>
        </div>
    );
}

export default App;
