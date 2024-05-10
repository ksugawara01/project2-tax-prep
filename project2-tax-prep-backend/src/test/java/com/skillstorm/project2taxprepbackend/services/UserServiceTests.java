package com.skillstorm.project2taxprepbackend.services;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.skillstorm.project2taxprepbackend.models.User;
import com.skillstorm.project2taxprepbackend.repositories.UserRepository;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTests {

    @Mock
    private UserRepository userRepository;

    private UserService userService;

    @Before
    public void setUp() {
        userService = new UserService();
        userService.userRepository = userRepository;
    }

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setUserId(1);
        user.setUsername("testuser");
        user.setEmail("test@example.com");

        when(userRepository.save(user)).thenReturn(user);

        User newUser = userService.createUser(user);

        assertEquals(user.getUserId(), newUser.getUserId());
        assertEquals(user.getUsername(), newUser.getUsername());
        assertEquals(user.getEmail(), newUser.getEmail());
    }

    @Test
    public void testUpdateUser() {
        User user = new User();
        user.setUserId(1);
        user.setUsername("testuser");
        user.setEmail("test@example.com");

        when(userRepository.save(user)).thenReturn(user);

        User updatedUser = userService.updateUser(user);

        assertEquals(user.getUserId(), updatedUser.getUserId());
        assertEquals(user.getUsername(), updatedUser.getUsername());
        assertEquals(user.getEmail(), updatedUser.getEmail());
    }

    @Test
    public void testDeleteUser() {
        User user = new User();
        user.setUserId(1);
        user.setUsername("testuser");
        user.setEmail("test@example.com");

        userService.deleteUser(user);

        verify(userRepository, times(1)).delete(user);
    }
}
