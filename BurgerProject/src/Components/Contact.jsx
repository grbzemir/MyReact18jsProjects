import React from 'react';
import BannerImage from '../assets/banner.png';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}>
                {/* Sol kısım için arka plan resmi */}
            </div>
            <div className='rightSide'>
                <h1>Bizimle İletişime Geçin</h1>
                <form>
                    <label>Ad Soyad</label>
                    <input type="text" name="name" placeholder="Adınızı ve Soyadınızı Girin" />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Lütfen Emailinizi Girin" />

                    <label>Mesajınız</label>
                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Lütfen Mesajınızı Girin.."
                    ></textarea>

                    <button type="submit">Gönder</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
