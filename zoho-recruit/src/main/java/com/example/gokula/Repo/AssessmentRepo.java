package com.example.gokula.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gokula.models.Assessment;

public interface AssessmentRepo extends JpaRepository<Assessment, Integer> {
	

}
