package com.example.gokula.Repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gokula.models.Candidates;
@Transactional
public interface CandidatesRepo extends JpaRepository<Candidates, Integer>{
	
	List<Candidates> findByFirstName(String firstName);

	List<Candidates> findByEmail(String email);

	List<Candidates> findByMobile(String mobile);
	
	Candidates findById(int id);
	
	List <Candidates> findByCompanyName(String companyName);


}
 