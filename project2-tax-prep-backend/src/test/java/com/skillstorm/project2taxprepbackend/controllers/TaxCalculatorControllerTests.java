package com.skillstorm.project2taxprepbackend.controllers;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

import com.skillstorm.project2taxprepbackend.models.MarriedFilerTaxBracket;
import com.skillstorm.project2taxprepbackend.models.SingleFilerTaxBracket;
import com.skillstorm.project2taxprepbackend.repositories.MarriedFilerTaxBracketRepository;
import com.skillstorm.project2taxprepbackend.repositories.SingleFilerTaxBracketRepository;
import com.skillstorm.project2taxprepbackend.services.TaxCalculatorService;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class TaxCalculatorControllerTests {

    @Mock
    private SingleFilerTaxBracketRepository singleFilerTaxBracketRepository;

    @Mock
    private MarriedFilerTaxBracketRepository marriedFilerTaxBracketRepository;

    @Mock
    private TaxCalculatorService taxCalculatorService;

    @InjectMocks
    private TaxCalculatorController taxCalculatorController;

    @Test
    public void testGetSingleFilerTaxBrackets() {
        List<SingleFilerTaxBracket> mockList = new ArrayList<>();
        // Add sample SingleFilerTaxBracket objects to the mock list

        when(singleFilerTaxBracketRepository.findAll()).thenReturn(mockList);

        List<SingleFilerTaxBracket> result = taxCalculatorController.getSingleFilerTaxBrackets();

        assertEquals(mockList, result);
    }

    @Test
    public void testGetMarriedFilerTaxBrackets() {
        List<MarriedFilerTaxBracket> mockList = new ArrayList<>();

        when(marriedFilerTaxBracketRepository.findAll()).thenReturn(mockList);

        List<MarriedFilerTaxBracket> result = taxCalculatorController.getMarriedFilerTaxBrackets();

        assertEquals(mockList, result);
    }

    @Test
    public void testCalculateSingleFilerTax() {
        int taxableIncome = 50000;
        double expectedTax = 10000.0;

        when(taxCalculatorService.calculateSingleFilerTax(taxableIncome)).thenReturn(expectedTax);

        double result = taxCalculatorController.calculateSingleFilerTax(taxableIncome);

        assertEquals(expectedTax, result, 0.0); // Delta is set to 0.0 for exact comparison
    }

}

