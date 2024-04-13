package com.skillstorm.project2taxprepbackend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2taxprepbackend.models.ReturnStatus;
import com.skillstorm.project2taxprepbackend.repositories.ReturnStatusRepository;


@Service
public class ReturnStatusService {
    @Autowired
    ReturnStatusRepository returnStatusRepository;

    // Create returnStatus object in the database
    public ReturnStatus createReturnStatus(ReturnStatus returnStatus) {
        ReturnStatus newReturnStatus = returnStatusRepository.save(returnStatus);

        return newReturnStatus;
    }

    // Get return status by user id
    public ReturnStatus getReturnStatusByUserId(int userId) {
        ReturnStatus returnStatus = returnStatusRepository.findByUserId(userId);

        return returnStatus;
    }

    // Update return status in the database
    public ReturnStatus updateReturnStatus(ReturnStatus newReturnStatus) {
        return returnStatusRepository.save(newReturnStatus);
    }

    // Delete a return status in the database
    public void deleteReturnStatus(ReturnStatus returnStatus) {
        returnStatusRepository.delete(returnStatus);
    }
}
