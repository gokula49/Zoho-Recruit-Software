package com.example.gokula.models;

import javax.persistence.*;

@Entity
@Table(name = "interview")
public class Interview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;
    @Column(name = "interviewname")
    private String interviewname;
    @Column(name = "postingtitle")
    private String postingnitle;
    @Column(name = "to_date")
    private String to;
    @Column(name = "location")
    private String location;
    @Column(name = "candidatename")
    private String candidatename;
    @Column(name = "from_date")
    private String from;
    @Column(name = "interviewer")
    private String interviewer;
    @Column(name="schedulecomments")
    private String schedulecomments;
    @Column(name = "assessmentname")
    private String assessmentname;
    @Column(name = "istatus")
    private String interviewstatus;

    public String getInterviewstatus() {
        return interviewstatus;
    }

    public void setInterviewstatus(String interviewstatus) {
        this.interviewstatus = interviewstatus;
    }

    public Interview(int id, String interviewname, String postingnitle, String to, String location, String candidatename, String from, String interviewer, String schedulecomments, String assessmentname,String sts) {
        this.id = id;
        this.interviewname = interviewname;
        this.postingnitle = postingnitle;
        this.to = to;
        this.location = location;
        this.candidatename = candidatename;
        this.from = from;
        this.interviewer = interviewer;
        this.schedulecomments = schedulecomments;
        this.assessmentname = assessmentname;
        this.interviewstatus =sts;
    }

    public Interview() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getInterviewname() {
        return interviewname;
    }

    public void setInterviewname(String interviewname) {
        this.interviewname = interviewname;
    }

    public String getPostingnitle() {
        return postingnitle;
    }

    public void setPostingnitle(String postingnitle) {
        this.postingnitle = postingnitle;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCandidatename() {
        return candidatename;
    }

    public void setCandidatename(String candidatename) {
        this.candidatename = candidatename;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getInterviewer() {
        return interviewer;
    }

    public void setInterviewer(String interviewer) {
        this.interviewer = interviewer;
    }

    public String getSchedulecomments() {
        return schedulecomments;
    }

    public void setSchedulecomments(String schedulecomments) {
        this.schedulecomments = schedulecomments;
    }

    public String getAssessmentname() {
        return assessmentname;
    }

    public void setAssessmentname(String assessmentname) {
        this.assessmentname = assessmentname;
    }
}
