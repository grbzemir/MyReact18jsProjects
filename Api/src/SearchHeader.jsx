import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function SearchHeader({ search }) {

    const [valueInput, setValue] = useState('');

    const handleFormSubmit = (event) => {

        event.preventDefault();
        //Sayfanın yenilenmesini engellemek için preventDefault kullanıldı
        search('valueInput');

    };

    const handleChange = (event) => {

        setValue(event.target.value);

    };

    return (
        <div className='searchDiv'>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Ne Arıyorsunuz?
                    {/* <input type="text" name="name" /> */}
                    <input value={valueInput} onChange={handleChange} />
                    <div>{valueInput}</div>
                </label>
            </form>
        </div>
    );
}

SearchHeader.propTypes = {
    search: PropTypes.func.isRequired
};

export default SearchHeader;
