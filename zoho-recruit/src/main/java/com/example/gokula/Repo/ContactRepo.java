package com.example.gokula.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gokula.models.Contacts;

public interface ContactRepo extends JpaRepository<Contacts,Integer>{

}
