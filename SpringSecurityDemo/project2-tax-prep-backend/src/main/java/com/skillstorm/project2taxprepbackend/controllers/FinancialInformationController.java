package com.skillstorm.project2taxprepbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2taxprepbackend.models.FinancialInformation;
import com.skillstorm.project2taxprepbackend.services.FinancialInformationService;

@RestController 
@RequestMapping("/financial-information") 
public class FinancialInformationController {
    @Autowired
    private FinancialInformationService service;

    @PostMapping
    public FinancialInformation createFinancialInformation(@RequestBody FinancialInformation info) {
        return service.saveInformation(info);
    }
}
