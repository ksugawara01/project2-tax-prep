import { Link } from 'react-router-dom'
export default function CreateAccountForm() {
    return(
        <>
            <div id='financial-information-form-title'>New Account Setup</div>
            <div id='financial-information-form-existing-account'>Do you have an existing account? <Link to='/'>Sign In</Link></div>
        </>
    )
}