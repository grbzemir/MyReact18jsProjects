import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

function CustomCheckbox({ label, ...props }) {
    // Add the 'label' prop to the props validation

    const [field, meta] = useField(props);

    return (
        <>
            <div className="checkbox">
                <input
                    {...field}
                    {...props}
                    className={meta.error ? 'input-error' : ''}
                />
                <span>Kullanım koşullarını kabul ediyorum</span>
            </div>

            {meta.error && <div className="error">{meta.error}</div>}
        </>
    );


}

CustomCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
};

export default CustomCheckbox;
