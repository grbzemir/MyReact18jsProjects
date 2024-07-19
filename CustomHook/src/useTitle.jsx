import { useEffect } from 'react';

function useTitle(num) {
    useEffect(() => {
        // Sayfa başlığını güncelle
        document.title = `Sayi - ${num}`;
    }, [num]); // `num` bağımlılık olarak eklendi
}

export default useTitle;
