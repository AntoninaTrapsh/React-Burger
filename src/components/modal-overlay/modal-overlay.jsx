import React from "react";
import styles from "./modal-overlay.module.css"
import PropTypes from "prop-types";

const ModalOverlay = (props) => {
    return (
       <div className={styles['modal-overlay']} onClick={() => props.handleModalClose()}></div>
    )
}

ModalOverlay.propTypes = {
    handleModalClose: PropTypes.func.isRequired
};

export default ModalOverlay;
