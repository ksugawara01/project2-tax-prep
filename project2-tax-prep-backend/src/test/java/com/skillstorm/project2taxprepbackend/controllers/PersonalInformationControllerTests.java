package com.skillstorm.project2taxprepbackend.controllers;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.skillstorm.project2taxprepbackend.models.PersonalInformation;
import com.skillstorm.project2taxprepbackend.services.PersonalInformationService;

@RunWith(MockitoJUnitRunner.class)
public class PersonalInformationControllerTests {

    @Mock
    private PersonalInformationService personalInformationService;

    @InjectMocks
    private PersonalInformationController personalInformationController;

    private PersonalInformation testPersonalInformation;

    @Before
    public void setUp() {
        // Create a sample PersonalInformation object for testing
        testPersonalInformation = new PersonalInformation();
        testPersonalInformation.setUserId(1);
        testPersonalInformation.setFirstName("First");
        testPersonalInformation.setLastName("Last");
        testPersonalInformation.setStreetAddress("123 Street");
        testPersonalInformation.setCity("City");
        testPersonalInformation.setStateName("AL");
        testPersonalInformation.setZip("12345");
    }

    @Test
    public void testCreatePersonalInformation() {
        when(personalInformationService.createPersonalInformation(any(PersonalInformation.class)))
                .thenReturn(testPersonalInformation);

        ResponseEntity<PersonalInformation> responseEntity = personalInformationController
                .createPersonalInformation(testPersonalInformation);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(testPersonalInformation, responseEntity.getBody());
    }

    @Test
    public void testGetPersonalInformationByUserId() {
        when(personalInformationService.getPersonalInformationByUserId(1))
                .thenReturn(testPersonalInformation);

        ResponseEntity<PersonalInformation> responseEntity = personalInformationController
                .getPersonalInformationByUserId(1);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(testPersonalInformation, responseEntity.getBody());
    }

    @Test
    public void testUpdatePersonalInformation() {
        when(personalInformationService.updatePersonalInformation(any(PersonalInformation.class)))
                .thenReturn(testPersonalInformation);

        ResponseEntity<PersonalInformation> responseEntity = personalInformationController
                .updatePersonalInformation(testPersonalInformation);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(testPersonalInformation, responseEntity.getBody());
    }

    @Test
    public void testDeletePersonalInformation() {
        ResponseEntity<Integer> responseEntity = personalInformationController
                .deletePersonalInformation(testPersonalInformation);

        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
    }
}
