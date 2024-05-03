package com.skillstorm.project2taxprepbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2taxprepbackend.models.MarriedFilerTaxBracket;
import com.skillstorm.project2taxprepbackend.models.SingleFilerTaxBracket;
import com.skillstorm.project2taxprepbackend.repositories.MarriedFilerTaxBracketRepository;
import com.skillstorm.project2taxprepbackend.repositories.SingleFilerTaxBracketRepository;
import com.skillstorm.project2taxprepbackend.services.TaxCalculatorService;

@CrossOrigin
@RestController
public class TaxCalculatorController {

    @Autowired
    private SingleFilerTaxBracketRepository singleFilerTaxBracketRepository;

    @Autowired
    private MarriedFilerTaxBracketRepository marriedFilerTaxBracketRepository;

    @Autowired
    private TaxCalculatorService taxCalculatorService;

    @GetMapping("/taxBrackets/single")
    public List<SingleFilerTaxBracket> getSingleFilerTaxBrackets() {
        return singleFilerTaxBracketRepository.findAll();
    }

    @GetMapping("/taxBrackets/married")
    public List<MarriedFilerTaxBracket> getMarriedFilerTaxBrackets() {
        return marriedFilerTaxBracketRepository.findAll();
    }

    @GetMapping("/calculate/single")
    public double calculateSingleFilerTax(@RequestParam int taxableIncome) {
        return taxCalculatorService.calculateSingleFilerTax(taxableIncome);
    }

    @GetMapping("/calculate/married")
    public double calculateMarriedFilerTax(@RequestParam int taxableIncome) {
        return taxCalculatorService.calculateMarriedFilerTax(taxableIncome);
    }
}