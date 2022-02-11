package com.example.gokula.controller;

import com.example.gokula.Repo.InterviewRespository;
import com.example.gokula.models.Contacts;
import com.example.gokula.models.Interview;
import com.example.gokula.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class InterviewController {
    @Autowired
    InterviewService interviewService;
    @Autowired
    InterviewRespository interviewRespository;
    @PostMapping("/api/interview")
    public Interview postInterview(@RequestBody Interview interview) {
        return interviewService.postInterview(interview);
    }

    @GetMapping("/api/interview")
    public List< Interview > getInterview() {
        return interviewService.getAllInterview();
    }

    @GetMapping("/api/interview/{id}")
    public Optional< Interview > getSingleInterview(@PathVariable("id") int id){
        return interviewRespository.findById(id);
    }
    @PutMapping("/api/inetrview/status/{id}")
    public  Interview updatedInterview(@RequestBody Interview interview,@PathVariable("id") int id) {
        Optional<Interview> interviews = interviewRespository.findById(id);
        Interview inter=interviews.get();
        inter.setInterviewstatus(interview.getInterviewstatus());
        interviewRespository.save(inter);

        return  inter;

    }

    @DeleteMapping("/api/interview/{id}")
    public String deleteSingleInterview(@PathVariable("id") int id) {
        interviewRespository.deleteById(id);
        if(interviewRespository.existsById(id)) {
            return "Something went Wrong";
        }
        return "Deleted Successfully";

    }

}
