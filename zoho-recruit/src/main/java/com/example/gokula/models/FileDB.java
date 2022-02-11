package com.example.gokula.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class FileDB {
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  private String id;

  private String name;

  private String type;

  @Lob
  private byte[] data;
  @OneToOne(fetch = FetchType.EAGER,mappedBy = "fileDB")
  private Jobopenings jobopenings;

  public Candidates getCandidates() {
    return candidates;
  }

  public void setCandidates(Candidates candidates) {
    this.candidates = candidates;
  }

  @OneToOne(fetch = FetchType.EAGER,mappedBy = "fileDB")

  private  Candidates candidates;


  public FileDB() {
  }

  public Jobopenings getJobopenings() {
    return jobopenings;
  }

  public void setJobopenings(Jobopenings jobopenings) {
    this.jobopenings = jobopenings;
  }

  public FileDB(String name, String type, byte[] data) {
    this.name = name;
    this.type = type;
    this.data = data;
  }

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public byte[] getData() {
    return data;
  }

  public void setData(byte[] data) {
    this.data = data;
  }

}
