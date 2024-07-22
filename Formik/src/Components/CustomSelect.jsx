import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

function CustomSelect({ label, ...props }) {
    // Add the 'label' prop to the props validation

    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <select
                {...field}
                {...props}
                className={meta.error ? 'input-error' : ''}
            />

            {meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}

CustomSelect.propTypes = {
    label: PropTypes.string.isRequired,
};

export default CustomSelect;
