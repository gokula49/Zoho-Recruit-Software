package com.example.gokula.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Candidates {

	// Basic Info

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String firstName;
	private String email;
	private String phone;
	private String website;
	private String secondaryEmail;
	private String lastName;
	private String mobile;
	private String fax;

	// Address
	private String street;
	private String state;
	private String country;
	private String city;
	private String zip;

	// professional details
	private String expInYrs;
	private String cJobTitle;
	private String expectedSalary;
	private String skillSet;
	private String skypeId;
	private String hQualification;
	private String currentEmployer;
	private String currentSalary;
	private String additionalInfo;
	private String twitter;

	// other info
	private String candidateStatus;
	private String source;
	private String companyName;

	@OneToOne(fetch = FetchType.EAGER,mappedBy = "candidates")
	private Assessment assessment;

	public FileDB getFileDB() {
		return fileDB;
	}

	public void setFileDB(FileDB fileDB) {
		this.fileDB = fileDB;
	}

	@OneToOne
	private FileDB fileDB;

	public Candidates() {
	}

	public Candidates(int id, String firstName, String email, String phone, String website, String secondaryEmail,
			String lastName, String mobile, String fax, String street, String state, String country, String city,
			String zip, String expInYrs, String cJobTitle, String expectedSalary, String skillSet, String skypeId,
			String hQualification, String currentEmployer, String currentSalary, String additionalInfo, String twitter,
			String candidateStatus,String source,String companyName, Assessment assessment) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.email = email;
		this.phone = phone;
		this.website = website;
		this.secondaryEmail = secondaryEmail;
		this.lastName = lastName;
		this.mobile = mobile;
		this.fax = fax;
		this.street = street;
		this.state = state;
		this.country = country;
		this.city = city;
		this.zip = zip;
		this.expInYrs = expInYrs;
		this.cJobTitle = cJobTitle;
		this.expectedSalary = expectedSalary;
		this.skillSet = skillSet;
		this.skypeId = skypeId;
		this.hQualification = hQualification;
		this.currentEmployer = currentEmployer;
		this.currentSalary = currentSalary;
		this.additionalInfo = additionalInfo;
		this.twitter = twitter;
		this.candidateStatus = candidateStatus;
		this.source = source;
		this.companyName = companyName;
		this.assessment = assessment;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getSecondaryEmail() {
		return secondaryEmail;
	}

	public void setSecondaryEmail(String secondaryEmail) {
		this.secondaryEmail = secondaryEmail;
	}

	public String getLastName() {
		return lastName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getExpInYrs() {
		return expInYrs;
	}

	public void setExpInYrs(String expInYrs) {
		this.expInYrs = expInYrs;
	}

	public String getcJobTitle() {
		return cJobTitle;
	}

	public void setcJobTitle(String cJobTitle) {
		this.cJobTitle = cJobTitle;
	}

	public String getExpectedSalary() {
		return expectedSalary;
	}

	public void setExpectedSalary(String expectedSalary) {
		this.expectedSalary = expectedSalary;
	}

	public String getSkillSet() {
		return skillSet;
	}

	public void setSkillSet(String skillSet) {
		this.skillSet = skillSet;
	}

	public String getSkypeId() {
		return skypeId;
	}

	public void setSkypeId(String skypeId) {
		this.skypeId = skypeId;
	}

	public String gethQualification() {
		return hQualification;
	}

	public void sethQualification(String hQualification) {
		this.hQualification = hQualification;
	}

	public String getCurrentEmployer() {
		return currentEmployer;
	}

	public void setCurrentEmployer(String currentEmployer) {
		this.currentEmployer = currentEmployer;
	}

	public String getCurrentSalary() {
		return currentSalary;
	}

	public void setCurrentSalary(String currentSalary) {
		this.currentSalary = currentSalary;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	public String getTwitter() {
		return twitter;
	}

	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}

	public String getCandidateStatus() {
		return candidateStatus;
	}

	public void setCandidateStatus(String candidateStatus) {
		this.candidateStatus = candidateStatus;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public Assessment getAssessment() {
		return assessment;
	}

	public void setAssessment(Assessment assessment) {
		this.assessment = assessment;
	}

}