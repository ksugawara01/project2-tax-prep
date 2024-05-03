import { useState, useEffect } from 'react'

import './ResultsPage.css'

import Confetti from "react-dom-confetti"
import TrussStepIndicator from "../TrussStepIndicator/TrussStepIndicator"
import { useTranslation } from 'react-i18next'

import taxCalculatorService from '../../services/tax-calculator'
import financialInformationService from '../../services/financial-information'
import { useDispatch, useSelector } from 'react-redux'
import { updateFinancialInformation } from '../../slices/financialInformationSlice'


export default function ResultsPage() {

    const [taxesOwed, setTaxesOwed] = useState(1);
    const [returnAmount, setReturnAmount] = useState(0);
    const [taxableIncome, setTaxableIncome] = useState(0);

    // Select personal information from the store
    const financialInformation = useSelector((store : any) => store.financialInformation);

    const dispatch = useDispatch();

    // temporary
    const userId = 4;

    useEffect(() => {
        financialInformationService.getFinancialInformationByUserId(userId)
            .then((financialInformation) => {
                dispatch(updateFinancialInformation(financialInformation[0]))
            })
    },[])

    const [isConfettiActive, setIsConfettiActive] = useState(false)

    const { t } = useTranslation();

    const totalIncome = Number(financialInformation.incomeW2) + Number(financialInformation.income1099);

    const calculateReturn = (taxableIncome : number) => {
        if (financialInformation.married) {
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

        // Standard deduction calculation
        if (financialInformation.standardDeduction) {
            const deductions = 13850; // the standard deduction for 2023 taxes is $13850
            let taxable = totalIncome - deductions;
            if (taxable < 0) {taxable = 0}

            setTaxableIncome(taxable)
            calculateReturn(taxable);

        // Itemized Deduction calculation 
        } else {
            const deductions = financialInformation.deductions;
            let taxable = totalIncome - deductions;
            if (taxable < 0) {taxable = 0}

            setTaxableIncome(taxable)
            calculateReturn(taxable);
        }

    }, [financialInformation])

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

    const positiveRefund = <div id='positive-refund'>${returnAmount.toFixed(2)}</div>
    const negativeRefund = <div id='negative-refund'>${returnAmount.toFixed(2)}</div>

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
            {returnAmount >= 0 ? positiveRefund : negativeRefund}
        </>
    )
}