package com.example.gokula.Repo;


import com.example.gokula.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
  @Override
  Optional<User> findById(Long id);


  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
