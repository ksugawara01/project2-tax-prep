import { Label, TextInput, TextInputMask, Form, Button, ButtonGroup } from "@trussworks/react-uswds";
import './PersonalInformationForm.css'
import TrussStepIndicator from "../TrussStepIndicator/TrussStepIndicator";


 export default function PersonalInformationForm() {

    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    return(
        <>
            <TrussStepIndicator personalStatus='current'/>

            <Form id='personal-form' onSubmit={handleSubmit} >
                <Label htmlFor="personal-first-name">First Name</Label>
                <TextInput id="personal-first-name" name="personal-first-name" type="text" />

                <Label htmlFor="personal-last-name">Last Name</Label>
                <TextInput id="personal-last-name" name="personal-last-name" type="text" />

                <Label htmlFor="personal-street-address">Street Address</Label>
                <TextInput id="personal-street-address" name="personal-street-address" type="text" />

                <Label htmlFor="personal-city">City</Label>
                <TextInput id="personal-city" name="personal-city" type="text" />

                <Label htmlFor="personal-state">State</Label>
                <TextInput id="personal-state" name="personal-state" type="text" />

                <Label htmlFor="personal-zip">Zip Code</Label>
                <TextInputMask id="personal-zip" name="personal-zip" type="text" mask="_____-____" pattern="^[0-9]{5}(?:-[0-9]{4})?$"/>

                <Label htmlFor="personal-ssn">Social Security Number</Label>
                <TextInputMask id="personal-ssn" name="personal-ssn" type="text" mask="___ __ ____" pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$" />

                <ButtonGroup id="personal-button-group">
                    <Button className="test-button" type="button">Continue</Button>
                </ButtonGroup>
            </Form>
        </>
    )
 }
