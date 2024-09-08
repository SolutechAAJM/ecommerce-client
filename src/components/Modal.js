import { forwardRef } from 'react';
import { X } from 'phosphor-react';
import './styles/Modal.css'; 

const Modal = forwardRef(({ open = false, title, onClose, onConfirm, onCancel, children, width = '80%', height = 'auto' }, ref) => {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <div className={`modal-overlay ${open ? 'modal-open' : 'modal-closed'}`}>
            <div 
                className='modal-content' 
                style={{ width: width, height: height }}
                ref={ref}
            >
                <div className='modal-header'>
                    <h2 className='modal-title'>{title}</h2>
                    <button className='modal-close-button' onClick={handleClose}>
                        <X size={24} color="#333" />
                    </button>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
                <div className='modal-footer'>
                <button className='modal-button modal-cancel-button' onClick={handleCancel}>
                        Cancelar
                    </button>
                    <button className='modal-button modal-confirm-button' onClick={handleConfirm}>
                        Aceptar
                    </button>
                    
                </div>
            </div>
        </div>
    );
});

export default Modal;
