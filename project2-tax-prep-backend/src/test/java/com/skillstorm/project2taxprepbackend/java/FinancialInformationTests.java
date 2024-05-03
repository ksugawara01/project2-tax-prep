package com.skillstorm.project2taxprepbackend.java;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.skillstorm.project2taxprepbackend.controllers.FinancialInformationController;
import com.skillstorm.project2taxprepbackend.models.FinancialInformation;
import com.skillstorm.project2taxprepbackend.services.FinancialInformationService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class FinancialInformationTests {

    @Mock
    private FinancialInformationService financialInformationService;

    @InjectMocks
    private FinancialInformationController financialInformationController;
/* 
    @Test
    public void testCreateFinancialInformation() {
        FinancialInformation financialInformation = new FinancialInformation(50000.0, 5000.0, 10000.0, 5000.0, false, true, 123);
        when(financialInformationService.createFinancialInformation(any())).thenReturn(financialInformation);

        ResponseEntity<FinancialInformation> responseEntity = financialInformationController.createFinancialInformation(financialInformation);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        verify(financialInformationService, times(1)).createFinancialInformation(any());
    }

    @Test
    public void testGetFinancialInformationByUserId() {
        int userId = 123; // Provide a valid user id for testing
        FinancialInformation financialInformation = new FinancialInformation(60000.0, 6000.0, 12000.0, 6000.0, true, false, userId);
        when(financialInformationService.getFinancialInformationByUserId(userId)).thenReturn(financialInformation);

        ResponseEntity<FinancialInformation> responseEntity = financialInformationController.getFinancialInformationByUserId(userId);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        verify(financialInformationService, times(1)).getFinancialInformationByUserId(userId);
    }

    @Test
    public void testUpdateFinancialInformation() {
        FinancialInformation financialInformation = new FinancialInformation(1, 60000.0, 6000.0, 12000.0, 6000.0, true, false, 123);
        when(financialInformationService.updateFinancialInformation(any())).thenReturn(financialInformation);

        ResponseEntity<FinancialInformation> responseEntity = financialInformationController.updateFinancialInformation(financialInformation);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        verify(financialInformationService, times(1)).updateFinancialInformation(any());
    }

    @Test
    public void testDeleteFinancialInformation() {
        FinancialInformation financialInformation = new FinancialInformation(1, 60000.0, 6000.0, 12000.0, 6000.0, true, false, 123);
        doNothing().when(financialInformationService).deleteFinancialInformation(any());

        ResponseEntity<Integer> responseEntity = financialInformationController.deleteFinancialInformation(financialInformation);
        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
        verify(financialInformationService, times(1)).deleteFinancialInformation(any());
    }
    */
}
