import { Label, TextInput, Form, Button, Radio, StepIndicator, Fieldset, ButtonGroup} from '@trussworks/react-uswds';
import { Link, useNavigate } from 'react-router-dom'
import './FinancialInformationForm.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateFinancialInformation } from '../../slices/financialInformationSlice';


 export default function FinancialInformationForm() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    // Select personal information from the store
    const financialInformation = useSelector((store : any) => store.financialInformation)

    const dispatch = useDispatch();

    const [formData, setFormData] = useState(financialInformation)

    // Convert isMarried and isStandardDeduction from strings to boolean values
    useEffect(() => {
        if (formData.isMarried === "true") {
            formData.isMarried = true;
        } else if (formData.isMarried === "false") {
            formData.isMarried = false;
        }

        if (formData.isStandardDeduction === "true") {
            formData.isStandardDeduction = true;
        } else if (formData.isStandardDeduction === "false") {
            formData.isStandardDeduction = false;
        }
        console.log('formData', formData)
    }, [formData.isMarried, formData.isStandardDeduction])

    // Updates the form data when the user changes an input
    const handleFormChange = (event : any) => {
        const { name, value } = event.target
        const newValue = value
        setFormData((prevState : any) => ({ ...prevState, [name]: newValue }))
    }
    
    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    const handleBack = (event : any) => {
        event.preventDefault();
        // temporary
        dispatch(updateFinancialInformation(formData))
        navigate('/personal-information')
    }

    const handleContinue = (event : any) => {
        event.preventDefault();
        // temporary
        dispatch(updateFinancialInformation(formData))
        navigate('/review')
    }

    return(
        <>
            <TrussStepIndicator personalStatus='complete' financialStatus='current'/>
            <Form id='financial-form' onSubmit={handleSubmit} >
                <Label htmlFor='incomeW2'>{t('financialInformationForm.incomeW2')}</Label>
                <TextInput id='financial-w2-income' name='incomeW2' type='number' value={formData.incomeW2} onChange={handleFormChange}/>

                <Label htmlFor='withholdingsW2'>{t('financialInformationForm.withholdingsW2')}</Label>
                <TextInput id='financial-w2-withholdings' name='withholdingsW2' type='number' value={formData.withholdingsW2} onChange={handleFormChange}/>

                <Label htmlFor='income1099'>{t('financialInformationForm.income1099')}</Label>
                <TextInput id='financial-1099-income' name='income1099' type='number' value={formData.income1099} onChange={handleFormChange}/>

                <Label htmlFor='deductions'>{t('financialInformationForm.deductions')}</Label>
                <TextInput id='financial-1099-deduction' name='deductions' type='number' value={formData.deductions} onChange={handleFormChange}/>

                <Fieldset id='financial-married-fieldset'>
                    <legend>{t('financialInformationForm.isMarried')}</legend>
                    <Radio id='single-radio' name='isMarried' label={t('financialInformationForm.single')} value='false' defaultChecked={formData.isMarried===false} onChange={handleFormChange}/>
                    <Radio id='married-radio' name='isMarried' label={t('financialInformationForm.married')} value='true' defaultChecked={formData.isMarried===true} onChange={handleFormChange}/>
                </Fieldset>

                <Fieldset id='financial-deduction-fieldset'>
                    <legend>{t('financialInformationForm.isStandardDeduction')}</legend>
                    <Radio id='standard-radio' name='isStandardDeduction' label={t('financialInformationForm.standard')} value='true'  defaultChecked={formData.isStandardDeduction===true} onChange={handleFormChange}/>
                    <Radio id='itemized-radio' name='isStandardDeduction' label={t('financialInformationForm.itemized')} value='false' defaultChecked={formData.isStandardDeduction===false} onChange={handleFormChange}/>
                </Fieldset>
                
                <ButtonGroup id='financial-button-group'>
                    <Button type='submit' outline onClick={handleBack}>{t('button.back')}</Button>
                    <Button type='submit' onClick={handleContinue}>{t('button.continue')}</Button>
                </ButtonGroup>
            </Form>
        </>
    )
 }
