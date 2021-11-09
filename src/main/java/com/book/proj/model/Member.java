package com.book.proj.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name="member")
public class Member {
	
	@Id
	@Column(name="id")
	private String id;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="name")
	private String name;
	
	@Builder
	public Member(String id,String email,String password,String name) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
	}
}
