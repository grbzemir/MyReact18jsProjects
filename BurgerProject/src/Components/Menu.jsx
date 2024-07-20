import React from 'react';
import MenuItem from './MenuItem'; // Eğer MenuItem aynı klasördeyse
import { Data } from '../Helpers/Data'; // Veriyi içe aktarımı
import '../styles/Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Burgerlerimiz</h1>
            <div className="menuList">
                {Data.map((menuItem, key) => (
                    <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        content={menuItem.content}
                        price={menuItem.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu; // Varsayılan ihracat
