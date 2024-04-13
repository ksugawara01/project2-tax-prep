package com.skillstorm.project2taxprepbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2taxprepbackend.services.PersonalInformationService;
import com.skillstorm.project2taxprepbackend.models.PersonalInformation;

import jakarta.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/personal-information")
public class PersonalInformationController {
    
    @Autowired
    PersonalInformationService personalInformationService;

    // create item in personal information
    @PostMapping
    public ResponseEntity<PersonalInformation> createPersonalInformation(@Valid @RequestBody PersonalInformation personalInformation) {
        PersonalInformation newPersonalInformation = personalInformationService.createPersonalInformation(personalInformation);
        return new ResponseEntity<PersonalInformation>(newPersonalInformation, HttpStatus.CREATED);
    }

    // view personal information by user id
    @GetMapping("/user-id/{userId}")
    public ResponseEntity<PersonalInformation> getPersonalInformationByUserId(@PathVariable int userId) {
        PersonalInformation personalInformation = personalInformationService.getPersonalInformationByUserId(userId);
        return new ResponseEntity<PersonalInformation>(personalInformation, HttpStatus.OK);
    }

    // update personal information
    @PutMapping
    public ResponseEntity<PersonalInformation> updatePersonalInformation(@Valid @RequestBody PersonalInformation personalInformation) {
        PersonalInformation updatedItem = personalInformationService.updatePersonalInformation(personalInformation);

        return new ResponseEntity<PersonalInformation>(updatedItem, HttpStatus.OK);
    }

    // delete personal information
    @DeleteMapping
    public ResponseEntity<Integer> deletePersonalInformation(@Valid @RequestBody PersonalInformation personalInformation) {
        personalInformationService.deletePersonalInformation(personalInformation);
        return ResponseEntity.noContent().build();
    }
}
