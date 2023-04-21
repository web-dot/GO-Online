package com.estore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.estore.domain.StoreData;

@Repository
public interface StoreRepository extends MongoRepository<StoreData, String>  {

	StoreData findByUserId(String userId);
	
}
