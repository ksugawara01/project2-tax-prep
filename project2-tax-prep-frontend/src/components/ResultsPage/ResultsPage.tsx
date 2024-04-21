import { useState, useEffect } from 'react'

import './ResultsPage.css'

import Confetti from "react-dom-confetti"
import TrussStepIndicator from "../TrussStepIndicator/TrussStepIndicator"

export default function ResultsPage() {

    const [isConfettiActive, setIsConfettiActive] = useState(false)

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
        duration: 30000,
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
            <div id='result-congratulations'>Congratulations on filing your federal tax return!</div>
            <div className='result-categories'>Total Taxable Income:</div>
            <div>placeholder</div>
            <div className='result-categories'>Total Taxes Owed:</div>
            <div>placeholder</div>
            <div className='result-categories'>Total Withholdings:</div>
            <div>placeholder</div>
            <div className='result-categories'>Your Federal Refund:</div>
            <div id='refund-amount'>$2,452</div>
        </>
    )
}