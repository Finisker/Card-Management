package com.finisker.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finisker.backend.model.dto.TagDTO;
import com.finisker.backend.model.mapper.TagMapper;
import com.finisker.backend.persistence.entity.Tag;
import com.finisker.backend.persistence.respository.TagRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TagService {

    private final TagRepository tagRepository;
    private final TagMapper tagMapper;

    @Autowired
    public TagService(TagRepository tagRepository, TagMapper tagMapper) {
        this.tagRepository = tagRepository;
        this.tagMapper = tagMapper;
    }

    public List<TagDTO> getAllTags() {

        List<Tag> tags = tagRepository.findAll();
        List<TagDTO> dtos = tags.stream().map(tagMapper::toDTO).collect(Collectors.toList());
        return dtos;
    }

    public void addTag(Tag tag) {
        tagRepository.save(tag);
    }

    public void deleteAll() {
        tagRepository.deleteAll();
    }

}
