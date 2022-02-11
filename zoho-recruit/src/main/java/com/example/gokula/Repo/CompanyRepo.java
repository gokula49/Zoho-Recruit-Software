package com.example.gokula.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gokula.models.Company;

public interface CompanyRepo extends JpaRepository<Company, Integer>{
	
	Company findById(int id);

}
