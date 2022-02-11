package com.example.gokula.service;

import com.example.gokula.Repo.InterviewRespository;
import com.example.gokula.models.Company;
import com.example.gokula.models.Interview;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterviewService {
    @Autowired
    InterviewRespository interviewRespository;

    public Interview postInterview(Interview interview) {
        return interviewRespository.save(interview);
    }

    public List<Interview> getAllInterview() {
        return interviewRespository.findAll();
    }

    //	public Optional<Company> getSingleCompany(int id) {
//	   return companyRepo.findById(id);
//	}
    public String deleteSingleInterview(int id) {
        interviewRespository.deleteById(id);
        if(interviewRespository.existsById(id)) {
            return "Something went Wrong";
        }
        return "Deleted Successfully";
    }


}
