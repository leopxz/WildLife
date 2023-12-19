package com.WildLife.Wild.repository;

import com.WildLife.Wild.entities.ChamadosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChamadosRepository extends JpaRepository<ChamadosEntity, Long>{

}


