import React from 'react';
import { useFormik } from 'formik';

function GeneralForm() {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Mail Please"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Enter Your Age Please"
                    value={values.age}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password Please"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <div className="confirmPassword">
                <label>Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter Your Confirm Password Please"
                    value={values.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Kaydet</button>
        </form>
    );
}

export default GeneralForm;
