package com.finisker.backend.model.dto;

import java.util.Set;

import lombok.Data;

@Data
public class CardDTO {
    private Long id;

    private String title;
    private String type;
    private String description;
    private String imagePath;

    private Integer manaCost;
    private Integer goldCost;

    private Set<TagDTO> tags;
}
