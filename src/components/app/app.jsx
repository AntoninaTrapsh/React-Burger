import React, {useEffect} from 'react';
import AppHeader from "../app-header/app-header";
import "./app.module.css"
import MainPage from "../../pages/main-page/main-page";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <MainPage/>
            </main>
        </div>
    );
}

export default App;
