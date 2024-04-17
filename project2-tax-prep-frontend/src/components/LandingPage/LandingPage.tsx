import { Button } from "@trussworks/react-uswds";
import './LandingPage.css'
import bankIcon from '../../assets/bank.png'

export default function LandingPage() {

    return(
        <>
            <img id='bank-icon' src={bankIcon} alt="icon of a cartoon bank"/>
            <div id='free-return-text'>Free Federal Return for Everyone</div>
            <div id='e-file-text'>E-File directly to the IRS</div>
            <Button id='landing-page-button' type="submit">Start 2023 Return</Button>
        </>
    )
}