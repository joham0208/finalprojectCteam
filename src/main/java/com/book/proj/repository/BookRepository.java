package com.book.proj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.book.proj.model.Book;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, String>{
	
	public List<Book> findByName(String name);
	
//	List<Book> findByGu_name(String gu_name);
	
}
