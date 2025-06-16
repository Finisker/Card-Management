package com.finisker.backend.model.dto;

import java.util.Set;

import lombok.Data;

@Data
public class CardDTO {
    private Long id;

    private String name;
    private String type;
    private String description;
    private String imagePath;

    private String manaCost;
    private String goldCost;

    private Set<TagDTO> tags;
}
