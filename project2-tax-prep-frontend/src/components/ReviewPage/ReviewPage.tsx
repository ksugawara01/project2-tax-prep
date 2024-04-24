import { Label, TextInput, Form, Button, Radio, StepIndicator, Fieldset, ButtonGroup, Table } from '@trussworks/react-uswds';
import { Link } from 'react-router-dom'
import './ReviewPage.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';


 export default function ReviewPage() {

    const { t } = useTranslation();

    return(
        <div className='flex-column-center'>
            <TrussStepIndicator personalStatus='complete' financialStatus='complete' reviewStatus='current'/>
            <h1>{t('review.reviewInformation')}</h1>
            <Table bordered={false} fullWidth>
                <thead>
                    <tr>
                        <th>{t('review.personalInformation')} <Button className='review-edit-button' type='button'>{t('button.edit')}</Button></th>

                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{t('personalInformationForm.firstName')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.lastName')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.streetAddress')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.city')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.state')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.zip')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('personalInformationForm.ssn')}</td>
                        <td>Placeholder</td>
                    </tr>

                </tbody>

            </Table>

            <Table bordered={false} fullWidth>
                <thead>
                    <tr>
                        <th>{t('review.financialInformation')} <Button className='review-edit-button' type='button'>{t('button.edit')}</Button></th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{t('financialInformationForm.incomeW2')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.withholdingsW2')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.income1099')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('financialInformationForm.deductions')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('review.maritalStatus')}</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>{t('review.deductionType')}</td>
                        <td>Placeholder</td>
                    </tr>

                </tbody>

            </Table>
                
                <ButtonGroup id='financial-button-group'>
                    <Button className='test-button' type='button' outline>{t('button.back')}</Button>
                    <Button className='test-button' type='button'>{t('button.continue')}</Button>
                </ButtonGroup>

        </div>
    )
 }
