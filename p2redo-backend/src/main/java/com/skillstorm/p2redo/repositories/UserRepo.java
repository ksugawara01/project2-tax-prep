package com.skillstorm.p2redo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.p2redo.models.OurUsers;



public interface UserRepo extends JpaRepository<OurUsers, Integer>{
    Optional<OurUsers> findByEmail(String email);
}
