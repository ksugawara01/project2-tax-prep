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
import org.springframework.web.server.ResponseStatusException;

import com.skillstorm.project2taxprepbackend.models.FinancialInformation;
import com.skillstorm.project2taxprepbackend.services.FinancialInformationService;

@RunWith(MockitoJUnitRunner.class)
public class FinancialInformationControllerTests {

    @Mock
    private FinancialInformationService financialInformationService;

    @InjectMocks
    private FinancialInformationController financialInformationController;

    private FinancialInformation testFinancialInformation;

    @Before
    public void setUp() {
        // Create a sample FinancialInformation object for testing
        testFinancialInformation = new FinancialInformation();
        testFinancialInformation.setFinancialInformationId(1);
        testFinancialInformation.setIncomeW2(100000);
        testFinancialInformation.setDeductions(1200);
        testFinancialInformation.setDependents(3);
        testFinancialInformation.setWithholdingsW2(20000);
        testFinancialInformation.setIncome1099(13000);
        testFinancialInformation.setUserId(1);
    }

    @Test
    public void testCreateFinancialInformation() {
        when(financialInformationService.createFinancialInformation(any(FinancialInformation.class)))
                .thenReturn(testFinancialInformation);

        ResponseEntity<FinancialInformation> responseEntity = financialInformationController
                .createFinancialInformation(testFinancialInformation);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(testFinancialInformation, responseEntity.getBody());
    }

    @Test
    public void testGetFinancialInformationByUserId() {
        when(financialInformationService.getFinancialInformationByUserId(1))
                .thenReturn(testFinancialInformation);

        ResponseEntity<FinancialInformation> responseEntity = financialInformationController
                .getFinancialInformationByUserId(1);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(testFinancialInformation, responseEntity.getBody());
    }

    @Test
    public void testUpdateFinancialInformation() {
        when(financialInformationService.updateFinancialInformation(any(FinancialInformation.class)))
                .thenReturn(testFinancialInformation);

        ResponseEntity<FinancialInformation> responseEntity = financialInformationController
                .updateFinancialInformation(testFinancialInformation);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(testFinancialInformation, responseEntity.getBody());
    }

    @Test(expected = ResponseStatusException.class)
    public void testUpdateNonExistingFinancialInformation() {
        // Simulate scenario where the financial information to be updated does not exist
        when(financialInformationService.updateFinancialInformation(any(FinancialInformation.class)))
                .thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND));

        financialInformationController.updateFinancialInformation(testFinancialInformation);
    }

    @Test
    public void testDeleteFinancialInformation() {
        ResponseEntity<Integer> responseEntity = financialInformationController
                .deleteFinancialInformation(testFinancialInformation);

        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
    }

    @Test(expected = ResponseStatusException.class)
    public void testDeleteNonExistingFinancialInformation() {
        // Simulate scenario where the financial information to be deleted does not exist
        doThrow(new ResponseStatusException(HttpStatus.NOT_FOUND))
                .when(financialInformationService).deleteFinancialInformation(any(FinancialInformation.class));

        financialInformationController.deleteFinancialInformation(testFinancialInformation);
    }

    

}
