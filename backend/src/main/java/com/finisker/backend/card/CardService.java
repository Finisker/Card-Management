package com.finisker.backend.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {

    private final CardRepository cardRepository;

    @Autowired
    public CardService(CardRepository userRepository) {
        this.cardRepository = userRepository;
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
