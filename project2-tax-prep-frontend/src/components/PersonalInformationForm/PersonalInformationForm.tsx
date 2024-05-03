import { Label, TextInput, TextInputMask, Form, Button, ButtonGroup, FormGroup, DatePicker, ErrorMessage } from '@trussworks/react-uswds';
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

    // Regular Expressions
    const birthDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    const ssnRegex = /^\d{3} \d{2} \d{4}$/;
    const zipRegex = /^\d{5}$/;

    // Check if form data matches the regular expressions
    const hasBirthDateError = (!birthDateRegex.test(formData.birthDate)) && formData.birthDate !== '';
    const hasSsnError = (!ssnRegex.test(formData.ssn)) && formData.ssn !== '';
    const hasZipError = (!zipRegex.test(formData.zip)) && formData.zip !== '';

    // temporary
    const userId = 4;

    // Get personal information from the database on mount, if no personal information exists for the current user then create it
    useEffect(() => {
        personalInformationService.getPersonalInformationByUserId(userId)
        .then((response : any) => {
            // personal information exists
            if (response[1] === 200) {
                // update the store and the form data with the returned personal information
                dispatch(updatePersonalInformation(response[0]));
                setFormData(response[0]);

            // personal information does not exist
            } else if (response[1] === 204) {
                const newPersonalInformation = {
                    firstName: '',
                    lastName: '',
                    streetAddress: '',
                    city: '',
                    stateName: '',
                    zip: '',
                    birthDate: '',
                    ssn: '',
                    userId: userId
                }
                // add new personal information to the database
                personalInformationService.createPersonalInformation(newPersonalInformation)
                .then((response : any) => {
                    // update the store and the form data with the newly created personal information
                    dispatch(updatePersonalInformation(response));
                    setFormData(response);
                })
            }
        })
    },[])

    // Updates the form data when the user changes an input
    const handleFormChange = (event : any) => {
        const { name, value } = event.target
        const newValue = value
        setFormData((prevState : any) => ({ ...prevState, [name]: newValue }))
        console.log('formData', formData);
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
            formData.userId = //get userId of currently logged in user
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

        personalInformationService.updatePersonalInformation(formData)
        .then(() => {
            dispatch(updatePersonalInformation(formData));
            navigate('/financial-information');
        })
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
                <TextInput id='personal-state' name='stateName' type='text' value={formData.stateName} onChange={handleFormChange}/>

                <FormGroup error={hasZipError} >
                    <Label htmlFor='personal-zip'>{t('personalInformationForm.zip')}</Label>
                    {hasZipError ? <ErrorMessage >Zip Code must be 5 digits</ErrorMessage> : null}
                    <TextInputMask id='personal-zip' name='zip' type='text' mask='_____' pattern='^[0-9]{5}' value={formData.zip} onChange={handleFormChange}/>
                </FormGroup>

                <FormGroup error={hasBirthDateError}>
                    <Label
                        htmlFor="birthDate"
                        id='personal-birth-date-label'
                        >
                        {t('personalInformationForm.birthDate')}
                    </Label>
                    <div
                        className='usa-hint'
                        id='personal-birth-date-hint'
                    >
                        mm/dd/yyyy
                    </div>
                    {hasBirthDateError ? <ErrorMessage >Birth Date must be in mm/dd/yyyy format</ErrorMessage> : null}
                    <DatePicker
                        aria-describedby='personal-birth-date-hint'
                        aria-labelledby='personal-birth-date-label'
                        id='personal-birth-date'
                        name='birthDate'
                        defaultValue='01/12/1990'
                        onChange={handleDateChange}
                    />
                </FormGroup>

                <FormGroup error={hasSsnError} >
                    <Label htmlFor='personal-ssn'>{t('personalInformationForm.ssn')}</Label>
                    {hasSsnError ? <ErrorMessage >Social Security Number must be 9 digits</ErrorMessage> : null}
                    <TextInputMask id='personal-ssn' name='ssn' type='text' mask='___ __ ____' pattern='^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$' value={formData.ssn} onChange={handleFormChange}/>
                </FormGroup>
                <ButtonGroup id='personal-button-group'>
                    {
                        (!hasBirthDateError && !hasSsnError && !hasZipError) ?
                        <Button type='button' onClick={handleContinue}>{t('button.continue')}</Button> :
                        <Button type='button' disabled>{t('button.continue')}</Button>
                    }
                </ButtonGroup>
            </Form>
        </>
    )
 }
