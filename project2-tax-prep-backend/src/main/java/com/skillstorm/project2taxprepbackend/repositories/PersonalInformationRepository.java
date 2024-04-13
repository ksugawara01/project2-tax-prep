package com.skillstorm.project2taxprepbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project2taxprepbackend.models.PersonalInformation;

@Repository
public interface PersonalInformationRepository extends JpaRepository<PersonalInformation, Integer> {
    PersonalInformation findByUserId(int userId);
}
