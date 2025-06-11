package com.finisker.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finisker.backend.persistence.entity.Tag;
import com.finisker.backend.persistence.respository.TagRepository;

import java.util.List;

@Service
public class TagService {

    private final TagRepository tagRepository;

    @Autowired
    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> getTags() {
        return tagRepository.findAll();
    }

    public void addTag(Tag tag) {
        tagRepository.save(tag);
    }

    public void deleteAll() {
        tagRepository.deleteAll();
    }

}
