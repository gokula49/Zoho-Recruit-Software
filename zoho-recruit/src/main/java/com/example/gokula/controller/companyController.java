package com.example.gokula.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.gokula.Repo.CompanyRepo;
import com.example.gokula.Repo.UserRepository;
import com.example.gokula.models.Company;
import com.example.gokula.models.User;
import com.example.gokula.payload.response.CompanyPayload;
import com.example.gokula.service.CompanyService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class companyController {
 
	@Autowired
    CompanyRepo companyRepo;
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	CompanyService companyService;
	

	@PostMapping("/api/company/{id}")
	public Company postCompany(@RequestBody Company company, @PathVariable("id") 	Long id) {
	  Optional<User> user = userRepository.findById(id);
	  User oneuser=user.get();
	 Company  oneCompany= companyService.postCompany(company);
	 oneCompany.setUser(oneuser);
	 companyService.postCompany(oneCompany);
	 
	 
//	 int id, String companyname, String phoneno, String website, String timeZone,
//		String currencyLocale, User user
//	 CompanyPayload companyPayload = new CompanyPayload(oneCompany.getId(),oneCompany.getCompanyname(),
//			 oneCompany.getPhoneno(),oneCompany.getWebsite(),oneCompany.getTimeZone(),oneCompany.getCurrencyLocale()
//			 ,oneCompany.getUser());
	 
	// return (new companyPayload(oneCompany.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri));
	  
          return oneCompany;
	  }
	@GetMapping("/api/company")
	public List < Company >  getAllCompany() {
		return companyService.getAllCompany();
	}
	
	@GetMapping("/api/company/{id}")
	public CompanyPayload  getSingleCompany(@PathVariable("id") int id){
	Company oneCompany	= companyRepo.findById(id);
//		Company oneCompany = one.get();
				 CompanyPayload companyPayload = new CompanyPayload(oneCompany.getId(),oneCompany.getCompanyname(),
				 oneCompany.getPhoneno(),oneCompany.getWebsite(),oneCompany.getTimeZone(),oneCompany.getCurrencyLocale()
				 );
		 
		// return (new companyPayload(oneCompany.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri));
		  
	          return companyPayload;
		
		
//		return companyService.getSingleCompany(id);
	}
	
	@DeleteMapping("/api/company/{id}")
	public String deleteSingleCompany(@PathVariable("id") int id) {
		return companyService.deleteSingleCompany(id);
		
	}
//	
//	@PutMapping("/api/jobopening/{id}")
//	public Company editJobOpenings(@PathVariable("id") int id, @RequestBody Company company) {
//		return companyService.editJobOpening(id, jobopenings);
//		
//	}
	
	
}
