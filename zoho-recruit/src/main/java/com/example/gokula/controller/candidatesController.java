package com.example.gokula.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.gokula.Repo.CandidatesRepo;
import com.example.gokula.models.Candidates;
import com.example.gokula.models.FileDB;
import com.example.gokula.models.Jobopenings;
import com.example.gokula.payload.response.CandiRes;
import com.example.gokula.payload.response.CandidateResponse;
import com.example.gokula.payload.response.CandidateResponsea;
import com.example.gokula.payload.response.ResponseJobsopenings;
import com.example.gokula.service.CandidatesService;
import com.example.gokula.service.FileStorageService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class candidatesController {
 
	@Autowired
    CandidatesRepo candidatesRepo;
	
	@Autowired
	CandidatesService candidatesService;
	@Autowired
	FileStorageService fileStorageService;
	

	@PostMapping("/api/candidate/{id}")
	public Candidates postCandidate(@RequestBody Candidates candidates, @PathVariable("id") String id) {
		FileDB fileDB = fileStorageService.getFile(id);
		candidates.setFileDB(fileDB);
		return candidatesService.postCandidates(candidates);
	}
	
	@GetMapping("/api/candidates")
	public List < CandidateResponse >  getCandidates() {
		
//		int id, String firstName, String email, String phone, String website, String secondaryEmail,
//		String lastName, String mobile, String fax, String street, String state, String country, String city,
//		String zip, String expInYrs, String cJobTitle, String expectedSalary, String skillSet, String skypeId,
//		String hQualification, String currentEmployer, String currentSalary, String additionalInfo, String twitter,
//		String candidateStatus, String source, Assessment assessment
//		
		 List < Candidates >  candidates=  candidatesService.getAllCandidates();
		 List <CandidateResponse> res = new ArrayList<>();
		 		 
		 for(Candidates can : candidates) {
			 String fileDownloadUri = ServletUriComponentsBuilder
					 .fromCurrentContextPath()
					 .path("/files/")
					 .path(can.getFileDB().getId())
					 .toUriString();
			 res.add( new CandidateResponse( can.getId(),can.getFirstName(),can.getEmail(),can.getPhone(),can.getWebsite(),
					 can.getSecondaryEmail(),can.getLastName(),can.getMobile(),can.getFax(),
					 can.getStreet(),can.getState(),can.getCountry(),can.getCity(),
					 can.getZip(),can.getExpInYrs(),can.getcJobTitle(),
					 can.getExpectedSalary(),can.getSkillSet(),can.getSkypeId(),
					 can.gethQualification(),can.getCurrentEmployer(),can.getCurrentSalary(),
					 can.getAdditionalInfo(),can.getTwitter(),can.getCandidateStatus(),can.getSource()
					 ,can.getAssessment().getStatus(),fileDownloadUri,can.getCompanyName()
					 ) );
			 
			 
			 
		 }
	 
		 return res;
		
//		return candidatesService.getAllCandidates();
		
//		return new()
	}
	
	@GetMapping("/api/candidate/{id}")
	public  CandiRes getSingleCandidate(@PathVariable("id") int id){
		Candidates can = candidatesRepo.findById(id);
		String fileDownloadUri = ServletUriComponentsBuilder
				.fromCurrentContextPath()
				.path("/files/")
				.path(can.getFileDB().getId())
				.toUriString();
//		Candidates can = one.get();
//		CandidateResponse cres = new CandidateResponse( can.getId(),can.getFirstName(),can.getEmail(),can.getPhone(),can.getWebsite(),
//				 can.getSecondaryEmail(),can.getLastName(),can.getMobile(),can.getFax(),
//				 can.getStreet(),can.getState(),can.getCountry(),can.getCity(),
//				 can.getZip(),can.getExpInYrs(),can.getcJobTitle(),
//				 can.getExpectedSalary(),can.getSkillSet(),can.getSkypeId(),
//				 can.gethQualification(),can.getCurrentEmployer(),can.getCurrentSalary(),
//				 can.getAdditionalInfo(),can.getTwitter(),can.getCandidateStatus(),can.getSource()
//				 ,can.getAssessment().getStatus()
//				 );
		
		
		CandiRes cres = new CandiRes( can.getId(),can.getFirstName(),can.getEmail(),can.getPhone(),can.getWebsite(),
				can.getSecondaryEmail(),can.getLastName(),can.getMobile(),can.getFax(),
				can.getStreet(),can.getState(),can.getCountry(),can.getCity(),
				can.getZip(),can.getExpInYrs(),can.getcJobTitle(),
				can.getExpectedSalary(),can.getSkillSet(),can.getSkypeId(),
				can.gethQualification(),can.getCurrentEmployer(),can.getCurrentSalary(),
				can.getAdditionalInfo(),can.getTwitter(),can.getCandidateStatus(),can.getSource()
				,can.getAssessment().getStatus(),fileDownloadUri,can.getCompanyName()
		);
		return cres;
		
	
//		return cres;
	}
	
	@DeleteMapping("/api/candidate/{id}")
	public String deleteSingleCandidates(@PathVariable("id") int id) {
		return candidatesService.deleteSingleCandidate(id);
		
	}
	
	
	@GetMapping("/api/getcandidatebyfname/{name}")
	public List<Candidates> getCandidatebyfname(@PathVariable("name") String name){
		return candidatesRepo.findByFirstName(name);
	}
	
	
	@GetMapping("/api/getcandidatebyemail/{email}")
	public List<Candidates> getCandidatebyemail(@PathVariable("email") String email){
		return candidatesRepo.findByEmail(email);
	}
	
	
	@GetMapping("/api/getcandidatebyphone/{mobile}")
	public List<Candidates> getCandidatebyphone(@PathVariable("mobile") String mobile){
		return candidatesRepo.findByMobile(mobile);
	}

//	
//	@PutMapping("/api/jobopening/{id}")
//	public Company editJobOpenings(@PathVariable("id") int id, @RequestBody Company company) {
//		return companyService.editJobOpening(id, jobopenings);
//		
//	}
	@GetMapping("/api/candidatewithpass")
	public List<CandidateResponse> getPassCandidates(){
		List < Candidates >  candidates=  candidatesService.getAllCandidates();
		List <CandidateResponse> res = new ArrayList<>();

		for(Candidates can : candidates) {
			if(can.getAssessment().getStatus()=="pass") {
				String fileDownloadUri = ServletUriComponentsBuilder
						.fromCurrentContextPath()
						.path("/files/")
						.path(can.getFileDB().getId())
						.toUriString();
				 new CandiRes( can.getId(),can.getFirstName(),can.getEmail(),can.getPhone(),can.getWebsite(),
						can.getSecondaryEmail(),can.getLastName(),can.getMobile(),can.getFax(),
						can.getStreet(),can.getState(),can.getCountry(),can.getCity(),
						can.getZip(),can.getExpInYrs(),can.getcJobTitle(),
						can.getExpectedSalary(),can.getSkillSet(),can.getSkypeId(),
						can.gethQualification(),can.getCurrentEmployer(),can.getCurrentSalary(),
						can.getAdditionalInfo(),can.getTwitter(),can.getCandidateStatus(),can.getSource()
						,can.getAssessment().getStatus(),fileDownloadUri,can.getCompanyName()
				);
			}




		}

		return res;

	}
	
	
	
//	findByCompanyName
	
	
	
	@GetMapping("/api/candidatesbyc/{name}")
	public List < CandidateResponse >  getCandikkkkdates(@PathVariable("name") String name) {
		
//		int id, String firstName, String email, String phone, String website, String secondaryEmail,
//		String lastName, String mobile, String fax, String street, String state, String country, String city,
//		String zip, String expInYrs, String cJobTitle, String expectedSalary, String skillSet, String skypeId,
//		String hQualification, String currentEmployer, String currentSalary, String additionalInfo, String twitter,
//		String candidateStatus, String source, Assessment assessment
		 List < Candidates >  candidates=  candidatesRepo.findByCompanyName(name);
		 List <CandidateResponse> res = new ArrayList<>();
		 		 
		 for(Candidates can : candidates) {
			 String fileDownloadUri = ServletUriComponentsBuilder
					 .fromCurrentContextPath()
					 .path("/files/")
					 .path(can.getFileDB().getId())
					 .toUriString();
			 res.add( new CandidateResponse( can.getId(),can.getFirstName(),can.getEmail(),can.getPhone(),can.getWebsite(),
					 can.getSecondaryEmail(),can.getLastName(),can.getMobile(),can.getFax(),
					 can.getStreet(),can.getState(),can.getCountry(),can.getCity(),
					 can.getZip(),can.getExpInYrs(),can.getcJobTitle(),
					 can.getExpectedSalary(),can.getSkillSet(),can.getSkypeId(),
					 can.gethQualification(),can.getCurrentEmployer(),can.getCurrentSalary(),
					 can.getAdditionalInfo(),can.getTwitter(),can.getCandidateStatus(),can.getSource()
					 ,can.getAssessment().getStatus(),fileDownloadUri,can.getCompanyName()
					 ) );
			 
			 
			 
		 }
	 
		 return res;
	 
		//		return candidatesService.getAllCandidates();
		
//		return new()
	}
	
	
	
	
//	@GetMapping("/api/cjobopening/{companyname}")
//	public List < ResponseJobsopenings>  getSingleJopopenings(@PathVariable("companyname") String companyname){
//		List<ResponseJobsopenings> end =new ArrayList<>();
//		
//		List<Jobopenings> jobs = jobopeningRepo.findByCompanyName(companyname);
//
//
//		for(Jobopenings job:jobs){
//			
//			
//			String fileDownloadUri = ServletUriComponentsBuilder
//					.fromCurrentContextPath()
//					.path("/files/")
//					.path(job.getFileDB().getId())
//					.toUriString();
//			
//			end.add(new ResponseJobsopenings(job.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri,job.getCompanyName()));
//
//		}
//		return end;
//		
//	}
	
	
	
}
