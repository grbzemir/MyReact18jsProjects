import React from 'react';
import PropTypes from 'prop-types';

function SearchHeader({ search }) {

    const handleFormSubmit = (event) => {

        event.preventDefault();
        //Sayfanın yenilenmesini engellemek için preventDefault kullanıldı
        search('can');

    }


    return (
        <div className='searchDiv'>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Ne Arıyorsunuz?
                    <input type="text" name="name" />
                </label>
            </form>
        </div>
    );
}

SearchHeader.propTypes = {
    search: PropTypes.func.isRequired
};

export default SearchHeader;
