import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './add-to-cart-button.styles.scss';

const AddToCartButton = () => {
    return (
        <button type="button" className="add-to-cart-btn">
            <FontAwesomeIcon icon={faCartArrowDown} />

            <span>להוסיף לעגלה</span>
        </button>
    );
};

export default AddToCartButton;
