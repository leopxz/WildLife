package com.WildLife.Wild.repository;

import com.WildLife.Wild.entities.AnimaisEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimaisRepository extends JpaRepository<AnimaisEntity, Long> {
}
