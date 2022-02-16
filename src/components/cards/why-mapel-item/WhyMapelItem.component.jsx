import React from 'react';
import './why-mapel-item.styles.scss';

const WhyMapelItem = ({ title, description, svg: SVG }) => {
    return (
        <li className="why-mapel__item">
            <SVG />

            <h1>{title}</h1>

            {description && <p>{description}</p>}
        </li>
    );
};

export default WhyMapelItem;
