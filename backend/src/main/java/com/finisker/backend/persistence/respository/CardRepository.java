package com.finisker.backend.persistence.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finisker.backend.persistence.entity.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

}
