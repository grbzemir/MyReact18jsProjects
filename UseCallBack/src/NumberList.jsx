import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function NumberList({ getItems }) { // `getItems`'i props olarak alıyoruz
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems(2)); // `getItems`'i çağırarak `items`'ı güncelliyoruz
        console.log('Items updated');
    }, [getItems]); // `getItems` bağımlılık olarak ekleniyor

    return (
        <>
            {items.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </>
    );
}

NumberList.propTypes = {
    getItems: PropTypes.func.isRequired,
};

export default NumberList;
