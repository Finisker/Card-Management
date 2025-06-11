package com.finisker.backend.persistence.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finisker.backend.persistence.entity.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

}
