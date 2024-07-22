import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

function CustomCheckBox({ label, ...props }) {

    const [field, meta] = useField(props);
    console.log(field);
    console.log(meta);
    return (
        <>
            <div className="checkBox">

                <label>{label}</label>
                <select
                    {...field}
                    {...props}
                    className={meta.error ? 'input-error' : ''}
                />

            </div>


            {meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}

CustomCheckBox.propTypes = {
    label: PropTypes.string.isRequired,
};

export default CustomCheckBox;
