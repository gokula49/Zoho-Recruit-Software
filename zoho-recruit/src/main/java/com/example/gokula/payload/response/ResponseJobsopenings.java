package com.example.gokula.payload.response;

public class ResponseJobsopenings {
    private int id;
    private String postingTitles;
    private String assignedRecruters;
    private String targetDates;
    private String accountManagers;
    private String states;
    private String uri;
    private String companyName;

    public ResponseJobsopenings(int id, String postingTitles, String assignedRecruters, String targetDates, String accountManagers, String states,String uri, String companyName) {
        this.id = id;
        this.postingTitles = postingTitles;
        this.assignedRecruters = assignedRecruters;
        this.targetDates = targetDates;
        this.accountManagers = accountManagers;
        this.states = states;
        this.uri = uri;
        this.companyName = companyName;
    }



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

    public String getPostingTitles() {
        return postingTitles;
    }

    public void setPostingTitles(String postingTitles) {
        this.postingTitles = postingTitles;
    }

    public String getAssignedRecruters() {
        return assignedRecruters;
    }

    public void setAssignedRecruters(String assignedRecruters) {
        this.assignedRecruters = assignedRecruters;
    }

    public String getTargetDates() {
        return targetDates;
    }

    public void setTargetDates(String targetDates) {
        this.targetDates = targetDates;
    }

    public String getAccountManagers() {
        return accountManagers;
    }

    public void setAccountManagers(String accountManagers) {
        this.accountManagers = accountManagers;
    }

    public String getStates() {
        return states;
    }

    public void setStates(String states) {
        this.states = states;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }
}
