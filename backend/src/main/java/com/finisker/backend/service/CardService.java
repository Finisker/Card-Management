package com.finisker.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finisker.backend.model.dto.CardDTO;
import com.finisker.backend.model.mapper.CardMapper;
import com.finisker.backend.persistence.entity.Card;
import com.finisker.backend.persistence.respository.CardRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CardService {

    private final CardRepository cardRepository;
    private final CardMapper cardMapper;

    @Autowired
    public CardService(CardRepository cardRepository, CardMapper cardMapper) {
        this.cardRepository = cardRepository;
        this.cardMapper = cardMapper;
    }

    public List<CardDTO> getAllCards() {
        List<Card> cards = cardRepository.findAll();
        List<CardDTO> dtos = cards.stream().map(cardMapper::toDTO).collect(Collectors.toList());
        return dtos;
    }

    public void addCard(Card card) {
        cardRepository.save(card);
    }

    public void deleteAll() {
        cardRepository.deleteAll();
    }

}
