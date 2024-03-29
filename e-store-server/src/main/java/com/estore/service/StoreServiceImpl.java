package com.estore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estore.domain.StoreData;
import com.estore.domain.User;
import com.estore.repository.StoreRepository;
import com.estore.repository.UserRepository;

@Service
public class StoreServiceImpl implements StoreService {
	
	@Autowired
	StoreRepository storeRepository;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public StoreData createNewStore(StoreData storeData) {
		User user = userRepository.findByUserId(storeData.getUserId());
		StoreData store = storeRepository.findByUserId(storeData.getUserId());
		if(user != null && store == null) {
			store = storeRepository.save(storeData);
			user.setStoreOwner(true);
			userRepository.save(user);
		}
		return store;
		
	}

}
