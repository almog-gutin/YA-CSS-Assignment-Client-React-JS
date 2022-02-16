import React from 'react';
import './mapel-section.styles.scss';

import WhyMapelItem from '../../../components/cards/why-mapel-item/WhyMapelItem.component';

import WHY_MAPEL_DATA from '../../../data/why-mapel-section.data';

const MapelSection = () => {
    return (
        <section className="mapel-section">
            <header className="mapel-header">
                <h1>למה מיפל?</h1>

                <div className="divider"></div>

                <p>
                    נולום רווס פיאן - פוסיליס קווים
                    <br />
                    אקוומן קוואזי מר מודוף. אודיפו בלאסטיק
                    <br />
                    מונופץ קליר, בנפת נפקט למסון בלרק
                    <br />
                    וענוף לפלומי בלוף קינץ תתיח רעח
                </p>
            </header>

            <ul className="why-mapel__items">
                {WHY_MAPEL_DATA.map(({ id, title, description, svg }) => (
                    <WhyMapelItem key={id} title={title} description={description} svg={svg} />
                ))}
            </ul>
        </section>
    );
};

export default MapelSection;
