package com.skillstorm.project2taxprepbackend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "personal_information")
public class PersonalInformation {
    @Column(name = "personal_information_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int personalInformationId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "street_address")
    private String streetAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "state_name")
    private String stateName;

    @Column(name = "zip")
    private String zip;

    @Column(name = "ssn")
    private String ssn;

    @Column(name = "user_id", unique = true)
    @NotNull
    private int userId;

    public PersonalInformation() {
    }

    public PersonalInformation(String firstName, String lastName, String streetAddress, String city, String stateName,
            String zip, String ssn, @NotNull int userId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.stateName = stateName;
        this.zip = zip;
        this.ssn = ssn;
        this.userId = userId;
    }

    public PersonalInformation(int personalInformationId, String firstName, String lastName, String streetAddress,
            String city, String stateName, String zip, String ssn, @NotNull int userId) {
        this.personalInformationId = personalInformationId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.stateName = stateName;
        this.zip = zip;
        this.ssn = ssn;
        this.userId = userId;
    }

    public int getPersonalInformationId() {
        return personalInformationId;
    }

    public void setPersonalInformationId(int personalInformationId) {
        this.personalInformationId = personalInformationId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStateName() {
        return stateName;
    }

    public void setState(String stateName) {
        this.stateName = stateName;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
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
        result = prime * result + personalInformationId;
        result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
        result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
        result = prime * result + ((streetAddress == null) ? 0 : streetAddress.hashCode());
        result = prime * result + ((city == null) ? 0 : city.hashCode());
        result = prime * result + ((stateName == null) ? 0 : stateName.hashCode());
        result = prime * result + ((zip == null) ? 0 : zip.hashCode());
        result = prime * result + ((ssn == null) ? 0 : ssn.hashCode());
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
        PersonalInformation other = (PersonalInformation) obj;
        if (personalInformationId != other.personalInformationId)
            return false;
        if (firstName == null) {
            if (other.firstName != null)
                return false;
        } else if (!firstName.equals(other.firstName))
            return false;
        if (lastName == null) {
            if (other.lastName != null)
                return false;
        } else if (!lastName.equals(other.lastName))
            return false;
        if (streetAddress == null) {
            if (other.streetAddress != null)
                return false;
        } else if (!streetAddress.equals(other.streetAddress))
            return false;
        if (city == null) {
            if (other.city != null)
                return false;
        } else if (!city.equals(other.city))
            return false;
        if (stateName == null) {
            if (other.stateName != null)
                return false;
        } else if (!stateName.equals(other.stateName))
            return false;
        if (zip == null) {
            if (other.zip != null)
                return false;
        } else if (!zip.equals(other.zip))
            return false;
        if (ssn == null) {
            if (other.ssn != null)
                return false;
        } else if (!ssn.equals(other.ssn))
            return false;
        if (userId != other.userId)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "PersonalInformation [personalInformationId=" + personalInformationId + ", firstName=" + firstName
                + ", lastName=" + lastName + ", streetAddress=" + streetAddress + ", city=" + city + ", stateName=" + stateName
                + ", zip=" + zip + ", ssn=" + ssn + ", userId=" + userId + "]";
    }
}
