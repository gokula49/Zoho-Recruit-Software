package com.example.gokula.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
public class Assessment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String status;
	
	@OneToOne()
	private Candidates candidates;
	
	
	
	

	public Assessment() {
	}
	
	

	public Assessment(int id, String status, Candidates candidates) {
		super();
		this.id = id;
		this.status = status;
		this.candidates = candidates;
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

	public Candidates getCandidates() {
		return candidates;
	}

	public void setCandidates(Candidates candidates) {
		 this.candidates = candidates;
	}
	


}
