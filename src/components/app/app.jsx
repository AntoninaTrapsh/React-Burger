import React from 'react';
import AppHeader from "../app-header/app-header";

import {ingredientsData} from "../../utils/data";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <BurgerIngredients/>
            <BurgerConstructor ingredientsData={ingredientsData}/>
        </div>
    );
}

export default App;
