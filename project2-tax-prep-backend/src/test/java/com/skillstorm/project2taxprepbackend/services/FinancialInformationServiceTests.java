package com.skillstorm.project2taxprepbackend.services;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.web.server.ResponseStatusException;
import com.skillstorm.project2taxprepbackend.models.FinancialInformation;
import com.skillstorm.project2taxprepbackend.repositories.FinancialInformationRepository;

@RunWith(MockitoJUnitRunner.class)
public class FinancialInformationServiceTests {

    @Mock
    private FinancialInformationRepository financialInformationRepository;

    private FinancialInformationService financialInformationService;

    @Before
    public void setUp() {
        financialInformationService = new FinancialInformationService();
        financialInformationService.financialInformationRepository = financialInformationRepository;
    }

    @Test
    public void testCreateFinancialInformation() {
        FinancialInformation financialInformation = new FinancialInformation();
        when(financialInformationRepository.save(financialInformation)).thenReturn(financialInformation);

        FinancialInformation createdFinancialInformation = financialInformationService
                .createFinancialInformation(financialInformation);

        assertNotNull(createdFinancialInformation);
        assertEquals(financialInformation, createdFinancialInformation);
    }

    @Test
    public void testGetFinancialInformationByUserId() {
        int userId = 1;
        FinancialInformation financialInformation = new FinancialInformation();
        financialInformation.setUserId(userId);
        when(financialInformationRepository.findByUserId(userId)).thenReturn(financialInformation);

        FinancialInformation retrievedFinancialInformation = financialInformationService
                .getFinancialInformationByUserId(userId);

        assertNotNull(retrievedFinancialInformation);
        assertEquals(financialInformation, retrievedFinancialInformation);
    }

    @Test(expected = ResponseStatusException.class)
    public void testGetFinancialInformationByUserId_NotFound() {
        int userId = 1;
        when(financialInformationRepository.findByUserId(userId)).thenReturn(null);

        financialInformationService.getFinancialInformationByUserId(userId);
    }

    @Test
    public void testUpdateFinancialInformation() {
        FinancialInformation financialInformation = new FinancialInformation();
        when(financialInformationRepository.save(financialInformation)).thenReturn(financialInformation);

        FinancialInformation updatedFinancialInformation = financialInformationService
                .updateFinancialInformation(financialInformation);

        assertNotNull(updatedFinancialInformation);
        assertEquals(financialInformation, updatedFinancialInformation);
    }

    @Test
    public void testDeleteFinancialInformation() {
        FinancialInformation financialInformation = new FinancialInformation();

        financialInformationService.deleteFinancialInformation(financialInformation);

        verify(financialInformationRepository, times(1)).delete(financialInformation);
    }
}
