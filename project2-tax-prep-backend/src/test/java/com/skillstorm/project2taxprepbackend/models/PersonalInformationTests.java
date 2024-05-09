package com.skillstorm.project2taxprepbackend.models;

import static org.junit.Assert.*;
import org.junit.Test;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;

public class PersonalInformationTests {

    private final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    @Test
    public void testPersonalInformationValidation() {
        // Creating a valid PersonalInformation object
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "123 Main St", "Anytown", "CA",
                "12345", "1990-01-01", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidFirstName() {
        // Creating a PersonalInformation object with invalid firstName
        PersonalInformation personalInformation = new PersonalInformation("", "Doe", "123 Main St", "Anytown", "CA",
                "12345", "1990-01-01", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidLastName() {
        // Creating a PersonalInformation object with invalid lastName
        PersonalInformation personalInformation = new PersonalInformation("John", "", "123 Main St", "Anytown", "CA",
                "12345", "1990-01-01", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidStreetAddress() {
        // Creating a PersonalInformation object with invalid streetAddress
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "", "Anytown", "CA", "12345",
                "1990-01-01", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidCity() {
        // Creating a PersonalInformation object with invalid city
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "123 Main St", "", "CA",
                "12345", "1990-01-01", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidStateName() {
        // Creating a PersonalInformation object with invalid stateName
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "123 Main St", "Anytown", "",
                "12345", "1990-01-01", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidZip() {
        // Creating a PersonalInformation object with invalid zip
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "123 Main St", "Anytown", "CA",
                "", "1990-01-01", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidBirthDate() {
        // Creating a PersonalInformation object with invalid birthDate
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "123 Main St", "Anytown", "CA",
                "12345", "", "123-45-6789", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidSsn() {
        // Creating a PersonalInformation object with invalid ssn
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "123 Main St", "Anytown", "CA",
                "12345", "1990-01-01", "", 1);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

    @Test
    public void testValidUserId() {
        // Creating a PersonalInformation object with invalid userId
        PersonalInformation personalInformation = new PersonalInformation("John", "Doe", "123 Main St", "Anytown", "CA",
                "12345", "1990-01-01", "123-45-6789", 0);

        // Validating the object
        assertTrue(validator.validate(personalInformation).isEmpty());
    }

}

