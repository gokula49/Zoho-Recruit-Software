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

import com.example.gokula.Repo.CandidatesRepo;
import com.example.gokula.Repo.ContactRepo;
import com.example.gokula.models.Candidates;
import com.example.gokula.models.Contacts;
import com.example.gokula.service.CandidatesService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ContactsController {
	
	
	@Autowired
	ContactRepo contactRepo;
	
//	@Autowired
//	CandidatesService candidatesService;
//	

	@PostMapping("/api/contacts")
	public Contacts postCandidate(@RequestBody Contacts contacts) {
		return contactRepo.save(contacts);
	}
	
	@GetMapping("/api/contacts")
	public List < Contacts >  getCandidates() {
		return contactRepo.findAll();
	}
	
	@GetMapping("/api/contacts/{id}")
	public Optional < Contacts > getSingleCandidate(@PathVariable("id") int id){
		return contactRepo.findById(id);
	}
	
	@DeleteMapping("/api/contacts/{id}")
	public String deleteSingleCandidates(@PathVariable("id") int id) {
		contactRepo.deleteById(id);
		if(contactRepo.existsById(id)) {
			return "Something went Wrong";
		}
		return "Deleted Successfully";
		
	}
	
	
//	@GetMapping("/api/getcandidatebyfname/{name}")
//	public List<Candidates> getCandidatebyfname(@PathVariable("name") String name){
//		return candidatesRepo.findByFirstName(name);
//	}
//	
//	
//	@GetMapping("/api/getcandidatebyemail/{email}")
//	public List<Candidates> getCandidatebyemail(@PathVariable("email") String email){
//		return candidatesRepo.findByEmail(email);
//	}
//	
//	
//	@GetMapping("/api/getcandidatebyphone/{mobile}")
//	public List<Candidates> getCandidatebyphone(@PathVariable("mobile") String mobile){
//		return candidatesRepo.findByMobile(mobile);
//	}

//	
//	@PutMapping("/api/jobopening/{id}")
//	public Company editJobOpenings(@PathVariable("id") int id, @RequestBody Company company) {
//		return companyService.editJobOpening(id, jobopenings);
//		
//	}
	
	

}
