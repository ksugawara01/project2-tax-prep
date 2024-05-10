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

import com.skillstorm.project2taxprepbackend.models.ReturnStatus;
import com.skillstorm.project2taxprepbackend.services.ReturnStatusService;

@RunWith(MockitoJUnitRunner.class)
public class ReturnStatusControllerTests {

    @Mock
    private ReturnStatusService returnStatusService;

    @InjectMocks
    private ReturnStatusController returnStatusController;

    private ReturnStatus testReturnStatus;

    @Before
    public void setUp() {
        // Create a sample ReturnStatus object for testing
        testReturnStatus = new ReturnStatus();
        testReturnStatus.setReturnStatusId(1);
        testReturnStatus.setSubmitted(false);
        testReturnStatus.setUserId(1);
    }

    @Test
    public void testCreateReturnStatus() {
        when(returnStatusService.createReturnStatus(any(ReturnStatus.class)))
                .thenReturn(testReturnStatus);

        ResponseEntity<ReturnStatus> responseEntity = returnStatusController
                .createReturnStatus(testReturnStatus);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(testReturnStatus, responseEntity.getBody());
    }

    @Test
    public void testGetReturnStatusByUserId() {
        when(returnStatusService.getReturnStatusByUserId(1))
                .thenReturn(testReturnStatus);

        ResponseEntity<ReturnStatus> responseEntity = returnStatusController
                .getReturnStatusByUserId(1);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(testReturnStatus, responseEntity.getBody());
    }

    @Test
    public void testUpdateReturnStatus() {
        when(returnStatusService.updateReturnStatus(any(ReturnStatus.class)))
                .thenReturn(testReturnStatus);

        ResponseEntity<ReturnStatus> responseEntity = returnStatusController
                .updateReturnStatus(testReturnStatus);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(testReturnStatus, responseEntity.getBody());
    }

    @Test
    public void testDeleteReturnStatus() {
        ResponseEntity<Integer> responseEntity = returnStatusController
                .deleteReturnStatus(testReturnStatus);

        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
    }
}
