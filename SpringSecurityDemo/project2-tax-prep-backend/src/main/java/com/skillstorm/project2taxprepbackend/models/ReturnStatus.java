package com.skillstorm.project2taxprepbackend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "return_status")
public class ReturnStatus {
    @Id
    @Column(name = "return_status_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int returnStatusId;

    @Column(name = "is_submitted")
    @NotNull
    private boolean isSubmitted;

    @Column(name = "user_id", unique = true)
    @NotNull
    private int userId;

    public ReturnStatus() {
    }

    public ReturnStatus(@NotNull boolean isSubmitted, @NotNull int userId) {
        this.isSubmitted = isSubmitted;
        this.userId = userId;
    }

    public ReturnStatus(int returnStatusId, @NotNull boolean isSubmitted, @NotNull int userId) {
        this.returnStatusId = returnStatusId;
        this.isSubmitted = isSubmitted;
        this.userId = userId;
    }

    public int getReturnStatusId() {
        return returnStatusId;
    }

    public void setReturnStatusId(int returnStatusId) {
        this.returnStatusId = returnStatusId;
    }

    public boolean isSubmitted() {
        return isSubmitted;
    }

    public void setSubmitted(boolean isSubmitted) {
        this.isSubmitted = isSubmitted;
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
        result = prime * result + returnStatusId;
        result = prime * result + (isSubmitted ? 1231 : 1237);
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
        ReturnStatus other = (ReturnStatus) obj;
        if (returnStatusId != other.returnStatusId)
            return false;
        if (isSubmitted != other.isSubmitted)
            return false;
        if (userId != other.userId)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "ReturnStatus [returnStatusId=" + returnStatusId + ", isSubmitted=" + isSubmitted + ", userId=" + userId
                + "]";
    }    
}
