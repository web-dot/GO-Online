package com.estore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.estore.domain.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

	User findByUserId(String userId);
	
}
