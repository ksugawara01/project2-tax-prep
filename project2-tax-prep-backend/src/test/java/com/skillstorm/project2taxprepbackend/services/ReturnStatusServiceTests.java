package com.skillstorm.project2taxprepbackend.services;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.skillstorm.project2taxprepbackend.models.ReturnStatus;
import com.skillstorm.project2taxprepbackend.repositories.ReturnStatusRepository;

@RunWith(MockitoJUnitRunner.class)
public class ReturnStatusServiceTests {

    @Mock
    private ReturnStatusRepository returnStatusRepository;

    private ReturnStatusService returnStatusService;

    @Before
    public void setUp() {
        returnStatusService = new ReturnStatusService();
        returnStatusService.returnStatusRepository = returnStatusRepository;
    }

    @Test
    public void testCreateReturnStatus() {
        ReturnStatus returnStatus = new ReturnStatus();
        when(returnStatusRepository.save(returnStatus)).thenReturn(returnStatus);

        ReturnStatus createdReturnStatus = returnStatusService.createReturnStatus(returnStatus);

        assertNotNull(createdReturnStatus);
        assertEquals(returnStatus, createdReturnStatus);
    }

    @Test
    public void testGetReturnStatusByUserId() {
        int userId = 1;
        ReturnStatus returnStatus = new ReturnStatus();
        returnStatus.setUserId(userId);
        when(returnStatusRepository.findByUserId(userId)).thenReturn(returnStatus);

        ReturnStatus retrievedReturnStatus = returnStatusService.getReturnStatusByUserId(userId);

        assertNotNull(retrievedReturnStatus);
        assertEquals(returnStatus, retrievedReturnStatus);
    }

    @Test
    public void testUpdateReturnStatus() {
        ReturnStatus returnStatus = new ReturnStatus();
        when(returnStatusRepository.save(returnStatus)).thenReturn(returnStatus);

        ReturnStatus updatedReturnStatus = returnStatusService.updateReturnStatus(returnStatus);

        assertNotNull(updatedReturnStatus);
        assertEquals(returnStatus, updatedReturnStatus);
    }

    @Test
    public void testDeleteReturnStatus() {
        ReturnStatus returnStatus = new ReturnStatus();

        returnStatusService.deleteReturnStatus(returnStatus);

        verify(returnStatusRepository, times(1)).delete(returnStatus);
    }
}
