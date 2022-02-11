package com.example.gokula.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contacts {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String firstName;
	private String email;
	private String phone;
	private String secondary_email;
	private String last_name;
	private String mobile;
	private String fax;

	public Contacts() {
	}

	public Contacts(int id, String firstName, String email, String phone, String secondary_email, String last_name,
					String mobile, String fax) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.email = email;
		this.phone = phone;
		this.secondary_email = secondary_email;
		this.last_name = last_name;
		this.mobile = mobile;
		this.fax = fax;
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

	public String getSecondary_email() {
		return secondary_email;
	}

	public void setSecondary_email(String secondary_email) {
		this.secondary_email = secondary_email;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
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

}
