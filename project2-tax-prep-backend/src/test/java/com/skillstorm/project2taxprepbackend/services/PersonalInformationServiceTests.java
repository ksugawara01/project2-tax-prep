package com.skillstorm.project2taxprepbackend.services;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.web.server.ResponseStatusException;

import com.skillstorm.project2taxprepbackend.models.PersonalInformation;
import com.skillstorm.project2taxprepbackend.repositories.PersonalInformationRepository;

@RunWith(MockitoJUnitRunner.class)
public class PersonalInformationServiceTests {

    @Mock
    private PersonalInformationRepository personalInformationRepository;

    private PersonalInformationService personalInformationService;

    @Before
    public void setUp() {
        personalInformationService = new PersonalInformationService();
        personalInformationService.personalInformationRepository = personalInformationRepository;
    }

    @Test
    public void testCreatePersonalInformation() {
        PersonalInformation personalInformation = new PersonalInformation();
        when(personalInformationRepository.save(personalInformation)).thenReturn(personalInformation);

        PersonalInformation createdPersonalInformation = personalInformationService
                .createPersonalInformation(personalInformation);

        assertNotNull(createdPersonalInformation);
        assertEquals(personalInformation, createdPersonalInformation);
    }

    @Test
    public void testGetPersonalInformationByUserId() {
        int userId = 1;
        PersonalInformation personalInformation = new PersonalInformation();
        personalInformation.setUserId(userId);
        when(personalInformationRepository.findByUserId(userId)).thenReturn(personalInformation);

        PersonalInformation retrievedPersonalInformation = personalInformationService
                .getPersonalInformationByUserId(userId);

        assertNotNull(retrievedPersonalInformation);
        assertEquals(personalInformation, retrievedPersonalInformation);
    }

    @Test(expected = ResponseStatusException.class)
    public void testGetPersonalInformationByUserId_NotFound() {
        int userId = 1;
        when(personalInformationRepository.findByUserId(userId)).thenReturn(null);

        personalInformationService.getPersonalInformationByUserId(userId);
    }

    @Test
    public void testUpdatePersonalInformation() {
        PersonalInformation personalInformation = new PersonalInformation();
        when(personalInformationRepository.save(personalInformation)).thenReturn(personalInformation);

        PersonalInformation updatedPersonalInformation = personalInformationService
                .updatePersonalInformation(personalInformation);

        assertNotNull(updatedPersonalInformation);
        assertEquals(personalInformation, updatedPersonalInformation);
    }

    @Test
    public void testDeletePersonalInformation() {
        PersonalInformation personalInformation = new PersonalInformation();

        personalInformationService.deletePersonalInformation(personalInformation);

        verify(personalInformationRepository, times(1)).delete(personalInformation);
    }
}
