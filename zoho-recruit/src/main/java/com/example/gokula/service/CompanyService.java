package com.example.gokula.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gokula.Repo.CompanyRepo;
import com.example.gokula.models.Company;

@Service
public class CompanyService {
	
	@Autowired
	CompanyRepo companyRepo;

	
	public Company postCompany(Company company) {
		return companyRepo.save(company);	
	}
	
	public List <Company> getAllCompany() {
		return companyRepo.findAll();
	}
	
//	public Optional<Company> getSingleCompany(int id) {
//	   return companyRepo.findById(id);
//	}
	public String deleteSingleCompany(int id) {
		companyRepo.deleteById(id);
		if(companyRepo.existsById(id)) {
			return "Something went Wrong";
		}
		return "Deleted Successfully";
	}
	
	
	
	

}
