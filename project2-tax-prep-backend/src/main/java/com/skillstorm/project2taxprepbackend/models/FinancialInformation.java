package com.skillstorm.project2taxprepbackend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "financial_information")
public class FinancialInformation {
    @Column(name = "financial_information_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int financialInformationId;

    @Column(name = "income_w2")
    @Min(0)
    private double incomeW2;

    @Min(0)
    @Column(name = "withholdings_w2")
    private double withholdingsW2;

    @Min(0)
    @Column(name = "income_1099")
    private double income1099;

    @Min(0)
    @Column(name = "deductions")
    private double deductions;

    @Column(name = "is_married")
    private boolean isMarried;

    @Column(name = "is_standard_deduction")
    private boolean isStandardDeduction;

    @Column(name="user_id", unique = true)
    @NotNull
    private int userId;

    public FinancialInformation() {
    }

    public FinancialInformation(@Min(0) double incomeW2, @Min(0) double withholdingsW2, @Min(0) double income1099,
            @Min(0) double deductions, boolean isMarried, boolean isStandardDeduction, @NotNull int userId) {
        this.incomeW2 = incomeW2;
        this.withholdingsW2 = withholdingsW2;
        this.income1099 = income1099;
        this.deductions = deductions;
        this.isMarried = isMarried;
        this.isStandardDeduction = isStandardDeduction;
        this.userId = userId;
    }

    public FinancialInformation(int financialInformationId, @Min(0) double incomeW2, @Min(0) double withholdingsW2,
            @Min(0) double income1099, @Min(0) double deductions, boolean isMarried, boolean isStandardDeduction,
            @NotNull int userId) {
        this.financialInformationId = financialInformationId;
        this.incomeW2 = incomeW2;
        this.withholdingsW2 = withholdingsW2;
        this.income1099 = income1099;
        this.deductions = deductions;
        this.isMarried = isMarried;
        this.isStandardDeduction = isStandardDeduction;
        this.userId = userId;
    }

    public int getFinancialInformationId() {
        return financialInformationId;
    }

    public void setFinancialInformationId(int financialInformationId) {
        this.financialInformationId = financialInformationId;
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

    public boolean isMarried() {
        return isMarried;
    }

    public void setMarried(boolean isMarried) {
        this.isMarried = isMarried;
    }

    public boolean isStandardDeduction() {
        return isStandardDeduction;
    }

    public void setStandardDeduction(boolean isStandardDeduction) {
        this.isStandardDeduction = isStandardDeduction;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + financialInformationId;
        long temp;
        temp = Double.doubleToLongBits(incomeW2);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(withholdingsW2);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(income1099);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(deductions);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        result = prime * result + (isMarried ? 1231 : 1237);
        result = prime * result + (isStandardDeduction ? 1231 : 1237);
        result = prime * result + userId;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        FinancialInformation other = (FinancialInformation) obj;
        if (financialInformationId != other.financialInformationId)
            return false;
        if (Double.doubleToLongBits(incomeW2) != Double.doubleToLongBits(other.incomeW2))
            return false;
        if (Double.doubleToLongBits(withholdingsW2) != Double.doubleToLongBits(other.withholdingsW2))
            return false;
        if (Double.doubleToLongBits(income1099) != Double.doubleToLongBits(other.income1099))
            return false;
        if (Double.doubleToLongBits(deductions) != Double.doubleToLongBits(other.deductions))
            return false;
        if (isMarried != other.isMarried)
            return false;
        if (isStandardDeduction != other.isStandardDeduction)
            return false;
        if (userId != other.userId)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "FinancialInformation [financialInformationId=" + financialInformationId + ", incomeW2=" + incomeW2
                + ", withholdingsW2=" + withholdingsW2 + ", income1099=" + income1099 + ", deductions=" + deductions
                + ", isMarried=" + isMarried + ", isStandardDeduction=" + isStandardDeduction + ", userId=" + userId
                + "]";
    }


}
