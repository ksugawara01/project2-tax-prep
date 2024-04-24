import { Label, TextInput, Form, Button, Radio, StepIndicator, Fieldset, ButtonGroup} from '@trussworks/react-uswds';
import { Link } from 'react-router-dom'
import './FinancialInformationForm.css'
import TrussStepIndicator from '../TrussStepIndicator/TrussStepIndicator';
import { useTranslation } from 'react-i18next';


 export default function FinancialInformationForm() {

    const { t } = useTranslation();

    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    return(
        <>
            <TrussStepIndicator personalStatus='complete' financialStatus='current'/>
            <Form id='financial-form' onSubmit={handleSubmit} >
                <Label htmlFor='financial-w2-income'>{t('financialInformationForm.incomeW2')}</Label>
                <TextInput id='financial-w2-income' name='financial-w2-income' type='number' />

                <Label htmlFor='financial-w2-withholdings'>{t('financialInformationForm.withholdingsW2')}</Label>
                <TextInput id='financial-w2-withholdings' name='financial-w2-withholdings' type='number' />

                <Label htmlFor='financial-1099-income'>{t('financialInformationForm.income1099')}</Label>
                <TextInput id='financial-1099-income' name='financial-1099-income' type='text' />

                <Label htmlFor='financial-1099-deduction'>{t('financialInformationForm.deductions')}</Label>
                <TextInput id='financial-1099-deduction' name='financial-1099-deduction' type='text' />

                <Fieldset id='financial-married-fieldset'>
                    <legend>{t('financialInformationForm.isMarried')}</legend>
                    <Radio id='single-radio' name='is-married-radio' label={t('financialInformationForm.single')} value='false'/>
                    <Radio id='married-radio' name='is-married-radio' label={t('financialInformationForm.married')} value='true'/>
                </Fieldset>

                <Fieldset id='financial-deduction-fieldset'>
                    <legend>{t('financialInformationForm.isStandardDeduction')}</legend>
                    <Radio id='standard-radio' name='deduction-radio' label={t('financialInformationForm.standard')} value='true'/>
                    <Radio id='itemized-radio' name='deduction-radio' label={t('financialInformationForm.itemized')} value='false'/>
                </Fieldset>
                
                <ButtonGroup id='financial-button-group'>
                    <Button className='test-button' type='button' outline>{t('button.back')}</Button>
                    <Button className='test-button' type='button'>{t('button.continue')}</Button>
                </ButtonGroup>
            </Form>
        </>
    )
 }
