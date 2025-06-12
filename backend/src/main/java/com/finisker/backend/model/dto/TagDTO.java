package com.finisker.backend.model.dto;

import lombok.Data;

@Data
public class TagDTO {
    private Long id;

    private String name;
    private String imagePath;
    private String description;

    private Boolean isHidden;
}
