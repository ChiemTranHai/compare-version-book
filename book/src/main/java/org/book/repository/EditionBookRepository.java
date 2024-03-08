package org.book.repository;

import org.book.model.EditionBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EditionBookRepository extends JpaRepository<EditionBook, Long> {
}
