package com.example.gokula.payload.response;

public class ResponseJobsopeningsforslug {
	private int id;
	private String postingTitle;
	private String contactName;
	private String assignedRecruter;
	private String targetDate;
	private String status;
	private String industry;
	private String salary;
	private String clientName;
	private String accountManager;
	private String dateOpened;
	private String jobType;
	private String workExperience;
	private String skillset;

	private String city;
	private String country;
	private String state;
	private String zip;
	private String companyName;
	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getPostingTitle() {
		return postingTitle;
	}


	public void setPostingTitle(String postingTitle) {
		this.postingTitle = postingTitle;
	}


	public String getContactName() {
		return contactName;
	}


	public void setContactName(String contactName) {
		this.contactName = contactName;
	}


	public String getAssignedRecruter() {
		return assignedRecruter;
	}


	public void setAssignedRecruter(String assignedRecruter) {
		this.assignedRecruter = assignedRecruter;
	}


	public String getTargetDate() {
		return targetDate;
	}


	public void setTargetDate(String targetDate) {
		this.targetDate = targetDate;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getIndustry() {
		return industry;
	}


	public void setIndustry(String industry) {
		this.industry = industry;
	}


	public String getSalary() {
		return salary;
	}


	public void setSalary(String salary) {
		this.salary = salary;
	}


	public String getClientName() {
		return clientName;
	}


	public void setClientName(String clientName) {
		this.clientName = clientName;
	}


	public String getAccountManager() {
		return accountManager;
	}


	public void setAccountManager(String accountManager) {
		this.accountManager = accountManager;
	}


	public String getDateOpened() {
		return dateOpened;
	}


	public void setDateOpened(String dateOpened) {
		this.dateOpened = dateOpened;
	}


	public String getJobType() {
		return jobType;
	}


	public void setJobType(String jobType) {
		this.jobType = jobType;
	}


	public String getWorkExperience() {
		return workExperience;
	}


	public void setWorkExperience(String workExperience) {
		this.workExperience = workExperience;
	}


	public String getSkillset() {
		return skillset;
	}


	public void setSkillset(String skillset) {
		this.skillset = skillset;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getZip() {
		return zip;
	}


	public void setZip(String zip) {
		this.zip = zip;
	}


	public ResponseJobsopeningsforslug(int id, String postingTitle, String contactName, String assignedRecruter,
			String targetDate, String status, String industry, String salary, String clientName, String accountManager,
			String dateOpened, String jobType, String workExperience, String skillset, String city, String country,
			String state, String zip, String companyName) {
		super();
		this.id = id;
		this.postingTitle = postingTitle;
		this.contactName = contactName;
		this.assignedRecruter = assignedRecruter;
		this.targetDate = targetDate;
		this.status = status;
		this.industry = industry;
		this.salary = salary;
		this.clientName = clientName;
		this.accountManager = accountManager;
		this.dateOpened = dateOpened;
		this.jobType = jobType;
		this.workExperience = workExperience;
		this.skillset = skillset;
		this.city = city;
		this.country = country;
		this.state = state;
		this.zip = zip;
		this.companyName = companyName;
	}
	

    
}
