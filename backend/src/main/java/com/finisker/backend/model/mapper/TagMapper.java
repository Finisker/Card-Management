package com.finisker.backend.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.finisker.backend.model.dto.TagDTO;
import com.finisker.backend.persistence.entity.Tag;

@Mapper(componentModel = "spring")
public interface TagMapper {
    public TagDTO toDTO(Tag tag);

    @Mapping(target = "cards", ignore = true)
    public Tag toEntity(TagDTO dto);
}
