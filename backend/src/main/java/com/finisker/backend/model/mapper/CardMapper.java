package com.finisker.backend.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.finisker.backend.model.dto.CardDTO;
import com.finisker.backend.persistence.entity.Card;

@Mapper(componentModel = "spring", uses = TagMapper.class)
public interface CardMapper {

    public CardDTO toDTO(Card card);

    @Mapping(target = "tags", ignore = true)
    public Card toEntity(CardDTO dto);
}