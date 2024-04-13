package com.skillstorm.project2taxprepbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2taxprepbackend.models.ReturnStatus;
import com.skillstorm.project2taxprepbackend.services.ReturnStatusService;

import jakarta.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/return-statuses")
public class ReturnStatusController {
    @Autowired
    ReturnStatusService returnStatusService;

    // create item in return status
    @PostMapping
    public ResponseEntity<ReturnStatus> createReturnStatus(@Valid @RequestBody ReturnStatus returnStatus) {
        ReturnStatus newReturnStatus = returnStatusService.createReturnStatus(returnStatus);
        return new ResponseEntity<ReturnStatus>(newReturnStatus, HttpStatus.CREATED);
    }

    // view return status by user id
    @GetMapping("/user-id/{userId}")
    public ResponseEntity<ReturnStatus> getReturnStatusByUserId(@PathVariable int userId) {
        ReturnStatus returnStatus = returnStatusService.getReturnStatusByUserId(userId);
        return new ResponseEntity<ReturnStatus>(returnStatus, HttpStatus.OK);
    }

    // update return status
    @PutMapping
    public ResponseEntity<ReturnStatus> updateReturnStatus(@Valid @RequestBody ReturnStatus returnStatus) {
        ReturnStatus updatedItem = returnStatusService.updateReturnStatus(returnStatus);

        return new ResponseEntity<ReturnStatus>(updatedItem, HttpStatus.OK);
    }

    // delete return status
    @DeleteMapping
    public ResponseEntity<Integer> deleteReturnStatus(@Valid @RequestBody ReturnStatus returnStatus) {
        returnStatusService.deleteReturnStatus(returnStatus);
        return ResponseEntity.noContent().build();
    }
}
