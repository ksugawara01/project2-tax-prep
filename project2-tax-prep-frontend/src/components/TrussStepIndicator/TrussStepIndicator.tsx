import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds'
import './TrussStepIndicator.css'
import { useTranslation } from 'react-i18next';

export default function TrussStepIndicator(props: any) {
    const { personalStatus, financialStatus, reviewStatus, resultsStatus } = props;

    const { t } = useTranslation();

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
                    label={t('stepIndicator.personalInformation')}
                    status={personalStatus}
                />
                <StepIndicatorStep
                    label={t('stepIndicator.financialInformation')}
                    status={financialStatus}
                />
                <StepIndicatorStep
                    label={t('stepIndicator.reviewAndSubmit')}
                    status={reviewStatus}
                />
                <StepIndicatorStep
                    label={t('stepIndicator.results')}
                    status={resultsStatus}
                />
            </StepIndicator>
        </div>
    )
}
