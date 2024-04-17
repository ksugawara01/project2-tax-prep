import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds"
import './TrussStepIndicator.css'

export default function TrussStepIndicator(props: any) {
    const { personalStatus, financialStatus, reviewStatus, resultsStatus } = props;

    return(
        <div id='step-indicator-container'>
            <StepIndicator
            headingLevel='h4'
            ofText='of'
            stepText='Step'
            centered={true}
            counters='small'
            >
                <StepIndicatorStep
                    label="Personal information"
                    status={personalStatus}
                />
                <StepIndicatorStep
                    label="Financial Information"
                    status={financialStatus}
                />
                <StepIndicatorStep
                    label="Review and Submit"
                    status={reviewStatus}
                />
                <StepIndicatorStep
                    label="Results"
                    status={resultsStatus}
                />
            </StepIndicator>
        </div>
    )
}
