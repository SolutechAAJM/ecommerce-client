"use client";
import { useState } from 'react';
import Modal from '@/components/Modal';

function ModalExample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        console.log('Confirmed!');
        closeModal();
    };

    const handleCancel = () => {
        console.log('Cancelled!');
        closeModal();
    };

    return (
        <div className="App">
            <button onClick={openModal}>Open Modal</button>
            <Modal
                open={isModalOpen}
                title="Example Modal"
                onClose={closeModal}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                width="400px"
                height="250px"
            >
                <p>This is the modal content.</p>
            </Modal>
        </div>
    );
}

export default ModalExample;
