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

    // Select personal information from the store
    const financialInformation = useSelector((store : any) => store.financialInformation);

    const [taxesOwed, setTaxesOwed] = useState(1);
    const [credits, setCredits] = useState(
        (Number(financialInformation.dependents)*3) + (financialInformation.aotc ? 2500 : 0) + (financialInformation.cleanEnergy ? 1200 : 0)
    );
    const [returnAmount, setReturnAmount] = useState(0);
    const [taxableIncome, setTaxableIncome] = useState(0);

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

                const totalTaxesOwed = taxesOwed - credits;

                console.log('credits', credits);
                console.log('total taxes owed', totalTaxesOwed);

                const returnAmount = financialInformation.withholdingsW2 - totalTaxesOwed;

                if (returnAmount >= 0) {
                    // Start confetti animation
                    setIsConfettiActive(true)
                }

                setTaxesOwed(totalTaxesOwed);
                setReturnAmount(returnAmount);
            })
        } else {
            taxCalculatorService.getSingleFilerTax(taxableIncome)
            .then((taxesOwed) => {

                const totalTaxesOwed = taxesOwed - credits;

                console.log('credits', credits);
                console.log('total taxes owed', totalTaxesOwed);

                const returnAmount = financialInformation.withholdingsW2 - totalTaxesOwed;
                if (returnAmount >= 0) {
                    // Start confetti animation
                    setIsConfettiActive(true)
                } 

                setTaxesOwed(totalTaxesOwed);
                setReturnAmount(returnAmount);
            })
        }
    }

    useEffect(() => {

        // Standard deduction calculation
        if (financialInformation.standardDeduction) {
            let deductions = 13850; // the standard deduction for 2023 taxes is $13850 for single filers
            if (financialInformation.married) {
                deductions = 27700; // the standard deduction is 27700 for married couples filing jointly
            }
            
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

    }, [financialInformation, credits])

    useEffect(() => {
        // Credits Calculation
        let totalCredits = 0;
        if (financialInformation.aotc) {
            totalCredits += 2500;
        }
        console.log('credits1', totalCredits)
        if (financialInformation.cleanEnergy) {
            totalCredits += 1200;
        }
        console.log('credits2', totalCredits)
        console.log('dependents', financialInformation.dependents)
        totalCredits += Number(financialInformation.dependents)*2000;

        console.log('credits3', totalCredits)

        console.log('state credits', credits)

        setCredits(totalCredits);
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