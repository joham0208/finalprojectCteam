package com.book.proj.controller;

import org.springframework.beans.factory.annotation.Autowired;
//import java.util.List;
//
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

//import com.book.proj.dto.BookDTO;
//import com.book.proj.service.BookService;
import com.book.proj.model.Book;
import com.book.proj.repository.BookRepository;

@Controller
public class BookController {
	
//	public BookController(BookService bookService) {
//		this.bookService = bookService;
//	}

//	private BookService bookService;
	@Autowired
	private BookRepository bookinfo;
	
	@RequestMapping("/")
	public ModelAndView list(ModelAndView mav) {
		
		Iterable<Book> lib_list = bookinfo.findAll();
		
		mav.addObject("lib_list",lib_list);
		
		mav.setViewName("home");
		return mav;
	}
	
//	@GetMapping("/")
//	public String list(Model model) {
//	public String list(Model model,@RequestParam(value="page",defaultValue = "1" )Integer pageNum){
//		List<BookDTO> bookDtoList = bookService.getLiblist();
//		List<BoardDto> boardDtoList = boardService.getBoardlist(pageNum);
//		Integer[] pageList = boardService.getPageList(pageNum);
//		
//		model.addAttribute("bookList", bookDtoList);
//		model.addAttribute("pageList", pageList);
//		
//		return "home";
//	}
	
//	//test용
//	@RequestMapping("/")
//	public ModelAndView list(ModelAndView mav) {
//		
//		Iterable<Book> lib_list = bookinfo.findAll();
//		
//		mav.addObject("lib_list",lib_list);
//		
//		mav.setViewName("list");
//		return mav;
//	}
	
//	@GetMapping("/")
//	public String search(@RequestParam(value="keyword") String keyword, Model model) {
//		List<BookDTO> bookDTOList = bookService.searchLib(keyword);
//		model.addAttribute("lib_List",bookDTOList);
//		return "home";
//	}
}
