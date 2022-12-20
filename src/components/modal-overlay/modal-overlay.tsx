import React, {FC} from "react";
import styles from "./modal-overlay.module.css"
import PropTypes from "prop-types";

interface IModalOverlayProps {
    handleModalClose: () => void;
}

const ModalOverlay: FC<IModalOverlayProps> = ({handleModalClose}) => {
    return (
       <div className={styles['modal-overlay']} onClick={() => handleModalClose()}/>
    )
}

export default ModalOverlay;
