package com.book.proj.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.book.proj.model.Member;

@Repository
public interface MemberRepository extends CrudRepository<Member, String>{
	
	@Query("select m from Member m where id = :id and password = :password")
	Member findMember(String id, String password);
}
