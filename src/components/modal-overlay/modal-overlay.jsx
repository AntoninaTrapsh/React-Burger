import React from "react";
import styles from "./modal-overlay.module.css"

const ModalOverlay = (props) => {
    return (
       <div className={styles['modal-overlay']} onClick={() => props.handleIngredientCardClose()}></div>
    )
}

export default ModalOverlay;
