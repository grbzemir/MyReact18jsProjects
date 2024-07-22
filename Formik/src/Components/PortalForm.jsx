import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect'; // Import the 'CustomSelect' component
import { advancedSchema } from '../schemas';
import CustomCheckBox from './CustomCheckBox';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    actions.resetForm();
};

function PortalForm() {
    return (
        <>

            {' '}
            <Formik
                initialValues={{ username: '', university: '', isAccepted: false }}
                onSubmit={onSubmit}
                validationSchema={advancedSchema}
            >
                {() => (
                    <Form>
                        <CustomInput
                            label="Kullanıcı Adı"
                            name="username"
                            type="text"
                            placeholder="Kullanıcı Adınızı Giriniz"
                        />

                        <CustomSelect
                            label="Okulunuz"
                            name="university"
                            placeholder="Üniversitenizi Seçiniz"
                        >
                            <option value="">Üniversitenizi Seçiniz</option>
                            <option value="bogazici">Boğaziçi Üniversitesi</option>
                            <option value="gsu">Galatasaray Üniversitesi</option>
                            <option value="odtü">Orta Doğu Teknik Üniversitesi</option>
                            <option value="itü">İstanbul Teknik Üniversitesi</option>
                        </CustomSelect>
                        <CustomCheckBox type="checkbox" name="isAccepted" />
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default PortalForm;

