import { Label, TextInput, Form, Button, Radio, StepIndicator, Fieldset, ButtonGroup, Table } from "@trussworks/react-uswds";
import { Link } from 'react-router-dom'
import './ReviewPage.css'
import TrussStepIndicator from "../TrussStepIndicator/TrussStepIndicator";


 export default function ReviewPage() {

    return(
        <div className='flex-column-center'>
            <TrussStepIndicator personalStatus='complete' financialStatus='complete' reviewStatus='current'/>
            <h1>Review your information</h1>
            <Table bordered={false} fullWidth>
                <thead>
                    <tr>
                        <th>Personal Information <Button className='review-edit-button' type="button">Edit</Button></th>

                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>Street Address</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>Zip Code</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>Social Security Number</td>
                        <td>Placeholder</td>
                    </tr>

                </tbody>

            </Table>

            <Table bordered={false} fullWidth>
                <thead>
                    <tr>
                        <th>Financial Information <Button className='review-edit-button' type="button">Edit</Button></th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>W2 Income</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>W2 Withholdings</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>1099 Income</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>1099 Deductions</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>Marital Status</td>
                        <td>Placeholder</td>
                    </tr>
                    <tr>
                        <td>Deduction type</td>
                        <td>Placeholder</td>
                    </tr>

                </tbody>

            </Table>
                
                <ButtonGroup id="financial-button-group">
                    <Button className="test-button" type="button" outline>Back</Button>
                    <Button className="test-button" type="button">Continue</Button>
                </ButtonGroup>

        </div>
    )
 }
