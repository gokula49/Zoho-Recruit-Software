package com.example.gokula.Repo;


import com.example.gokula.models.FileDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {}

