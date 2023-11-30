package com.WildLife.Wild.repository;

import com.WildLife.Wild.entities.FuncionariosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository<FuncionariosEntity, Long> {
}
