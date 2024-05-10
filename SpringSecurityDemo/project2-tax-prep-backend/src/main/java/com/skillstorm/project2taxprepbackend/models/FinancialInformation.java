package com.skillstorm.project2taxprepbackend.models;

import jakarta.persistence.*;

@Entity // Assuming you'll store this in a database
public class FinancialInformation {
    @Id
    @GeneratedValue
    private Long id;

    private double incomeW2;
    private double withholdingsW2;
    private double income1099;
    private double deductions;
    private int dependents;
    private boolean married;
    private boolean aotc;
    private boolean cleanEnergy;
    private boolean standardDeduction; // Add this if relevant
    // ... boolean flags for defaults

    private Long userId; // Assuming a User entity exists

    public FinancialInformation() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getIncomeW2() {
        return incomeW2;
    }

    public void setIncomeW2(double incomeW2) {
        this.incomeW2 = incomeW2;
    }

    public double getWithholdingsW2() {
        return withholdingsW2;
    }

    public void setWithholdingsW2(double withholdingsW2) {
        this.withholdingsW2 = withholdingsW2;
    }

    public double getIncome1099() {
        return income1099;
    }

    public void setIncome1099(double income1099) {
        this.income1099 = income1099;
    }

    public double getDeductions() {
        return deductions;
    }

    public void setDeductions(double deductions) {
        this.deductions = deductions;
    }

    public int getDependents() {
        return dependents;
    }

    public void setDependents(int dependents) {
        this.dependents = dependents;
    }

    public boolean isMarried() {
        return married;
    }

    public void setMarried(boolean married) {
        this.married = married;
    }

    public boolean isAotc() {
        return aotc;
    }

    public void setAotc(boolean aotc) {
        this.aotc = aotc;
    }

    public boolean isCleanEnergy() {
        return cleanEnergy;
    }

    public void setCleanEnergy(boolean cleanEnergy) {
        this.cleanEnergy = cleanEnergy;
    }

    public boolean isStandardDeduction() {
        return standardDeduction;
    }

    public void setStandardDeduction(boolean standardDeduction) {
        this.standardDeduction = standardDeduction;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    // Getters, Setters, Constructors 
    
}

