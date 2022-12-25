import React, {FC} from "react";
import styles from "./preloader.module.css";

const Preloader: FC = () => {
    return (
        <div className={styles['loader']}/>
    )
}

export default Preloader;
