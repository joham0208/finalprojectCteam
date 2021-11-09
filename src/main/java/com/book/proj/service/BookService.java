package com.book.proj.service;

//import java.util.ArrayList;
//import java.util.List;
//
//import javax.transaction.Transactional;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.book.proj.dto.BookDTO;
//import com.book.proj.model.Book;
//import com.book.proj.repository.BookRepository;

//@Service
public class BookService {
	
//	@Autowired
//	BookRepository bookRepository;
	
//	@Transactional
//	public List<BookDTO> searchLib(String gu_name){
//		List<Book> books = bookRepository.findByGu_name(gu_name);
//		List<BookDTO> bookDtoList = new ArrayList<>();
//		
//		if(books.isEmpty()) return bookDtoList;
//		
//		for(Book book: books) {
//			bookDtoList.add(this.convertEntityToDto(book));
//		}
//		return bookDtoList;
//	}
	
//	private BookDTO convertEntityToDto(Book book) {
//		return BookDTO.builder()
//				.name(book.getName())
//				.gu_name(book.getGu_name())
//				.address(book.getAddress())
//				.tel(book.getTel())
//				.build();
//	}

//	public BookService(BookRepository bookRepository) {
//		this.bookRepository = bookRepository;
//	}
	
//	@Transactional
//	public List<BookDTO> getLiblist() {
//	public List<BoardDto> getBoardlist(Integer pageNum)
//		Page<Board> page = boardRepository
//				.findAll(PageRequest
//						.of(pageNum-1,PAGE_POST_COUNT,Sort.by(Sort.Direction.ASC,"create_Date")));
//		
//		List<Board> boards = page.getContent();
//		List<Book> books = bookRepository.findAll();
//		List<BookDTO> bookDtoList = new ArrayList<>();
//		
//		for(Book book : books) {
//			bookDtoList.add(this.convertEntityToDto(book));
//		}
//		return bookDtoList;
//	}
}
