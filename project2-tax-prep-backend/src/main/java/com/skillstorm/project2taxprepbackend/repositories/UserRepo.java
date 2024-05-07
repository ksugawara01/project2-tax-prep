package com.skillstorm.project2taxprepbackend.repositories;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.project2taxprepbackend.models.OurUsers;



public interface UserRepo extends JpaRepository<OurUsers, Integer>{
    Optional<OurUsers> findByEmail(String email);
}

