import React from 'react'
import ReactDOM from "react-dom";
import styles from "./modal.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = (props) => {
    const modalRoot = document.getElementById("modal-root");

    React.useEffect(() => {
        const handleCloseFromKey = (e) => {
            if (e.key === "Escape") {
                props.handleIngredientCardClose();
            }
        }
        document.addEventListener('keydown', handleCloseFromKey);
        return () => {
            document.removeEventListener('keydown', handleCloseFromKey);
        }
    }, [props]);

    return ReactDOM.createPortal(
    <div className={`${styles['modal']}`}>
        <div className={`${styles['modal__container']} pb-15`}>
            {
                !!props.title &&
                (<div className={`${styles['modal__header']} pt-10 ml-10 mr-10`}>
                    <h2 className={`text text_type_main-large`}>{props.title}</h2>
                </div>)
            }
            {props.children}
            <button
                className={`${styles['modal__button']} mr-10 mt-15`}
                onClick={() => props.handleIngredientCardClose()}
            >
                <CloseIcon type="primary" />
            </button>
        </div>
    </div>,
        modalRoot
    )
}

export default Modal;
