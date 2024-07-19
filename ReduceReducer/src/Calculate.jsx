import React, { useContext } from 'react';
import { NumberContext } from './App';

function Calculate() {
    const numberContext = useContext(NumberContext); // Değişken adını küçük harfle başlatarak değiştirdik

    return (
        <>
            <div>Sayi = {numberContext.count} </div>
            <button onClick={() => numberContext.dispatch('increment')}>Arttır</button>
            <button onClick={() => numberContext.dispatch('decrement')}>Azalt</button>
            <button onClick={() => numberContext.dispatch('reset')}>Sıfırla</button>
        </>
    );
}

export default Calculate;
