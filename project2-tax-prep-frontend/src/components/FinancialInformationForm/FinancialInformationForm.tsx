import { Label, TextInput, Form, Button, Radio, StepIndicator, Fieldset, ButtonGroup} from "@trussworks/react-uswds";
import { Link } from 'react-router-dom'
import './FinancialInformationForm.css'
import TrussStepIndicator from "../TrussStepIndicator/TrussStepIndicator";


 export default function FinancialInformationForm() {

    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    return(
        <>
            <TrussStepIndicator personalStatus='complete' financialStatus='current'/>
            <Form id='financial-form' onSubmit={handleSubmit} >
                <Label htmlFor="financial-w2-income">W2 Income</Label>
                <TextInput id="financial-w2-income" name="financial-w2-income" type="number" />

                <Label htmlFor="financial-w2-withholdings">W2 Withholdings</Label>
                <TextInput id="financial-w2-withholdings" name="financial-w2-withholdings" type="number" />

                <Label htmlFor="financial-1099-income">1099 Income</Label>
                <TextInput id="financial-1099-income" name="financial-1099-income" type="text" />

                <Label htmlFor="financial-1099-deduction">1099 Deductions</Label>
                <TextInput id="financial-1099-deduction" name="financial-1099-deduction" type="text" />

                <Fieldset id='financial-married-fieldset'>
                    <legend>Are you single or married?</legend>
                    <Radio id="single-radio" name="is-married-radio" label="Single" value="single"/>
                    <Radio id="married-radio" name="is-married-radio" label="Married" value="married"/>
                </Fieldset>

                <Fieldset id='financial-deduction-fieldset'>
                    <legend>Standard or Itemized Deduction?</legend>
                    <Radio id="standard-radio" name="deduction-radio" label="Standard" value="standard"/>
                    <Radio id="itemized-radio" name="deduction-radio" label="Itemized" value="itemized"/>
                </Fieldset>
                
                <ButtonGroup id="financial-button-group">
                    <Button className="test-button" type="button" outline>Back</Button>
                    <Button className="test-button" type="button">Continue</Button>
                </ButtonGroup>
            </Form>
        </>
    )
 }
