package com.finisker.backend.card;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "cards")
@CrossOrigin(origins = "http://localhost:4200")
public class CardController {
    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping("/all")
    public List<Card> getCards() {
        return cardService.getCards();
    }

    @PostMapping("/add")
    public void createCard(@RequestBody Card card) {
        cardService.addCard(card);
    }

    @DeleteMapping("/deleteAll")
    public void deleteCards() {
        cardService.deleteAll();
    }
}
