import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
    actions.resetForm();
};

function GeneralForm() {
    const { values, errors, isSubmitting, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
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
                    className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
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
                {errors.age && <p className='error'>{errors.age}</p>}
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
                {errors.password && <p className='error'>{errors.password}</p>}
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
                {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            </div>
            <button disabled={isSubmitting} type="submit">
                Kaydet
            </button>
            <Link className="formLink" to="/portal">
                Portala Git
            </Link>
        </form>
    );
}

export default GeneralForm;

