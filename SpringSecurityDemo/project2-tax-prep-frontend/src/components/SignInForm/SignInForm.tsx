import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

export default function SignInForm() {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('')

    // Updates the form data when the user changes an input
    const handleFormChange = (event : any) => {
        const { name, value } = event.target
        const newValue = value
        setFormData((prevState : any) => ({ ...prevState, [name]: newValue }))
        console.log('formData', formData);
    }

    const handleSubmit = async (e : any) => {
        e.preventDefault();
    
        try {
            const userData = await UserService.login(formData.email, formData.password)
            console.log(userData)
            if (userData.token) {
                localStorage.setItem('token', userData.token)
                localStorage.setItem('role', userData.role)
                navigate('/')
            }else{
                setError(userData.message)
            }
            
        } catch (error : any) {
            console.log(error)
            setError(error.message)
            setTimeout(()=>{
                setError('');
            }, 5000);
        }
    }

    return(
        <>
            <div id='create-new-account-setup'>{t('signInForm.signIn')}</div>

            <p className="text-center">
                {t('signInForm.noAccount')}
                  <Link to='/create-account'>{t('signInForm.createAccount')}</Link>.
                </p>

            {error && <p className="error-message">{error}</p>}
            <Form id='create-account-form' onSubmit={handleSubmit} >
                <Label htmlFor='email'>{t('signInForm.email')}</Label>
                <TextInput id='email' name='email' type='text' value={formData.email} onChange={handleFormChange}/>

                <Label htmlFor='password'>{t('signInForm.password')}</Label>
                <TextInput id='password' name='password' type='text' value={formData.password} onChange={handleFormChange}/>

                <Button type='submit' onClick={handleSubmit}>{t('button.signIn')}</Button>

            </Form>

            <div id='signup-or'>or</div>
            <button className="gsi-material-button">
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                    <div className="gsi-material-button-icon">
                    <svg className= "gsi-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" >
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                    </div>
                    <span className="gsi-material-button-contents">Sign in with Google</span>
                </div>
            </button>

        </>
    )
}