import { useState, useEffect } from 'react'

import './ResultsPage.css'

import Confetti from "react-dom-confetti"
import TrussStepIndicator from "../TrussStepIndicator/TrussStepIndicator"
import { useTranslation } from 'react-i18next'

export default function ResultsPage() {

    const [isConfettiActive, setIsConfettiActive] = useState(false)

    const { t } = useTranslation();

    // Start confetti animation on mount
    useEffect(() => {
        setIsConfettiActive(true)
    }, [])

    // Confetti Settings
    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 60,
        elementCount: 300,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 1,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };

    return(
        <>
            <TrussStepIndicator personalStatus='complete' financialStatus='complete' reviewStatus='complete' resultsStatus='current'/>
            <Confetti active={ isConfettiActive } config={ config }/>
            <div id='result-congratulations'>{t('results.congratulations')}</div>
            <div className='result-categories'>{t('results.taxableIncome')}</div>
            <div>placeholder</div>
            <div className='result-categories'>{t('results.taxesOwed')}</div>
            <div>placeholder</div>
            <div className='result-categories'>{t('results.withholdings')}</div>
            <div>placeholder</div>
            <div className='result-categories'>{t('results.federalRefund')}</div>
            <div id='refund-amount'>$2,452</div>
        </>
    )
}