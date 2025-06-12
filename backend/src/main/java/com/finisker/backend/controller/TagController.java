package com.finisker.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finisker.backend.model.dto.TagDTO;
import com.finisker.backend.persistence.entity.Tag;
import com.finisker.backend.service.TagService;

@RestController
@RequestMapping(path = "tags")
@CrossOrigin(origins = "http://localhost:4200")
public class TagController {
    private final TagService tagService;

    @Autowired
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<TagDTO>> getAllTags() {
        List<TagDTO> dtos = tagService.getAllTags();
        return ResponseEntity.ok(dtos);
    }

    @PostMapping("/add")
    public void createTag(@RequestBody Tag tag) {
        tagService.addTag(tag);
    }
}
