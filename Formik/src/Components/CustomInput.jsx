import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

function CustomInput({ label, ...props }) {

    const [field, meta] = useField(props);
    console.log(field);
    console.log(meta);
    return (
        <>
            <label>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.error ? 'input-error' : ''}
            />

            {meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}

CustomInput.propTypes = {
    label: PropTypes.string.isRequired,
};

export default CustomInput;
