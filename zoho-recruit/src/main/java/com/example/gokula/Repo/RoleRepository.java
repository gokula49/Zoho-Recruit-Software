package com.example.gokula.Repo;


import com.example.gokula.models.ERole;
import com.example.gokula.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
  Optional<Role> findByName(ERole name);
  @Override
  Optional<Role> findById(Integer id);
}
