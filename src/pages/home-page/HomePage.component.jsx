import React from 'react';
import './home-page.styles.scss';

import SaleSelection from './sale-selection/SaleSelection.component';
import MapelSection from './why-mapel-section/MapelSection.component';

const HomePage = () => {
    return (
        <main className="home-page">
            <SaleSelection />

            <MapelSection />
        </main>
    );
};

export default HomePage;
