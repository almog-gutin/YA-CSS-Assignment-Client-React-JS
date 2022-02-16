import React, { useState } from 'react';
import './footer.styles.scss';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleInput = (event) => {
        const emailInput = event.target.value.trim();

        setEmail(emailInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
    };

    return (
        <footer className="main-footer">
            <div>
                <div className="signup-newsletter-container">
                    <span>הצטרף לניוזלטר וקבל הנחה של 20 ₪ בהזמנה הראשונה שלך</span>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            placeholder="הכנס את האימייל שלך"
                            onInput={handleInput}
                            required
                        />

                        <button type="submit">הירשם כמנוי</button>
                    </form>
                </div>

                <img src="images/footer/group-9.png" alt="services" />
            </div>
        </footer>
    );
};

export default Footer;
