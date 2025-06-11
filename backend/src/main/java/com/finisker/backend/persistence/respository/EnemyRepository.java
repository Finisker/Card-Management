package com.finisker.backend.persistence.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finisker.backend.persistence.entity.Enemy;

@Repository
public interface EnemyRepository extends JpaRepository<Enemy, Long> {

}
