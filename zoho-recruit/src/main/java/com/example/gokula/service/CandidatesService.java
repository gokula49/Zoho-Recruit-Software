package com.example.gokula.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gokula.Repo.CandidatesRepo;
import com.example.gokula.models.Candidates;

@Service
public class CandidatesService {

	
	@Autowired
	CandidatesRepo candidatesRepo;

	
	public Candidates postCandidates(Candidates candidates) {
		return candidatesRepo.save(candidates);	
	}
	
	public List <Candidates> getAllCandidates() {
		return candidatesRepo.findAll();
	}
	
	public Candidates getCandidates(int id) {
	   return candidatesRepo.findById(id);
	}
	public String deleteSingleCandidate(int id) {
		candidatesRepo.deleteById(id);
		if(candidatesRepo.existsById(id)) {
			return "Something went Wrong";
		}
		return "Deleted Successfully";
	}
	
	
	
	
}
