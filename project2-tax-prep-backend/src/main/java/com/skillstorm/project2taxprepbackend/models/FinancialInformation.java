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
    private boolean married;

    @Column(name = "is_standard_deduction")
    private boolean standardDeduction;
    
    @Column(name = "income_w2_default")
    private boolean incomeW2Default;

    @Column(name = "withholdings_w2_default")
    private boolean withholdingsW2Default;

    @Column(name = "income_1099_default")
    private boolean income1099Default;

    @Column(name = "deductions_default")
    private boolean deductionsDefault;

    @Column(name = "is_married_default")
    private boolean marriedDefault;

    @Column(name = "is_standard_deduction_default")
    private boolean standardDeductionDefault;

    @Column(name="user_id", unique = true)
    @NotNull
    private int userId;

    public FinancialInformation() {
    }

    public FinancialInformation(@Min(0) double incomeW2, @Min(0) double withholdingsW2, @Min(0) double income1099,
            @Min(0) double deductions, boolean married, boolean standardDeduction, boolean incomeW2Default,
            boolean withholdingsW2Default, boolean income1099Default, boolean deductionsDefault, boolean marriedDefault,
            boolean standardDeductionDefault, @NotNull int userId) {
        this.incomeW2 = incomeW2;
        this.withholdingsW2 = withholdingsW2;
        this.income1099 = income1099;
        this.deductions = deductions;
        this.married = married;
        this.standardDeduction = standardDeduction;
        this.incomeW2Default = incomeW2Default;
        this.withholdingsW2Default = withholdingsW2Default;
        this.income1099Default = income1099Default;
        this.deductionsDefault = deductionsDefault;
        this.marriedDefault = marriedDefault;
        this.standardDeductionDefault = standardDeductionDefault;
        this.userId = userId;
    }

    public FinancialInformation(int financialInformationId, @Min(0) double incomeW2, @Min(0) double withholdingsW2,
            @Min(0) double income1099, @Min(0) double deductions, boolean married, boolean standardDeduction,
            boolean incomeW2Default, boolean withholdingsW2Default, boolean income1099Default,
            boolean deductionsDefault, boolean marriedDefault, boolean standardDeductionDefault, @NotNull int userId) {
        this.financialInformationId = financialInformationId;
        this.incomeW2 = incomeW2;
        this.withholdingsW2 = withholdingsW2;
        this.income1099 = income1099;
        this.deductions = deductions;
        this.married = married;
        this.standardDeduction = standardDeduction;
        this.incomeW2Default = incomeW2Default;
        this.withholdingsW2Default = withholdingsW2Default;
        this.income1099Default = income1099Default;
        this.deductionsDefault = deductionsDefault;
        this.marriedDefault = marriedDefault;
        this.standardDeductionDefault = standardDeductionDefault;
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
        return married;
    }

    public void setMarried(boolean married) {
        this.married = married;
    }

    public boolean isStandardDeduction() {
        return standardDeduction;
    }

    public void setStandardDeduction(boolean standardDeduction) {
        this.standardDeduction = standardDeduction;
    }

    public boolean isIncomeW2Default() {
        return incomeW2Default;
    }

    public void setIncomeW2Default(boolean incomeW2Default) {
        this.incomeW2Default = incomeW2Default;
    }

    public boolean isWithholdingsW2Default() {
        return withholdingsW2Default;
    }

    public void setWithholdingsW2Default(boolean withholdingsW2Default) {
        this.withholdingsW2Default = withholdingsW2Default;
    }

    public boolean isIncome1099Default() {
        return income1099Default;
    }

    public void setIncome1099Default(boolean income1099Default) {
        this.income1099Default = income1099Default;
    }

    public boolean isDeductionsDefault() {
        return deductionsDefault;
    }

    public void setDeductionsDefault(boolean deductionsDefault) {
        this.deductionsDefault = deductionsDefault;
    }

    public boolean isMarriedDefault() {
        return marriedDefault;
    }

    public void setMarriedDefault(boolean marriedDefault) {
        this.marriedDefault = marriedDefault;
    }

    public boolean isStandardDeductionDefault() {
        return standardDeductionDefault;
    }

    public void setStandardDeductionDefault(boolean standardDeductionDefault) {
        this.standardDeductionDefault = standardDeductionDefault;
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
        result = prime * result + (married ? 1231 : 1237);
        result = prime * result + (standardDeduction ? 1231 : 1237);
        result = prime * result + (incomeW2Default ? 1231 : 1237);
        result = prime * result + (withholdingsW2Default ? 1231 : 1237);
        result = prime * result + (income1099Default ? 1231 : 1237);
        result = prime * result + (deductionsDefault ? 1231 : 1237);
        result = prime * result + (marriedDefault ? 1231 : 1237);
        result = prime * result + (standardDeductionDefault ? 1231 : 1237);
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
        if (married != other.married)
            return false;
        if (standardDeduction != other.standardDeduction)
            return false;
        if (incomeW2Default != other.incomeW2Default)
            return false;
        if (withholdingsW2Default != other.withholdingsW2Default)
            return false;
        if (income1099Default != other.income1099Default)
            return false;
        if (deductionsDefault != other.deductionsDefault)
            return false;
        if (marriedDefault != other.marriedDefault)
            return false;
        if (standardDeductionDefault != other.standardDeductionDefault)
            return false;
        if (userId != other.userId)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "FinancialInformation [financialInformationId=" + financialInformationId + ", incomeW2=" + incomeW2
                + ", withholdingsW2=" + withholdingsW2 + ", income1099=" + income1099 + ", deductions=" + deductions
                + ", married=" + married + ", standardDeduction=" + standardDeduction + ", incomeW2Default="
                + incomeW2Default + ", withholdingsW2Default=" + withholdingsW2Default + ", income1099Default="
                + income1099Default + ", deductionsDefault=" + deductionsDefault + ", marriedDefault=" + marriedDefault
                + ", standardDeductionDefault=" + standardDeductionDefault + ", userId=" + userId + "]";
    }

}
