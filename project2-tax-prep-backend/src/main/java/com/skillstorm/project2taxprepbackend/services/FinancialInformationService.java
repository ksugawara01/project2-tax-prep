package com.skillstorm.project2taxprepbackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.skillstorm.project2taxprepbackend.models.FinancialInformation;
import com.skillstorm.project2taxprepbackend.repositories.FinancialInformationRepository;

@Service
public class FinancialInformationService {
    @Autowired
    FinancialInformationRepository financialInformationRepository;

    // Create financialInformation object in the database
    public FinancialInformation createFinancialInformation(FinancialInformation financialInformation) {
        FinancialInformation newFinancialInformation = financialInformationRepository.save(financialInformation);

        return newFinancialInformation;
    }

    // Get financial information by user id
    public FinancialInformation getFinancialInformationByUserId(int userId) {
        FinancialInformation financialInformation = financialInformationRepository.findByUserId(userId);

        return financialInformation;
    }

    @GetMapping
    public List<FinancialInformation> getFinancialInformation() {
        List<FinancialInformation> financialInformation = financialInformationRepository.findAll();
        System.out.println("this is the service financial information: " + financialInformation);

        return financialInformation;
    }

    // Update financial information in the database
    public FinancialInformation updateFinancialInformation(FinancialInformation newFinancialInformation) {
        return financialInformationRepository.save(newFinancialInformation);
    }

    // Delete a financial information in the database
    public void deleteFinancialInformation(FinancialInformation financialInformation) {
        financialInformationRepository.delete(financialInformation);
    }
}