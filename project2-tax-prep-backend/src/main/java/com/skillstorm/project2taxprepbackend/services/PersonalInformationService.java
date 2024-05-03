package com.skillstorm.project2taxprepbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.skillstorm.project2taxprepbackend.models.PersonalInformation;
import com.skillstorm.project2taxprepbackend.repositories.PersonalInformationRepository;

@Service
public class PersonalInformationService {
    @Autowired
    PersonalInformationRepository personalInformationRepository;

    // Create personalInformation object in the database
    public PersonalInformation createPersonalInformation(PersonalInformation personalInformation) {
        PersonalInformation newPersonalInformation = personalInformationRepository.save(personalInformation);

        return newPersonalInformation;
    }

    // Get personal information by user id
    public PersonalInformation getPersonalInformationByUserId(int userId) {
        PersonalInformation personalInformation = personalInformationRepository.findByUserId(userId);

        if (personalInformation == null) {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "Resource not found with id: " + userId);
        }

        return personalInformation;
    }

    // Update personal information in the database
    public PersonalInformation updatePersonalInformation(PersonalInformation newPersonalInformation) {
        return personalInformationRepository.save(newPersonalInformation);
    }

    // Delete a personal information in the database
    public void deletePersonalInformation(PersonalInformation personalInformation) {
        personalInformationRepository.delete(personalInformation);
    }
}
