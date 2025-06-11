package com.finisker.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finisker.backend.persistence.entity.Card;
import com.finisker.backend.persistence.respository.CardRepository;

import java.util.List;

@Service
public class CardService {

    private final CardRepository cardRepository;

    @Autowired
    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<Card> getCards() {
        return cardRepository.findAll();
    }

    public void addCard(Card card) {
        cardRepository.save(card);
    }

    public void deleteAll() {
        cardRepository.deleteAll();
    }

}
