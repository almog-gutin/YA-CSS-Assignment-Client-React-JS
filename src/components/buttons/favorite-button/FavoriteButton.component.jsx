import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './favorite-button.styles.scss';

const FavoriteButton = () => {
    const [className, setClassName] = useState('favorite-btn');
    const [heartIcon, setHeartIcon] = useState(faHeart);

    const handleClick = () => {
        setClassName(className === 'favorite-btn' ? 'favorite-btn clicked' : 'favorite-btn');
        setHeartIcon(className === 'favorite-btn' ? faHeartSolid : faHeart);
    };

    return (
        <button type="button" className={className} onClick={handleClick}>
            <FontAwesomeIcon icon={heartIcon} />
        </button>
    );
};

export default FavoriteButton;
