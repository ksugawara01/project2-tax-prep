import { Label, TextInput, Form, Button, Radio, Fieldset, ButtonGroup } from '@trussworks/react-uswds';
import { useNavigate } from 'react-router-dom'
import './FinancialInformationForm.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateFinancialInformation } from '../../slices/financialInformationSlice';
import financialInformationService from '../../services/financial-information';
import { motion } from 'framer-motion';


 export default function FinancialInformationForm() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    // Select personal information from the store
    const financialInformation = useSelector((store : any) => store.financialInformation)

    const dispatch = useDispatch();

    const [formData, setFormData] = useState(financialInformation)

    const currentUser = useSelector((store : any) => store.currentUser);

    // Get financial information from the database on mount, if no financial information exists for the current user then create it
    useEffect(() => {
        financialInformationService.getFinancialInformationByUserId(currentUser.userId)
        .then((response : any) => {
            // financial information exists
            if (response[1] === 200) {
                // if defaults are true then make the corresponsing field an empty string
                if (response[0].incomeW2Default) {
                    response[0].incomeW2 = '';
                }
                if (response[0].withholdingsW2Default) {
                    response[0].withholdingsW2 = '';
                }
                if (response[0].income1099Default) {
                    response[0].income1099 = '';
                }
                if (response[0].deductionsDefault) {
                    response[0].deductions = '';
                }
                if (response[0].marriedDefault) {
                    response[0].married = '';
                }
                if (response[0].standardDeductionDefault) {
                    response[0].standardDeduction = '';
                }
                if (response[0].dependentsDefault) {
                    response[0].dependents = '';
                }
                if (response[0].aotcDefault) {
                    response[0].aotc = '';
                }
                if (response[0].cleanEnergyDefault) {
                    response[0].cleanEnergy = '';
                }

                // update the store and the form data with the returned financial information
                dispatch(updateFinancialInformation(response[0]));
                setFormData(response[0]);

            // financial information does not exist
            } else if (response[1] === 204) {
                const newFinancialInformation = {
                    incomeW2: '',
                    withholdingsW2:'',
                    income1099: '',
                    deductions: '',
                    dependents: '',
                    married: false,
                    standardDeduction: false,
                    aotc: false,
                    cleanEnergy: false,
                    incomeW2Default: true,
                    withholdingsW2Default: true,
                    income1099Default: true,
                    deductionsDefault: true,
                    marriedDefault: true,
                    standardDeductionDefault: true,
                    dependentsDefault: true,
                    aotcDefault: true,
                    cleanEnergyDefault: true,
                    userId: currentUser.userId
                }

                // add new financial information to the database
                financialInformationService.createFinancialInformation(newFinancialInformation)
                .then((response : any) => {
                    // if defaults are true then make the corresponsing field an empty string
                    response.incomeW2 = '';
                    response.withholdingsW2 = '';
                    response.income1099 = '';
                    response.deductions = '';
                    response.married = '';
                    response.standardDeduction = '';
                    response.dependents = '';
                    response.aotc = '';
                    response.cleanEnergy = '';
                    // update the store and the form data with the newly created financial information
                    dispatch(updateFinancialInformation(response));
                    setFormData(response);
                })
            }
        })
    },[])

    // Updates the form data when the user changes an input
    const handleFormChange = (event : any) => {
        const { name, value } = event.target
        let newValue = value

        // Convert the string booleans to actual boolean values
        if (name === 'married') {
            if (value === "true") {
                newValue = true;
            } else if (value === "false") {
                newValue = false;
            }

        } else if (name === 'standardDeduction') {
            if (value === "true") {
                newValue = true;
            } else if (value === "false") {
                newValue = false;
            }
        } else if (name === 'aotc') {
            if (value === "true") {
                newValue = true;
            } else if (value === "false") {
                newValue = false;
            }
        }
        else if (name === 'cleanEnergy') {
            if (value === "true") {
                newValue = true;
            } else if (value === "false") {
                newValue = false;
            }
        }
        
        // Change the corresponding default boolean to false to indicate that the user has edited the information
        const nameDefault = name + 'Default';
        setFormData((prevState : any) => ({ ...prevState, [name]: newValue, [nameDefault]: false }));

    }
    
    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    const handleBack = (event : any) => {
        event.preventDefault();

        // if the user deletes a field then switch default back to true
        if (formData.incomeW2 === '') {
            formData.incomeW2Default = true;
        }
        if (formData.withholdingsW2 === '') {
            formData.withholdingsW2Default = true;
        }
        if (formData.income1099 === '') {
            formData.income1099Default = true;
        }
        if (formData.deductions === '') {
            formData.deductionsDefault = true;
        }
        if (formData.married === '') {
            formData.marriedDefault = true;
        }
        if (formData.standardDeduction === '') {
            formData.standardDeductionDefault = true;
        }
        if (formData.dependents === '') {
            formData.dependentsDefault = true;
        }
        if (formData.aotc === '') {
            formData.aotcDefault = true;
        }
        if (formData.cleanEnergy === '') {
            formData.cleanEnergyDefault = true;
        }

        financialInformationService.updateFinancialInformation(formData)
        .then(() => {
            dispatch(updateFinancialInformation(formData));
            navigate('/personal-information');
        })
        
    }

    const handleContinue = (event : any) => {
        event.preventDefault();

        // if the user deletes a field then switch default back to true
        if (formData.incomeW2 === '') {
            formData.incomeW2Default = true;
        }
        if (formData.withholdingsW2 === '') {
            formData.withholdingsW2Default = true;
        }
        if (formData.income1099 === '') {
            formData.income1099Default = true;
        }
        if (formData.deductions === '') {
            formData.deductionsDefault = true;
        }
        if (formData.married === '') {
            formData.marriedDefault = true;
        }
        if (formData.standardDeduction === '') {
            formData.standardDeductionDefault = true;
        }
        if (formData.dependents === '') {
            formData.dependentsDefault = true;
        }
        if (formData.aotc === '') {
            formData.aotcDefault = true;
        }
        if (formData.cleanEnergy === '') {
            formData.cleanEnergyDefault = true;
        }

        financialInformationService.updateFinancialInformation(formData)
        .then(() => {
            dispatch(updateFinancialInformation(formData));
            navigate('/review');
        })
    }

    return(
        <>
            <TrussStepIndicator personalStatus='complete' financialStatus='current'/>

            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1, transition: {duration: .4}}}
            >
                <Form id='financial-form' onSubmit={handleSubmit} >
                    <Label htmlFor='incomeW2'>{t('financialInformationForm.incomeW2')}</Label>
                    <TextInput id='financial-w2-income' name='incomeW2' type='number' value={formData.incomeW2} onChange={handleFormChange}/>

                    <Label htmlFor='withholdingsW2'>{t('financialInformationForm.withholdingsW2')}</Label>
                    <TextInput id='financial-w2-withholdings' name='withholdingsW2' type='number' value={formData.withholdingsW2} onChange={handleFormChange}/>

                    <Label htmlFor='income1099'>{t('financialInformationForm.income1099')}</Label>
                    <TextInput id='financial-1099-income' name='income1099' type='number' value={formData.income1099} onChange={handleFormChange}/>

                    <Label htmlFor='deductions'>{t('financialInformationForm.deductions')}</Label>
                    <TextInput id='financial-1099-deduction' name='deductions' type='number' value={formData.deductions} onChange={handleFormChange}/>

                    <Label htmlFor='dependents'>{t('financialInformationForm.dependents')}</Label>
                    <TextInput id='financial-credits-dependents' name='dependents' type='number' value={formData.dependents} onChange={handleFormChange}/>

                    <Fieldset id='financial-married-fieldset' className='radio-fieldset'>
                        <legend>{t('financialInformationForm.isMarried')}</legend>
                        <Radio id='single-radio' name='married' label={t('financialInformationForm.single')} value='false' checked={formData.married===false} onChange={handleFormChange}/>
                        <Radio id='married-radio' name='married' label={t('financialInformationForm.married')} value='true' checked={formData.married===true} onChange={handleFormChange}/>
                    </Fieldset>

                    <Fieldset id='financial-deduction-fieldset' className='radio-fieldset'>
                        <legend>{t('financialInformationForm.isStandardDeduction')}</legend>
                        <Radio id='standard-radio' name='standardDeduction' label={t('financialInformationForm.standard')} value='true'  checked={formData.standardDeduction===true} onChange={handleFormChange}/>
                        <Radio id='itemized-radio' name='standardDeduction' label={t('financialInformationForm.itemized')} value='false' checked={formData.standardDeduction===false} onChange={handleFormChange}/>
                    </Fieldset>

                    <Fieldset id='financial-aotc-fieldset' className='radio-fieldset'>
                        <legend>{t('financialInformationForm.aotc')}</legend>
                        <Radio id='aotc-yes-radio' name='aotc' label={t('financialInformationForm.yes')} value='true' checked={formData.aotc===true} onChange={handleFormChange}/>
                        <Radio id='aotc-no-radiox' name='aotc' label={t('financialInformationForm.no')} value='false' checked={formData.aotc===false} onChange={handleFormChange}/>
                    </Fieldset>

                    <Fieldset id='financial-clean-fieldset' className='radio-fieldset'>
                        <legend>{t('financialInformationForm.cleanEnergy')}</legend>
                        <Radio id='clean-yes-radio' name='cleanEnergy' label={t('financialInformationForm.yes')} value='true'  checked={formData.cleanEnergy===true} onChange={handleFormChange}/>
                        <Radio id='clean-no-radio' name='cleanEnergy' label={t('financialInformationForm.no')} value='false' checked={formData.cleanEnergy===false} onChange={handleFormChange}/>
                    </Fieldset>
                    
                    <ButtonGroup id='financial-button-group'>
                        <Button type='submit' outline onClick={handleBack}>{t('button.back')}</Button>
                        <Button type='submit' onClick={handleContinue}>{t('button.continue')}</Button>
                    </ButtonGroup>
                </Form>
            </motion.div>
        </>
    )
 }
