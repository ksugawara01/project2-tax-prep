import { useState, useEffect } from 'react'

import './ResultsPage.css'

import Confetti from "react-dom-confetti"
import TrussStepIndicator from "../TrussStepIndicator/TrussStepIndicator"
import { useTranslation } from 'react-i18next'

import taxCalculatorService from '../../services/tax-calculator'
import { useSelector } from 'react-redux'

export default function ResultsPage() {

    const [taxesOwed, setTaxesOwed] = useState(1);
    const [returnAmount, setReturnAmount] = useState(0);
    const [taxableIncome, setTaxableIncome] = useState(0);

    // Select personal information from the store
    const financialInformation = useSelector((store : any) => store.financialInformation)

    const [isConfettiActive, setIsConfettiActive] = useState(false)

    const { t } = useTranslation();

    const totalIncome = Number(financialInformation.incomeW2) + Number(financialInformation.income1099);

    const calculateReturn = (taxableIncome : number) => {
        if (financialInformation.isMarried) {
            taxCalculatorService.getMarriedFilerTax(taxableIncome)
            .then((taxesOwed) => {

                const returnAmount = financialInformation.withholdingsW2 - taxesOwed;

                if (returnAmount >= 0) {
                    // Start confetti animation
                    setIsConfettiActive(true)
                }

                setTaxesOwed(taxesOwed)
                setReturnAmount(returnAmount);
            })
        } else {
            taxCalculatorService.getSingleFilerTax(taxableIncome)
            .then((taxesOwed) => {

                const returnAmount = financialInformation.withholdingsW2 - taxesOwed;
                if (returnAmount >= 0) {
                    // Start confetti animation
                    setIsConfettiActive(true)
                } 

                setTaxesOwed(taxesOwed)
                setReturnAmount(returnAmount);
            })
        }

    }

    useEffect(() => {
        console.log('financial information', financialInformation)

        // Standard deduction calculation
        if (financialInformation.isStandardDeduction) {
            const deductions = 13850; // the standard deduction for 2023 taxes is $13850
            let taxable = totalIncome - deductions;
            if (taxable < 0) {taxable = 0}

            setTaxableIncome(taxable)
            calculateReturn(taxable);
            console.log('total income', totalIncome)
        // Itemized Deduction calculation 
        } else {
            const deductions = financialInformation.deductions;
            let taxable = totalIncome - deductions;
            if (taxable > 0) {taxable = 0}

            setTaxableIncome(taxable)
            calculateReturn(taxable);
        }

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
            <div>${taxableIncome.toFixed(2)}</div>
            <div className='result-categories'>{t('results.taxesOwed')}</div>
            <div>${taxesOwed.toFixed(2)}</div>
            <div className='result-categories'>{t('results.withholdings')}</div>
            <div>${Number(financialInformation.withholdingsW2).toFixed(2)}</div>
            <div className='result-categories'>{t('results.federalRefund')}</div>
            <div id='refund-amount'>${returnAmount.toFixed(2)}</div>
        </>
    )
}