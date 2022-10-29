import React from "react";
import styles from './app-header.module.css';
import Navigation from "./components/navigation/navigation";

const AppHeader = () => {
    return (
        <header className={`${styles['header']} text text_type_main-default`}>
            <Navigation/>
        </header>
    )
}

export default AppHeader;
