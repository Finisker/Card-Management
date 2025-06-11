package com.finisker.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finisker.backend.persistence.entity.Enemy;
import com.finisker.backend.service.EnemyService;

@RestController
@RequestMapping(path = "enemies")
@CrossOrigin(origins = "http://localhost:4200")
public class EnemyController {
    private final EnemyService enemyService;

    @Autowired
    public EnemyController(EnemyService enemyService) {
        this.enemyService = enemyService;
    }

    @GetMapping("/all")
    public List<Enemy> getEnemys() {
        return enemyService.getEnemies();
    }

    @PostMapping("/add")
    public void createEnemy(@RequestBody Enemy enemy) {
        enemyService.addEnemy(enemy);
    }

    @DeleteMapping("/deleteAll")
    public void deleteEnemies() {
        enemyService.deleteAll();
    }
}
