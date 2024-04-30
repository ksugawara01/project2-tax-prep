import { Label, TextInput, TextInputMask, Form, Button, ButtonGroup, Fieldset, DateInputGroup, FormGroup, Select, DateInput, DatePicker } from '@trussworks/react-uswds';
import './PersonalInformationForm.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import personalInformationService from '../../services/personal-information';
import { updatePersonalInformation } from '../../slices/personalInformationSlice';
import { useEffect, useState } from 'react';

 export default function PersonalInformationForm() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    // Select personal information from the store
    const personalInformation = useSelector((store : any) => store.personalInformation)

    const dispatch = useDispatch();

    const [formData, setFormData] = useState(personalInformation)

    // Updates the form data when the user changes an input
    const handleFormChange = (event : any) => {
        const { name, value } = event.target
        const newValue = value
        setFormData((prevState : any) => ({ ...prevState, [name]: newValue }))
    }

    const handleDateChange = (event : any) => {
        setFormData((prevState : any) => ({ ...prevState, ['birthDate']: event }))
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();

        console.log('submit', event)

        /*

        // Send a post request if there is no existing personal information
        if (formData.personalInformationId == null) {
            // Send post request to the backend to create the personal information the database
            personalInformationService.createPersonalInformation(formData)
            .then((newPersonalInformation) => {
                // update store
                dispatch(updatePersonalInformation(newPersonalInformation))
            })
            .catch((e) => {
                console.log('e', e)
            })
            // Send a put request if there is existing personal information
        } else {

        }
        
        */
    }

    const handleContinue = (event : any) => {
        event.preventDefault();
        // temporary
        dispatch(updatePersonalInformation(formData))
        console.log('continue', event);
        console.log('formData', formData)
        navigate('/financial-information');
    }

    return(
        <>
            <TrussStepIndicator personalStatus='current'/>

            <Form id='personal-form' onSubmit={handleSubmit} >
                <Label htmlFor='personal-first-name'>{t('personalInformationForm.firstName')}</Label>
                <TextInput id='personal-first-name' name='firstName' type='text' value={formData.firstName} onChange={handleFormChange}/>

                <Label htmlFor='personal-last-name'>{t('personalInformationForm.lastName')}</Label>
                <TextInput id='personal-last-name' name='lastName' type='text' value={formData.lastName} onChange={handleFormChange}/>

                <Label htmlFor='personal-street-address'>{t('personalInformationForm.streetAddress')}</Label>
                <TextInput id='personal-street-address' name='streetAddress' type='text' value={formData.streetAddress} onChange={handleFormChange}/>

                <Label htmlFor='personal-city'>{t('personalInformationForm.city')}</Label>
                <TextInput id='personal-city' name='city' type='text' value={formData.city} onChange={handleFormChange}/>

                <Label htmlFor='personal-state'>{t('personalInformationForm.state')}</Label>
                <TextInput id='personal-state' name='state' type='text' value={formData.state} onChange={handleFormChange}/>

                <Label htmlFor='personal-zip'>{t('personalInformationForm.zip')}</Label>
                <TextInputMask id='personal-zip' name='zip' type='text' mask='_____' pattern='^[0-9]{5}' value={formData.zip} onChange={handleFormChange}/>

                <FormGroup>
                    <Label
                        htmlFor="birthDate"
                        id="personal-birth-date-label"
                        >
                        {t('personalInformationForm.birthDate')}
                    </Label>
                    <div
                        className="usa-hint"
                        id="personal-birth-date-hint"
                    >
                        mm/dd/yyyy
                    </div>
                    <DatePicker
                        aria-describedby="personal-birth-date-hint"
                        aria-labelledby="personal-birth-date-label"
                        id="personal-birth-date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleDateChange}
                    />
                </FormGroup>

                <Label htmlFor='personal-ssn'>{t('personalInformationForm.ssn')}</Label>
                <TextInputMask id='personal-ssn' name='ssn' type='text' mask='___ __ ____' pattern='^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$' value={formData.ssn} onChange={handleFormChange}/>

                <ButtonGroup id='personal-button-group'>
                    <Button className='test-button' type='submit' onClick={handleContinue}>{t('button.continue')}</Button>
                </ButtonGroup>
            </Form>
        </>
    )
 }
