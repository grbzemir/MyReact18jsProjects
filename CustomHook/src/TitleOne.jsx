import React, { useState } from 'react';
import useTitle from './useTitle'; // Özel kancayı import ediyoruz

function TitleOne() {
    const [num, setNum] = useState(0);

    // useEffect(() => {
    //     // Sayfa başlığını güncelle
    //     document.title = `Sayi - ${num}`;
    // }, [num]); // `num` bağımlılık olarak eklendi

    useTitle(num);

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>Sayi - {num}</button>
        </div>
    );
}

export default TitleOne;
