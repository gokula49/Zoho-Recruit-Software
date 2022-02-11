package com.example.gokula.payload.response;

public class CandidateResponsea {







	private int id;
	private String firstName;
	private String email;
	private String phone;
	private String website;
	private String secondaryEmail;
	private String lastName;
	private String mobile;
	private String assessment;
	private String resumeuri;
	private String companyName;
	
	
	
	public CandidateResponsea(int id, String firstName, String email, String phone, String website,
			String secondaryEmail, String lastName, String mobile, String assessment, String resumeuri,
			String companyName) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.email = email;
		this.phone = phone;
		this.website = website;
		this.secondaryEmail = secondaryEmail;
		this.lastName = lastName;
		this.mobile = mobile;
		this.assessment = assessment;
		this.resumeuri = resumeuri;
		this.companyName = companyName;
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
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAssessment() {
		return assessment;
	}
	public void setAssessment(String assessment) {
		this.assessment = assessment;
	}
	public String getResumeuri() {
		return resumeuri;
	}
	public void setResumeuri(String resumeuri) {
		this.resumeuri = resumeuri;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	
	
}



