package com.example.gokula.Repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gokula.models.Jobopenings;
@Transactional
public interface JobopeningsRepo extends JpaRepository<Jobopenings,Integer> {

	List<Jobopenings> findByPostingTitle(String postingTitle);
	
	List<Jobopenings> findByAssignedRecruter(String assignedRecruter);
	
	
	List<Jobopenings> findByAccountManager(String accountManager);
	List<Jobopenings> findById(int id);
	List <Jobopenings> findByCompanyName(String companyname);



	
}
