package com.finisker.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finisker.backend.model.dto.CardDTO;
import com.finisker.backend.model.mapper.CardMapper;
import com.finisker.backend.persistence.entity.Card;
import com.finisker.backend.service.CardService;

@RestController
@RequestMapping(path = "cards")
@CrossOrigin(origins = "http://localhost:4200")
public class CardController {
    private final CardService cardService;
    private final CardMapper cardMapper;

    @Autowired
    public CardController(CardService cardService, CardMapper cardMapper) {
        this.cardService = cardService;
        this.cardMapper = cardMapper;
    }

    @GetMapping("/all")
    public ResponseEntity<List<CardDTO>> getAllCards() {
        List<CardDTO> dtos = cardService.getAllCards();
        return ResponseEntity.ok(dtos);
    }

    @PostMapping("/add")
    public ResponseEntity<CardDTO> createCard(@RequestBody CardDTO dto) {
        Card savedCard = cardService.createCard(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(cardMapper.toDTO(savedCard));
    }
}
