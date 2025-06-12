package com.finisker.backend.persistence.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@Entity
@Table(name = "tags")
@EqualsAndHashCode(exclude = "cards")
@ToString(exclude = "cards")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "image_path")
    private String imagePath;
    @Column(name = "description")
    private String description;

    @Column(name = "is_hidden")
    private Boolean isHidden;

    @ManyToMany(mappedBy = "tags")
    Set<Card> cards = new HashSet<>();
}
