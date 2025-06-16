package com.finisker.backend.persistence.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "enemies")
public class Enemy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "image_path")
    private String imagePath;
    @Column(name = "description")
    private String description;
    @Column(name = "bite_effect")
    private String biteEffect;

    @Column(name = "attack_damage")
    private Integer attackDamage;
    @Column(name = "health_points")
    private Integer healthPoints;
    @Column(name = "stun_points")
    private Integer stunPoints;
}
