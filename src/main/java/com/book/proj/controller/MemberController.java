package com.book.proj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.book.proj.model.Member;
import com.book.proj.repository.MemberRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class MemberController {
	
	@Autowired
	MemberRepository memberRepository;
	
	public MemberController(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}
	

	@RequestMapping("/login")
	public String login() {
		return "login";
	}
	
	@PostMapping("/signIn")
	public String signIn(String inputId, String inputPassword) {
		log.info("id : {} , pw : {}", inputId, inputPassword);
		Member member = this.memberRepository.findMember(inputId, inputPassword);
		if(member != null) {
			return "redirect:/";
		}
		return "/login";
	}
	
	@RequestMapping("/join")
	public String signUp() {
		return "join";
	}
	
	@RequestMapping("/join/create")
	public String create(Member member) {
		this.memberRepository.save(member);
		return "redirect:/";
	}
	
	
}