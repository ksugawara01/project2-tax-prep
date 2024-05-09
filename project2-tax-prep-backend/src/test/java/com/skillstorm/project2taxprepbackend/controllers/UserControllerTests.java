package com.skillstorm.project2taxprepbackend.controllers;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.skillstorm.project2taxprepbackend.models.User;
import com.skillstorm.project2taxprepbackend.services.UserService;

@RunWith(MockitoJUnitRunner.class)
public class UserControllerTests {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @Test
    public void testCreateUser() {
        User user = new User();
        // Set user properties as needed

        when(userService.createUser(any(User.class))).thenReturn(user);

        ResponseEntity<User> responseEntity = userController.createUser(user);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(user, responseEntity.getBody());
    }

    @Test
    public void testUpdateUser() {
        User user = new User();
        // Set user properties as needed

        when(userService.updateUser(any(User.class))).thenReturn(user);

        ResponseEntity<User> responseEntity = userController.updateUser(user);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(user, responseEntity.getBody());
    }

    @Test
    public void testDeleteUser() {
        User user = new User();
        // Set user properties as needed

        ResponseEntity<Integer> responseEntity = userController.deleteUser(user);

        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
        // No need to assert body content for DELETE method
    }
}

