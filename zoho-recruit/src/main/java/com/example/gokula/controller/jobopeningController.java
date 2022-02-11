package com.example.gokula.controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.gokula.Repo.FileDBRepository;
import com.example.gokula.Repo.JobopeningsRepo;
import com.example.gokula.models.FileDB;
import com.example.gokula.models.Jobopenings;
import com.example.gokula.payload.response.ResponseJobsopenings;
import com.example.gokula.payload.response.ResponseJobsopeningsforslug;
import com.example.gokula.service.FileStorageService;
import com.example.gokula.service.JobOpeningService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class jobopeningController {
 
	@Autowired
    JobopeningsRepo jobopeningRepo;
	@Autowired
	EntityManager em;
	@Autowired
	FileDBRepository fileDBRepository;
	@Autowired
	FileStorageService fileStorageService;
	
	@Autowired
	JobOpeningService jobopeningservice;
	
	@GetMapping("/hello")
	public String hello() {
		return "Codingmart Technologies";
	}
	
	@PostMapping("/api/jobopening")
	public Jobopenings postJopOpenings(@RequestBody Jobopenings jobopening) {
		return jobopeningservice.postJobOpenings(jobopening);
	}
	@PostMapping("/api/jobopening/{id}")
	public Jobopenings postJopOpeningswithImage( @RequestBody Jobopenings jobopening,@PathVariable("id") String id) {
		FileDB fileDB = fileStorageService.getFile(id);
		jobopening.setFileDB(fileDB);
		return jobopeningservice.postJobOpenings(jobopening);
	}
	
	@GetMapping("/api/jobopeningwithfiles")
	public List < ResponseJobsopenings >  getJobOpenings() {
		List<ResponseJobsopenings> end =new ArrayList<>();
//		this.id = id;
//		this.postingTitles = postingTitles;
//		this.assignedRecruters = assignedRecruters;
//		this.targetDates = targetDates;
//		this.accountManagers = accountManagers;
//		this.states = states;
//		this.uri = uri;
		List<Jobopenings> jobs = jobopeningservice.getAllJobOpenings();
		for(Jobopenings job:jobs){
			String fileDownloadUri = ServletUriComponentsBuilder
					.fromCurrentContextPath()
					.path("/files/")
					.path(job.getFileDB().getId())
					.toUriString();
			end.add(new ResponseJobsopenings(job.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri, job.getCompanyName()));

		}
		return end;

	}
	
	@GetMapping("/api/jobopeningbyptitle/{name}")
	public List < ResponseJobsopenings > getpostTitle(@PathVariable("name") String name) {
		
		List<ResponseJobsopenings> end =new ArrayList<>();
//		return jobopeningRepo.findByPostingTitle(name);
		
		List<Jobopenings> jobs = jobopeningRepo.findByPostingTitle(name);


		for(Jobopenings job:jobs){
			//confusion
			String fileDownloadUri = ServletUriComponentsBuilder
					.fromCurrentContextPath()
					.path("/files/")
					.path(job.getFileDB().getId())
					.toUriString();
			
			
			end.add(new ResponseJobsopenings(job.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri,job.getCompanyName()));

		}
		return end;
		
	}

	
	@GetMapping("/api/jobopeningbyarecruter/{name}")
	public List < ResponseJobsopenings > getArecruter(@PathVariable("name") String name) {
		
		List<ResponseJobsopenings> end =new ArrayList<>();
//		return jobopeningRepo.findByPostingTitle(name);
		
		List<Jobopenings> jobs = jobopeningRepo.findByAssignedRecruter(name);


		for(Jobopenings job:jobs){
			String fileDownloadUri = ServletUriComponentsBuilder
					.fromCurrentContextPath()
					.path("/files/")
					.path(job.getFileDB().getId())
					.toUriString();
			end.add(new ResponseJobsopenings(job.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri,job.getCompanyName()));

		}
		return end;
		
	}
	@GetMapping("/api/jobopeningbymanager/{name}")
	public List < ResponseJobsopenings > getHmanager(@PathVariable("name") String name) {
		
		List<ResponseJobsopenings> end =new ArrayList<>();
//		return jobopeningRepo.findByPostingTitle(name);
		
		List<Jobopenings> jobs = jobopeningRepo.findByAccountManager(name);


		for(Jobopenings job:jobs){
			String fileDownloadUri = ServletUriComponentsBuilder
					.fromCurrentContextPath()
					.path("/files/")
					.path(job.getFileDB().getId())
					.toUriString();
			end.add(new ResponseJobsopenings(job.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri,job.getCompanyName()));

		}
		return end;
		
	}
	
	@GetMapping("/api/jobopening/{id}")
	public List < ResponseJobsopeningsforslug >  getSingleJopopenings(@PathVariable("id") int id){
		List<ResponseJobsopeningsforslug> end =new ArrayList<>();
//		return jobopeningRepo.findByPostingTitle(name);
		
		List<Jobopenings> jobs = jobopeningRepo.findById(id);

//		int id, String postingTitle, String contactName, String assignedRecruter,
//		String targetDate, String status, String industry, String salary, String clientName, String accountManager,
//		String dateOpened, String jobType, String workExperience, String skillset, String city, String country,
//		String state, String zip
		for(Jobopenings job:jobs){
			
			end.add(new ResponseJobsopeningsforslug(job.getId(),job.getPostingTitle(),job.getContactName(),job.getAssignedRecruter(),job.getTargetDate(),job.getStatus(),job.getIndustry(),
					job.getSalary(),job.getClientName(),job.getAccountManager(),job.getDateOpened(),job.getJobType(),job.getWorkExperience(),job.getSkillset(),job.getCity(),job.getCountry(),
					job.getState(), job.getZip(),job.getCompanyName()));

		}
		return end;
		
	}
	
	@DeleteMapping("/api/jobopening/{id}")
	public String deleteSingleopening(@PathVariable("id") int id) {
		return jobopeningservice.deleteJobopenings(id);
		
	}
	
	@PutMapping("/api/jobopening/{id}")
	public Jobopenings editJobOpenings(@PathVariable("id") int id, @RequestBody Jobopenings jobopenings) {
		return jobopeningservice.editJobOpening(id, jobopenings);
		
	}
	
	@GetMapping("/api/cjobopening/{companyname}")
	public List < ResponseJobsopenings>  getSingleJopopenings(@PathVariable("companyname") String companyname){
		List<ResponseJobsopenings> end =new ArrayList<>();
//		return jobopeningRepo.findByPostingTitle(name);
		
		List<Jobopenings> jobs = jobopeningRepo.findByCompanyName(companyname);

//		int id, String postingTitle, String contactName, String assignedRecruter,
//		String targetDate, String status, String industry, String salary, String clientName, String accountManager,
//		String dateOpened, String jobType, String workExperience, String skillset, String city, String country,
//		String state, String zip
		for(Jobopenings job:jobs){
			
			
			String fileDownloadUri = ServletUriComponentsBuilder
					.fromCurrentContextPath()
					.path("/files/")
					.path(job.getFileDB().getId())
					.toUriString();
			
			end.add(new ResponseJobsopenings(job.getId(),job.getPostingTitle(),job.getAssignedRecruter(),job.getTargetDate(),job.getAccountManager(),job.getState(),fileDownloadUri,job.getCompanyName()));

		}
		return end;
		
	}
	
	
	
	
	
}
