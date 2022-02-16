import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './sale-item.style.scss';

import FavoriteButton from '../../buttons/favorite-button/FavoriteButton.component';
import AddToCartButton from '../../buttons/add-to-cart-button/AddToCartButton.component';

const SaleItem = ({ title, imageURL, rating, price }) => {
    return (
        <li className="sale-item">
            <div className="image-container">
                <img src={imageURL} alt={title} />

                <FavoriteButton />

                <div className="sale">מבצע</div>
            </div>

            <div className="content-container">
                <div className="content">
                    <div className="rating-container">
                        <div className="stars-container">
                            {[...new Array(rating)].map(() => (
                                <FontAwesomeIcon key={uuidv4()} icon={faStar} />
                            ))}
                        </div>
                        <span>{`(${rating} ביקורת)`}</span>
                    </div>

                    <h1>{title}</h1>

                    <div className="price">₪{price}</div>
                </div>

                <AddToCartButton />
            </div>
        </li>
    );
};

export default SaleItem;
