package com.finisker.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finisker.backend.persistence.entity.Enemy;
import com.finisker.backend.persistence.respository.EnemyRepository;

import java.util.List;

@Service
public class EnemyService {

    private final EnemyRepository enemyRepository;

    @Autowired
    public EnemyService(EnemyRepository enemyRepository) {
        this.enemyRepository = enemyRepository;
    }

    public List<Enemy> getEnemys() {
        return enemyRepository.findAll();
    }

    public void addEnemy(Enemy enemy) {
        enemyRepository.save(enemy);
    }

    public void deleteAll() {
        enemyRepository.deleteAll();
    }

}
