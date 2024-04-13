package com.skillstorm.project2taxprepbackend.controllers;

import java.util.List;

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

import com.skillstorm.project2taxprepbackend.models.FinancialInformation;
import com.skillstorm.project2taxprepbackend.services.FinancialInformationService;

import jakarta.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/financial-information")
public class FinancialInformationController {
    
    @Autowired
    FinancialInformationService financialInformationService;

    // create item in financial information
    @PostMapping
    public ResponseEntity<FinancialInformation> createFinancialInformation(@Valid @RequestBody FinancialInformation financialInformation) {
        FinancialInformation newFinancialInformation = financialInformationService.createFinancialInformation(financialInformation);
        return new ResponseEntity<FinancialInformation>(newFinancialInformation, HttpStatus.CREATED);
    }


    // view financial information by user id
    @GetMapping
    public ResponseEntity<List<FinancialInformation>> getFinancialInformation() {
        List<FinancialInformation> financialInformation = financialInformationService.getFinancialInformation();
        System.out.println("this is the controller financial information: " + financialInformation);
        return new ResponseEntity<List<FinancialInformation>>(financialInformation, HttpStatus.OK);
    }

        
    // view financial information by user id
    @GetMapping("/user-id/{userId}")
    public ResponseEntity<FinancialInformation> getFinancialInformationByUserId(@PathVariable int userId) {
        FinancialInformation financialInformation = financialInformationService.getFinancialInformationByUserId(userId);
        return new ResponseEntity<FinancialInformation>(financialInformation, HttpStatus.OK);
    }

    // update financial information
    @PutMapping
    public ResponseEntity<FinancialInformation> updateFinancialInformation(@Valid @RequestBody FinancialInformation financialInformation) {
        FinancialInformation updatedItem = financialInformationService.updateFinancialInformation(financialInformation);

        return new ResponseEntity<FinancialInformation>(updatedItem, HttpStatus.OK);
    }

    // delete financial information
    @DeleteMapping
    public ResponseEntity<Integer> deleteFinancialInformation(@Valid @RequestBody FinancialInformation financialInformation) {
        financialInformationService.deleteFinancialInformation(financialInformation);
        return ResponseEntity.noContent().build();
    }
}