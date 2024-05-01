import { Label, TextInput, Form, Button, Radio, StepIndicator, Fieldset, ButtonGroup, Table, Alert } from '@trussworks/react-uswds';
import { Link, useNavigate } from 'react-router-dom'
import './ReviewPage.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


 export default function ReviewPage() {

    // Select personal information from the store
    const personalInformation = useSelector((store : any) => store.personalInformation)

    const financialInformation = useSelector((store : any) => store.financialInformation)

    const containsFirstName = (personalInformation.firstName !== '' ? true : false)
    const containsLastName = (personalInformation.lastName !== '' ? true : false)
    const containsStreetAddress = (personalInformation.streetAddress !== '' ? true : false)
    const containsCity = (personalInformation.city !== '' ? true : false)
    const containsState = (personalInformation.state !== '' ? true : false)
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
    const containsIsMarried = (financialInformation.isMarried !== '' ? true : false)
    const containsIsStandardDeduction = (financialInformation.isStandardDeduction !== '' ? true : false)
    const hasAllFinancialRequirements = containsIncomeW2 && containsWithholdingsW2 && containsIncome1099 && containsDeductions && containsIsMarried && containsIsStandardDeduction

    const financialRequirementsAlert = <Alert className='alert' type='error' heading='Financial Information Requirements' headingLevel='h4' validation>
        <ul>
            {containsIncomeW2 ? null : <li>You must enter your W2 Income</li>}
            {containsWithholdingsW2 ? null : <li>You must enter your W2 Withholdings</li>}
            {containsIncome1099 ? null : <li>You must enter your 1099 Income</li>}
            {containsDeductions ? null : <li>You must enter your 1099 Deductions</li>}
            {containsIsMarried ? null : <li>You must enter your Marital Status</li>}
            {containsIsStandardDeduction ? null : <li>You must enter your Deduction Type</li>}
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

    // Converts the isMarried boolean into a string for the information review
    const maritalStatus = (isMarried : any) => {
        if (isMarried === '') {
            return '';
        } else if (isMarried === true) {
            return 'Married';
        } else if (isMarried === false) {
            return 'Single';
        }
    }

    // Converts the isStandardDeduction boolean into a string for the information review
    const deductionType = (isStandardDeduction : any) => {
        if (isStandardDeduction === '') {
            return '';
        } else if (isStandardDeduction === true) {
            return 'Standard';
        } else if (isStandardDeduction === false) {
            return 'Itemized';
        }
    }

    return(
        <div className='flex-column-center'>
            <TrussStepIndicator personalStatus='complete' financialStatus='complete' reviewStatus='current'/>
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
                        <td>{personalInformation.firstName}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.lastName')}</td>
                        <td>{personalInformation.lastName}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.streetAddress')}</td>
                        <td>{personalInformation.streetAddress}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.city')}</td>
                        <td>{personalInformation.city}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.state')}</td>
                        <td>{personalInformation.state}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.zip')}</td>
                        <td>{personalInformation.zip}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.birthDate')}</td>
                        <td>{personalInformation.birthDate}</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.ssn')}</td>
                        <td>{personalInformation.ssn}</td>
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
                        <td>{financialInformation.incomeW2}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.withholdingsW2')}</td>
                        <td>{financialInformation.withholdingsW2}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.income1099')}</td>
                        <td>{financialInformation.income1099}</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.deductions')}</td>
                        <td>{financialInformation.deductions}</td>
                    </tr>
                    <tr>
                        <td>{t('review.maritalStatus')}</td>
                        <td>{maritalStatus(financialInformation.isMarried)}</td>
                    </tr>
                    <tr>
                        <td>{t('review.deductionType')}</td>
                        <td>{deductionType(financialInformation.isStandardDeduction)}</td>
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

        </div>
    )
 }
