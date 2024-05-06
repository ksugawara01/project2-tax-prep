package com.skillstorm.project2taxprepbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Disable CSRF for simplicity, adjust based on your requirements
                .authorizeHttpRequests(authz -> authz
                                .requestMatchers("/login", "/home").permitAll()  // Allow unrestricted access to these paths
                                .anyRequest().authenticated()  // Require authentication for any other request
                )
                .formLogin(form -> form
                                .loginPage("/login")  // Specify the custom login page
                                .defaultSuccessUrl("/home", true)  // Redirect to the home page on successful login
                )
                .logout(logout -> logout
                                .logoutSuccessUrl("/login")  // Redirect to login page on logout
                )
                .httpBasic(httpBasic -> httpBasic.realmName("YourApp"));  // Configure HTTP Basic authentication
        
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Specify the encoder to be used for password encoding
    }
}


