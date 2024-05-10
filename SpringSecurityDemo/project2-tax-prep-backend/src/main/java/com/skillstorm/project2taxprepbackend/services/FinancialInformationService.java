package com.skillstorm.project2taxprepbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2taxprepbackend.models.FinancialInformation;
import com.skillstorm.project2taxprepbackend.repositories.FinancialInformationRepository;

@Service
public class FinancialInformationService {
    @Autowired
    private FinancialInformationRepository repository;

    public FinancialInformation saveInformation(FinancialInformation info) {
        return repository.save(info);
    }

    // Add more methods for calculation, retrieval, etc., if needed 
}
