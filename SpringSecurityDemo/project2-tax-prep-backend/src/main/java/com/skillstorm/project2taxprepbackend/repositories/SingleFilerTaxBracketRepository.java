package com.skillstorm.project2taxprepbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project2taxprepbackend.models.SingleFilerTaxBracket;

@Repository
public interface SingleFilerTaxBracketRepository extends JpaRepository<SingleFilerTaxBracket, Long> {
    // You can define custom query methods here if needed
}