import { Label, TextInput, Form, Button, Radio, StepIndicator, Fieldset, ButtonGroup, Table } from '@trussworks/react-uswds';
import { Link, useNavigate } from 'react-router-dom'
import './ReviewPage.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


 export default function ReviewPage() {

    // Select personal information from the store
    const personalInformation = useSelector((store : any) => store.personalInformation)

    const financialInformation = useSelector((store : any) => store.financialInformation)

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
                        <td>{t('personalInformationForm.ssn')}</td>
                        <td>{personalInformation.ssn}</td>
                    </tr>

                </tbody>

            </Table>

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
                    <Button className='test-button' type='button' outline onClick={handleBack}>{t('button.back')}</Button>
                    <Button className='test-button' type='button' onClick={handleContinue}>{t('button.continue')}</Button>
                </ButtonGroup>

        </div>
    )
 }
