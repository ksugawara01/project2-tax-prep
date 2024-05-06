package com.skillstorm.project2taxprepbackend.models;

import jakarta.persistence.*;

@Entity
public class MarriedFilerTaxBracket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int incomeBracket;
    private double taxRate;

    // Constructors, getters, and setters
    public MarriedFilerTaxBracket() {
    }

    public MarriedFilerTaxBracket(int incomeBracket, double taxRate) {
        this.incomeBracket = incomeBracket;
        this.taxRate = taxRate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getIncomeBracket() {
        return incomeBracket;
    }

    public void setIncomeBracket(int incomeBracket) {
        this.incomeBracket = incomeBracket;
    }

    public double getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }
}