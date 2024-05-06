package com.skillstorm.project2taxprepbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2taxprepbackend.models.User;
import com.skillstorm.project2taxprepbackend.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    // Create a user in the database
    public User createUser(User user) {
        User newUser = userRepository.save(user);

        return newUser;
    }

    // Update a user in the database
    public User updateUser(User newUser) {
        return userRepository.save(newUser);
    }

    // Delete a user in the database
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
