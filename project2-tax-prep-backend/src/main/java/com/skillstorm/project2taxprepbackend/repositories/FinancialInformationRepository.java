package com.skillstorm.project2taxprepbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project2taxprepbackend.models.FinancialInformation;

@Repository
public interface FinancialInformationRepository extends JpaRepository<FinancialInformation, Integer> {
    FinancialInformation findByUserId(int userId);
}
