import React from 'react';
import './sale-selection.styles.scss';

import SaleItem from '../../../components/cards/sale-item/SaleItem.component';

import SALE_SECTION_DATA from '../../../data/sale-section.data';
import SaleBannerItem from '../../../components/cards/sale-banner-item/SaleBannerItem.component';

const SaleSelection = () => {
    return (
        <section className="sale-selection">
            <div>
                <header className="sales-header">
                    <h1 className="title">מבצעים ומוצרים מומלצים</h1>
                    <span className="subtitle">ורם איפוסם וא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים גםל</span>
                </header>

                <ul className="sale__items">
                    {SALE_SECTION_DATA.map(({ id, title, imageURL, rating, price }, index) =>
                        index === 0 ? (
                            <SaleBannerItem key={id} title={title} imageURL={imageURL} />
                        ) : (
                            <SaleItem key={id} title={title} imageURL={imageURL} rating={rating} price={price} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default SaleSelection;
