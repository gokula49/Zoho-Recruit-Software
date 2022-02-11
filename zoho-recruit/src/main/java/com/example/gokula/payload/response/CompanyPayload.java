package com.example.gokula.payload.response;

import com.example.gokula.models.User;

public class CompanyPayload {

	private int id;
	private String companyname;
	private String phoneno;
	private String website;
	private String timeZone;
	private String currencyLocale;
	
	public CompanyPayload(int id, String companyname, String phoneno, String website, String timeZone,
			String currencyLocale) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.phoneno = phoneno;
		this.website = website;
		this.timeZone = timeZone;
		this.currencyLocale = currencyLocale;
	
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getTimeZone() {
		return timeZone;
	}
	public void setTimeZone(String timeZone) {
		this.timeZone = timeZone;
	}
	public String getCurrencyLocale() {
		return currencyLocale;
	}
	public void setCurrencyLocale(String currencyLocale) {
		this.currencyLocale = currencyLocale;
	}

	
	
	
	
}
