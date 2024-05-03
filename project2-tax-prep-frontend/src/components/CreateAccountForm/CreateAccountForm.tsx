import { Form, Fieldset, Label, TextInput, Checkbox, Button, ButtonGroup, DatePicker, ErrorMessage, FormGroup, TextInputMask } from '@trussworks/react-uswds'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import './CreateAccountForm.css'

export default function CreateAccountForm() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Updates the form data when the user changes an input
    const handleFormChange = (event : any) => {
        const { name, value } = event.target
        const newValue = value
        setFormData((prevState : any) => ({ ...prevState, [name]: newValue }))
        console.log('formData', formData);
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    return(
        <>
            <div id='create-new-account-setup'>{t('createAccountForm.newAccountSetup')}</div>

            <Form id='create-account-form' onSubmit={handleSubmit} >
                <Label htmlFor='username'>{t('createAccountForm.username')}</Label>
                <TextInput id='create-username' name='username' type='text' value={formData.username} onChange={handleFormChange}/>

                <Label htmlFor='email'>{t('createAccountForm.email')}</Label>
                <TextInput id='create-email' name='email' type='text' value={formData.email} onChange={handleFormChange}/>

                <Label htmlFor='password'>{t('createAccountForm.password')}</Label>
                <TextInput id='create-password' name='password' type='text' value={formData.password} onChange={handleFormChange}/>

                <Label htmlFor='confirmPassword'>{t('createAccountForm.confirmPassword')}</Label>
                <TextInput id='create-confirm-password' name='confirmPassword' type='text' value={formData.confirmPassword} onChange={handleFormChange}/>

                <Button type='submit' onClick={handleSubmit}>{t('button.createAccount')}</Button>

            </Form>

                <p className="text-center">
                {t('createAccountForm.alreadyHaveAccount')}
                  <Link to='/'>{t('createAccountForm.signIn')}</Link>.
                </p>
        </>
    )
}