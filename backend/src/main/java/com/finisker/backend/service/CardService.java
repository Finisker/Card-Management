package com.finisker.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finisker.backend.model.dto.CardDTO;
import com.finisker.backend.model.mapper.CardMapper;
import com.finisker.backend.persistence.entity.Card;
import com.finisker.backend.persistence.entity.Tag;
import com.finisker.backend.persistence.respository.CardRepository;
import com.finisker.backend.persistence.respository.TagRepository;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CardService {

    private final CardRepository cardRepository;
    private final CardMapper cardMapper;
    private final TagRepository tagRepository;

    @Autowired
    public CardService(CardRepository cardRepository, CardMapper cardMapper, TagRepository tagRepository) {
        this.cardRepository = cardRepository;
        this.cardMapper = cardMapper;
        this.tagRepository = tagRepository;
    }

    public List<CardDTO> getAllCards() {
        List<Card> cards = cardRepository.findAll();
        List<CardDTO> dtos = cards.stream().map(cardMapper::toDTO).collect(Collectors.toList());
        return dtos;
    }

    public Card createCard(CardDTO dto) {
        Card card = cardMapper.toEntity(dto);

        Set<Tag> existingTags = dto.getTags().stream()
                .map(tagDTO -> tagRepository.findById(tagDTO.getId())
                        .orElseThrow(() -> new RuntimeException("Tag not found: " + tagDTO.getId())))
                .collect(Collectors.toSet());

        card.setTags(existingTags);

        return cardRepository.save(card);
    }

    public void deleteAll() {
        cardRepository.deleteAll();
    }

}
