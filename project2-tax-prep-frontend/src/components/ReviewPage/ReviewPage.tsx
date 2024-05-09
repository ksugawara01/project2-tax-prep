import { Button, ButtonGroup, Table, Alert } from '@trussworks/react-uswds';
import { useNavigate } from 'react-router-dom'
import './ReviewPage.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import personalInformationService from '../../services/personal-information';
import financialInformationService from '../../services/financial-information';
import { updatePersonalInformation } from '../../slices/personalInformationSlice';
import { updateFinancialInformation } from '../../slices/financialInformationSlice';
import { motion } from 'framer-motion';

export default function ReviewPage() {

    // Select personal information from the store
    const personalInformation = useSelector((store : any) => store.personalInformation)

    const financialInformation = useSelector((store : any) => store.financialInformation)

    const dispatch = useDispatch();

    //temporary
    const userId = 4;

    useEffect(() => {
        personalInformationService.getPersonalInformationByUserId(userId)
            .then((personalInformation : any) => {
                dispatch(updatePersonalInformation(personalInformation[0]));
            })
        
        financialInformationService.getFinancialInformationByUserId(userId)
            .then((response) => {
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
                dispatch(updateFinancialInformation(response[0]))
            })
    },[])


    const containsFirstName = (personalInformation.firstName !== '' ? true : false)
    const containsLastName = (personalInformation.lastName !== '' ? true : false)
    const containsStreetAddress = (personalInformation.streetAddress !== '' ? true : false)
    const containsCity = (personalInformation.city !== '' ? true : false)
    const containsState = (personalInformation.stateName !== '' ? true : false)
    const containsZip = (personalInformation.zip !== '' ? true : false)
    const containsBirthDate = (personalInformation.birthDate !== '' ? true : false)
    const containsSsn = (personalInformation.ssn !== '' ? true : false)
    const hasAllPersonalRequirements = containsFirstName && containsLastName && containsStreetAddress && containsCity && containsState && containsZip && containsBirthDate && containsSsn

    const personalRequirementsAlert = <Alert className='alert' type='error' heading='Personal Information Requirements' headingLevel='h4' validation>
        <ul>
            {containsFirstName ? null : <li>You must enter your First Name</li>}
            {containsLastName ? null : <li>You must enter your Last Name</li>}
            {containsStreetAddress ? null : <li>You must enter your Street Address</li>}
            {containsCity ? null : <li>You must enter your City</li>}
            {containsState ? null : <li>You must enter your State</li>}
            {containsZip ? null : <li>You must enter your Zip Code</li>}
            {containsBirthDate ? null : <li>You must enter your Birth Date</li>}
            {containsSsn ? null : <li>You must enter your Social Security Number</li>}
        </ul>
    </Alert>

    const containsIncomeW2 = ((financialInformation.incomeW2 !== '') ? true : false)
    const containsWithholdingsW2 = (financialInformation.withholdingsW2 !== '' ? true : false)
    const containsIncome1099 = (financialInformation.income1099 !== '' ? true : false)
    const containsDeductions = (financialInformation.deductions !== '' ? true : false)
    const containsDependents = (financialInformation.dependents !== '' ? true : false)
    const containsMarried = (financialInformation.married !== '' ? true : false)
    const containsStandardDeduction = (financialInformation.standardDeduction !== '' ? true : false)
    const containsAotc = (financialInformation.aotc !== '' ? true : false)
    const containsCleanEnergy = (financialInformation.cleanEnergy !== '' ? true : false)
    
    const hasAllFinancialRequirements = containsIncomeW2 && containsWithholdingsW2 && containsIncome1099 && containsDeductions && containsDependents && containsMarried && containsStandardDeduction && containsAotc && containsCleanEnergy

    const financialRequirementsAlert = <Alert className='alert' type='error' heading='Financial Information Requirements' headingLevel='h4' validation>
        <ul>
            {containsIncomeW2 ? null : <li>You must enter your W2 Income</li>}
            {containsWithholdingsW2 ? null : <li>You must enter your W2 Withholdings</li>}
            {containsIncome1099 ? null : <li>You must enter your 1099 Income</li>}
            {containsDeductions ? null : <li>You must enter your 1099 Deductions</li>}
            {containsDependents ? null : <li>You must enter your number of dependents</li>}
            {containsMarried ? null : <li>You must enter your Marital Status</li>}
            {containsStandardDeduction ? null : <li>You must enter your Deduction Type</li>}
            {containsMarried ? null : <li>You must enter your American Oppurtunity Tax Credit information</li>}
            {containsMarried ? null : <li>You must enter your Clean Energy Tax Credit information</li>}
        </ul>
    </Alert>



    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/financial-information')
    }

    const handleContinue = () => {
        navigate('/results')
    }

    const handlePersonalEdit = () => {
        navigate('/personal-information')
    }

    const handleFinancialEdit = () => {
        navigate('/financial-information')
    }

    // Converts the married boolean into a string for the information review
    const maritalStatus = (married : any) => {
        if (married === '') {
            return '-';
        } else if (married === true) {
            return 'Married';
        } else if (married === false) {
            return 'Single';
        }
    }

    // Converts the standardDeduction boolean into a string for the information review
    const deductionType = (standardDeduction : any) => {
        if (standardDeduction === '') {
            return '-';
        } else if (standardDeduction === true) {
            return 'Standard';
        } else if (standardDeduction === false) {
            return 'Itemized';
        }
    }

    // Converts the standardDeduction boolean into a string for the information review
    const aotcStatus = (aotc : any) => {
        if (aotc === '') {
            return '-';
        } else if (aotc === true) {
            return 'Yes';
        } else if (aotc === false) {
            return 'No';
        }
    }

    // Converts the standardDeduction boolean into a string for the information review
    const cleanEnergyStatus = (cleanEnergy : any) => {
        if (cleanEnergy === '') {
            return '-';
        } else if (cleanEnergy === true) {
            return 'Yes';
        } else if (cleanEnergy === false) {
            return 'No';
        }
    }

    return(<>
        <TrussStepIndicator personalStatus='complete' financialStatus='complete' reviewStatus='current'/>
        <motion.div className='flex-column-center' id='review-motion'
                initial={{opacity:0}}
                animate={{opacity:1, transition: {duration: .4}}}
            >

            

            <h1>{t('review.reviewInformation')}</h1>

            {hasAllPersonalRequirements ? null : personalRequirementsAlert}

            <Table bordered={false} fullWidth>
                <thead>
                    <tr>
                        <th>{t('review.personalInformation')} <Button className='review-edit-button' type='button' onClick={handlePersonalEdit} >{t('button.edit')}</Button></th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{t('personalInformationForm.firstName')}</td>
                        <td>{personalInformation.firstName === '' ? '-' : personalInformation.firstName}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.lastName')}</td>
                        <td>{personalInformation.lastName === '' ? '-' : personalInformation.lastName}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.streetAddress')}</td>
                        <td>{personalInformation.streetAddress === '' ? '-' : personalInformation.streetAddress}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.city')}</td>
                        <td>{personalInformation.city === '' ? '-' : personalInformation.city}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.state')}</td>
                        <td>{personalInformation.stateName === '' ? '-' : personalInformation.stateName}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.zip')}</td>
                        <td>{personalInformation.zip === '' ? '-' : personalInformation.zip}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.birthDate')}</td>
                        <td>{personalInformation.birthDate === '' ? '-' : personalInformation.birthDate}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.ssn')}</td>
                        <td>{personalInformation.ssn === '' ? '-' : personalInformation.ssn}</td>
                    </tr>

                </tbody>

            </Table>

            {hasAllFinancialRequirements ? null : financialRequirementsAlert}

            <Table bordered={false} fullWidth>
                <thead>
                    <tr>
                        <th>{t('review.financialInformation')} <Button className='review-edit-button' type='button' onClick={handleFinancialEdit} >{t('button.edit')}</Button></th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{t('financialInformationForm.incomeW2')}</td>
                        <td>{financialInformation.incomeW2 === '' ? '-' : '$'}{financialInformation.incomeW2}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.withholdingsW2')}</td>
                        <td>{financialInformation.withholdingsW2 === '' ? '-' : '$'}{financialInformation.withholdingsW2}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.income1099')}</td>
                        <td>{financialInformation.income1099 === '' ? '-' : '$'}{financialInformation.income1099}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.deductions')}</td>
                        <td>{financialInformation.deductions === '' ? '-' : '$'}{financialInformation.deductions}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.dependents')}</td>
                        <td>{financialInformation.dependents === '' ? '-' : ''}{financialInformation.dependents}</td>
                    </tr>
                    <tr>
                        <td>{t('review.maritalStatus')}</td>
                        <td>{maritalStatus(financialInformation.married)}</td>
                    </tr>
                    <tr>
                        <td>{t('review.deductionType')}</td>
                        <td>{deductionType(financialInformation.standardDeduction)}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.aotc')}</td>
                        <td>{aotcStatus(financialInformation.aotc)}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.cleanEnergy')}</td>
                        <td>{cleanEnergyStatus(financialInformation.cleanEnergy)}</td>
                    </tr>

                </tbody>

            </Table>
                
                <ButtonGroup id='financial-button-group'>
                    <Button type='button' outline onClick={handleBack}>{t('button.back')}</Button>
                    {
                        (hasAllFinancialRequirements && hasAllPersonalRequirements) ?
                        <Button type='button' onClick={handleContinue}>{t('button.continue')}</Button> :
                        <Button type='button' disabled>{t('button.continue')}</Button>
                    }
                </ButtonGroup>

        </motion.div>
        </>
    )
 }
