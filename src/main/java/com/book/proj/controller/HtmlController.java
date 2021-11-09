package com.book.proj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HtmlController {
	
    @GetMapping("/about")
    public String dispAbout(Model model){
        log.info("html controller");
        return "about";
    }
    @GetMapping("/comment")
    public String dispComment(Model model){
        log.info("html controller");
        return "comment";
    }
//    @GetMapping("/join")
//    public String disphJoin(Model model){
//        log.info("html controller");
//        return "join";
//    }
    
//    @GetMapping("/login")
//    public String dispLogin(Model model){
//        log.info("html controller");
//        return "login";
//    }
    
    @GetMapping("/search")
    public String dispSearch(Model model){
        log.info("html controller");
        return "search";
    }
}
