package com.skillstorm.project2taxprepbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.project2taxprepbackend.models.FinancialInformation;

public interface FinancialInformationRepository extends JpaRepository<FinancialInformation, Long> {
}
