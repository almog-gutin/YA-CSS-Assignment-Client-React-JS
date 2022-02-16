import React from 'react';
import './sale-banner-item.styles.scss';

const SaleBannerItem = ({ title, imageURL }) => {
    return (
        <li className="sale-banner-item" style={{ backgroundImage: `url(${imageURL})` }}>
            <h1>{title}</h1>

            <button type="button">קנו עכשיו</button>
        </li>
    );
};

export default SaleBannerItem;
