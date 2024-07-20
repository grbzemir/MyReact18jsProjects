import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Members() {
    const [searchParams, setSearchParams] = useSearchParams();
    const isActive = searchParams.get('filter') === 'active';
    return (
        <>
            <div>
                Members
            </div>
            <button onClick={() => setSearchParams({ filter: 'active' })}>Aktif Üyeler</button>
            <button onClick={() => setSearchParams({ filter: 'passive' })}>Tüm Üyeler</button>
            {isActive ? <div>Aktif Üyeler</div> : <div>Tüm Üyeler</div>}
        </>
    );
}

export default Members
