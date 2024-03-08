package org.book.service;

import org.book.model.Book;

import java.util.List;

public interface BookService {
    List<Book> findAll();
}
