package com.example.gokula.payload.response;

public class AssessmentPayload {

	private int id;
	private String status;
	
	

	public AssessmentPayload(int id, String status) {
		super();
		this.id = id;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
