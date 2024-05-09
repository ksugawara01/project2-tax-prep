package com.skillstorm.project2taxprepbackend.models;

import static org.junit.Assert.*;
import org.junit.Test;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;

public class FinancialInformationTests {

    private final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    @Test
    public void testFinancialInformationValidation() {
        // Creating a valid FinancialInformation object
        FinancialInformation financialInformation = new FinancialInformation(50000.0, 5000.0, 10000.0, 5000.0, 2,
                true, false, true, true, true, true, true, true, true, true, true, true, true, 1);
        
        // Validating the object
        assertTrue(validator.validate(financialInformation).isEmpty());
    }

    @Test
    public void testInvalidIncomeW2() {
        // Creating a FinancialInformation object with invalid incomeW2
        FinancialInformation financialInformation = new FinancialInformation(-50000.0, 5000.0, 10000.0, 5000.0, 2,
                true, false, true, true, true, true, true, true, true, true, true, true, true, 1);
        
        // Validating the object
        assertFalse(validator.validate(financialInformation).isEmpty());
    }

    @Test
    public void testInvalidWithholdingsW2() {
        // Creating a FinancialInformation object with invalid withholdingsW2
        FinancialInformation financialInformation = new FinancialInformation(50000.0, -5000.0, 10000.0, 5000.0, 2,
                true, false, true, true, true, true, true, true, true, true, true, true, true, 1);
        
        // Validating the object
        assertFalse(validator.validate(financialInformation).isEmpty());
    }

    @Test
    public void testInvalidIncome1099() {
        // Creating a FinancialInformation object with invalid income1099
        FinancialInformation financialInformation = new FinancialInformation(50000.0, 5000.0, -10000.0, 5000.0, 2,
                true, false, true, true, true, true, true, true, true, true, true, true, true, 1);
        
        // Validating the object
        assertFalse(validator.validate(financialInformation).isEmpty());
    }

    @Test
    public void testInvalidDeductions() {
        // Creating a FinancialInformation object with invalid deductions
        FinancialInformation financialInformation = new FinancialInformation(50000.0, 5000.0, 10000.0, -5000.0, 2,
                true, false, true, true, true, true, true, true, true, true, true, true, true, 1);
        
        // Validating the object
        assertFalse(validator.validate(financialInformation).isEmpty());
    }

    @Test
    public void testInvalidDependents() {
        // Creating a FinancialInformation object with invalid dependents
        FinancialInformation financialInformation = new FinancialInformation(50000.0, 5000.0, 10000.0, 5000.0, -2,
                true, false, true, true, true, true, true, true, true, true, true, true, true, 1);
        
        // Validating the object
        assertFalse(validator.validate(financialInformation).isEmpty());
    }

    @Test
    public void testValidBooleanFields() {
        // Creating a FinancialInformation object with all boolean fields set to true
        FinancialInformation financialInformation = new FinancialInformation(50000.0, 5000.0, 10000.0, 5000.0, 2,
                true, true, true, true, true, true, true, true, true, true, true, true, true, 1);
        
        // Validating the object
        assertTrue(validator.validate(financialInformation).isEmpty());
    }

}