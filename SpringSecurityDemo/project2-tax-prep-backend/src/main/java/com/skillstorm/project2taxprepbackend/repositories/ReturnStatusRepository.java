package com.skillstorm.project2taxprepbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project2taxprepbackend.models.ReturnStatus;

@Repository
public interface ReturnStatusRepository extends JpaRepository<ReturnStatus, Integer> {
    ReturnStatus findByUserId(int userId);
}
