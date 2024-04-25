import { Label, TextInput, TextInputMask, Form, Button, ButtonGroup } from '@trussworks/react-uswds';
import './PersonalInformationForm.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

 export default function PersonalInformationForm() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    const handleContinue = () => {
        navigate('/financial-information')
    }

    return(
        <>
            <TrussStepIndicator personalStatus='current'/>

            <Form id='personal-form' onSubmit={handleSubmit} >
                <Label htmlFor='personal-first-name'>{t('personalInformationForm.firstName')}</Label>
                <TextInput id='personal-first-name' name='personal-first-name' type='text' />

                <Label htmlFor='personal-last-name'>{t('personalInformationForm.lastName')}</Label>
                <TextInput id='personal-last-name' name='personal-last-name' type='text' />

                <Label htmlFor='personal-street-address'>{t('personalInformationForm.streetAddress')}</Label>
                <TextInput id='personal-street-address' name='personal-street-address' type='text' />

                <Label htmlFor='personal-city'>{t('personalInformationForm.city')}</Label>
                <TextInput id='personal-city' name='personal-city' type='text' />

                <Label htmlFor='personal-state'>{t('personalInformationForm.state')}</Label>
                <TextInput id='personal-state' name='personal-state' type='text' />

                <Label htmlFor='personal-zip'>{t('personalInformationForm.zip')}</Label>
                <TextInputMask id='personal-zip' name='personal-zip' type='text' mask='_____-____' pattern='^[0-9]{5}(?:-[0-9]{4})?$'/>

                <Label htmlFor='personal-ssn'>{t('personalInformationForm.ssn')}</Label>
                <TextInputMask id='personal-ssn' name='personal-ssn' type='text' mask='___ __ ____' pattern='^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$' />

                <ButtonGroup id='personal-button-group'>
                    <Button className='test-button' type='button' onClick={handleContinue}>{t('button.continue')}</Button>
                </ButtonGroup>
            </Form>
        </>
    )
 }
