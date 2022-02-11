package com.example.gokula.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gokula.Repo.JobopeningsRepo;
import com.example.gokula.models.Jobopenings;
import com.example.gokula.payload.response.ResponseJobsopenings;

@Service
public class JobOpeningService {
	
	@Autowired
	JobopeningsRepo jobopeningsRepo;

	
	public Jobopenings postJobOpenings(Jobopenings jobopenings) {
		return jobopeningsRepo.save(jobopenings);	
	}
	
	public List <Jobopenings> getAllJobOpenings() {
		return jobopeningsRepo.findAll();
	}
	
	public List<Jobopenings> getSingleJobOpening(int id) {
	   return jobopeningsRepo.findById(id);
	}
	public String deleteJobopenings(int id) {
		jobopeningsRepo.deleteById(id);
		if(jobopeningsRepo.existsById(id)) {
			return "Something went Wrong";
		}
		return "Deleted Successfully";
	}
	
	public Jobopenings editJobOpening(int id,Jobopenings jobopenings) {
		Jobopenings openings = jobopeningsRepo.getById(id);
		
		
		openings.setPostingTitle(jobopenings.getPostingTitle()); 
		openings.setContactName(jobopenings.getContactName()); 
		openings.setAssignedRecruter(jobopenings.getAssignedRecruter());
		openings.setTargetDate(jobopenings.getTargetDate());
		openings.setStatus(jobopenings.getStatus());
        openings.setIndustry(jobopenings.getIndustry());
        openings.setSalary(jobopenings.getSalary());
        openings.setClientName(jobopenings.getClientName());
        openings.setAccountManager(jobopenings.getAccountManager());
        openings.setDateOpened(jobopenings.getDateOpened());
        openings.setJobType(jobopenings.getJobType());
        openings.setWorkExperience(jobopenings.getWorkExperience());
        openings.setSkillset(jobopenings.getSkillset());
        
        openings.setCity(jobopenings.getCity());
        openings.setCountry(jobopenings.getCountry());
        openings.setState(jobopenings.getState());
        openings.setZip(jobopenings.getZip());
        
        jobopeningsRepo.save(openings);
		
		return openings;
		
	}
	
	

}
