import React from "react";
import styles from "./not-found-page.module.css"
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section className={styles['not-found__wrapper']}>
            <h1 className="text text_type_digits-large mt-30">404</h1>
            <p className="text text_type_main-medium mt-5">Страница не найдена</p>
            <Link to="/" className={`${styles['link']} mt-20`} >Вернуться на главную страницу</Link>
        </section>
    )
}

export default NotFoundPage;
