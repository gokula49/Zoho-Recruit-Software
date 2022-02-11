package com.example.gokula.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.gokula.Repo.AssessmentRepo;
import com.example.gokula.Repo.CandidatesRepo;
import com.example.gokula.models.Assessment;
import com.example.gokula.models.Candidates;
import com.example.gokula.payload.response.AssessmentPayload;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AssessmentController {
	
	@Autowired
	AssessmentRepo assessmentRepo;
	
	@Autowired
	CandidatesRepo candidatesRepo;
	
	
	@PostMapping("/api/assessment/{id}")
	public AssessmentPayload postCandidate(@RequestBody Assessment assessment, @PathVariable("id") int id) {
		Candidates candidates = candidatesRepo.findById(id);
//		Candidates candidates = one.get();
		
//        candidates.setAssessment(assessment);
        		
		
		Assessment oneAssessment = assessmentRepo.save(assessment);
		

		
		
	    oneAssessment.setCandidates(candidates);
	    
		Assessment oneAssessments = assessmentRepo.save(assessment);

		Assessment var = assessmentRepo.save(oneAssessments);
	    
	   
	   return new AssessmentPayload(var.getId(),var.getStatus());
		
		
	}
	
	
	@CrossOrigin(origins = "*", maxAge = 3600)
	@PutMapping("/api/assessment/{id}")
	public AssessmentPayload postCandidates(@RequestBody Assessment assessment, @PathVariable("id") int id) {
//		Optional<Candidates> one = candidatesRepo.findById(id);
//		Candidates candidates = one.get();
//		
////        candidates.setAssessment(assessment);
//        		
//		
//		Assessment oneAssessment = assessmentRepo.save(assessment);
//		
//
//		
//		
//	    oneAssessment.setCandidates(candidates);
//	    
//		Assessment oneAssessments = assessmentRepo.save(assessment);
//  
		
//		@PutMapping("/api/jobopening/{id}")
//		public Jobopenings editJobOpenings(@PathVariable("id") int id, @RequestBody Jobopenings jobopenings) {
//			return jobopeningservice.editJobOpening(id, jobopenings);
//			
//		}
		
		
//	    
	  Optional<Assessment> one = assessmentRepo.findById(id);
	  
	  Assessment two = one.get();
	  two.setStatus(assessment.getStatus());
	  
	 
	  Assessment var = assessmentRepo.save(two);
	    
	   
	   return new AssessmentPayload(var.getId(),var.getStatus());
		
		
	}
	
	@GetMapping("/api/assessment")
	public List < Assessment >  getCandidates() {
		
		
		return assessmentRepo.findAll();
	}

}
