package com.example.gokula.payload.response;

public class CandiRes {
	private int id;
	private String firstName;
	private String email;
	private String phone;
	private String website;
	private String secondaryEmail;
	private String lastName;
	private String mobile;
	private String fax;
	private String street;
	private String state;
	private String country;
	private String city;
	private String zip;
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
	private String candidateStatus;
	private String source;
	private String assessment;
	private String resumeuri;
	private String companyName;


	public String getResumeuri() {
		return resumeuri;
	}

	public void setResumeuri(String resumeuri) {
		this.resumeuri = resumeuri;
	}
//	public CandidateResponse(int id, String firstName, String email, String phone, String website,
//			String secondaryEmail, String lastName, String mobile, String fax, String street, String state,
//			String country, String city, String zip, String expInYrs, String cJobTitle, String expectedSalary,
//			String skillSet, String skypeId, String hQualification, String currentEmployer, String currentSalary,
//			String additionalInfo, String twitter, String candidateStatus, String source, String assessment) {
//
//
//		this.id = id;
//		this.firstName = firstName;
//		this.email = email;
//		this.phone = phone;
//		this.website = website;
//		this.secondaryEmail = secondaryEmail;
//		this.lastName = lastName;
//		this.mobile = mobile;
//		this.fax = fax;
//		this.street = street;
//		this.state = state;
//		this.country = country;
//		this.city = city;
//		this.zip = zip;
//		this.expInYrs = expInYrs;
//		this.cJobTitle = cJobTitle;
//		this.expectedSalary = expectedSalary;
//		this.skillSet = skillSet;
//		this.skypeId = skypeId;
//		this.hQualification = hQualification;
//		this.currentEmployer = currentEmployer;
//		this.currentSalary = currentSalary;
//		this.additionalInfo = additionalInfo;
//		this.twitter = twitter;
//		this.candidateStatus = candidateStatus;
//		this.source = source;
//		this.assessment = assessment;
//	}

//	public CandidateResponse(int id2, String firstName2, String email2, String phone2, String website2,
//			String secondaryEmail2, String lastName2, String mobile2, String fax2, String street2, String state2,
//			String country2, String city2, String city3, String zip2, String expInYrs2, String getcJobTitle,
//			String expectedSalary2, String skillSet2, String skypeId2, String gethQualification,
//			String currentEmployer2, String currentSalary2, String additionalInfo2, String twitter2,
//			String candidateStatus2, String source2, String status) {
//		// TODO Auto-generated constructor stub
//	}

	public CandiRes(int id2, String firstName2, String email2, String phone2, String website2,
							 String secondaryEmail2, String lastName2, String mobile2, String fax2, String street2, String state2,
							 String country2, String city2, String zip2, String expInYrs2, String cJobTitle, String expectedSalary2,
							 String skillSet2, String skypeId2, String gethQualification, String currentEmployer2, String currentSalary2,
							 String additionalInfo2, String twitter2, String candidateStatus2, String source2, String status,String uri, String companyName) {


		this.id = id2;
		this.firstName = firstName2;
		this.email = email2;
		this.phone = phone2;
		this.website = website2;
		this.secondaryEmail=secondaryEmail2;
		this.lastName = lastName2;
		this.mobile = mobile2;
		this.fax = fax2;
		this.street = street2;
		this.state = state2;
		this.country =country2;
		this.city = city2;
		this.zip = zip2;
		this.expInYrs = expInYrs2;
		this.cJobTitle = cJobTitle;
		this.expectedSalary = expectedSalary2;
		this.skillSet = skillSet2;
		this.skypeId = skypeId2;
		this.hQualification = gethQualification;

		this.currentEmployer=currentEmployer2;
		this.currentSalary = currentSalary2;
		this.additionalInfo =additionalInfo2;
		this.twitter =twitter2;
		this.candidateStatus = candidateStatus2;
		this.source =source2;
		this.assessment = status;
		this.resumeuri = uri;
		this.companyName = companyName;

		// TODO Auto-generated constructor stub
	}
//	public CandidateResponse(int id, String firstName ) {
//		// TODO Auto-generated constructor stub
//	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
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

	public String getAssessment() {
		return assessment;
	}

	public void setAssessment(String assessment) {
		this.assessment = assessment;
	}


}
