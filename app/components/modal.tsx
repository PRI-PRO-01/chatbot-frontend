import React, { ReactNode } from 'react';
import styles from './modalStyle.module.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={`${styles.modal_overlay}`}>
            <div className={`${styles.modal}`}>
                <div className={`${styles.modal_header}`}>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
