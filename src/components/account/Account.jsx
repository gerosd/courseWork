import React, {useEffect, useState} from 'react';

import '../../assets/css/account.css';
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";

function Account({ onClose }) {
    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        if (showForm) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose, showForm]);

    const handleContainerClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <div className="account-container" onClick={handleContainerClick}>
            {showForm ? (
                <Login onToggleForm={toggleForm} closeForm={onClose} />
            ) : (
                <Registration onToggleForm={toggleForm} />
            )}
        </div>
    )
}

export default Account;