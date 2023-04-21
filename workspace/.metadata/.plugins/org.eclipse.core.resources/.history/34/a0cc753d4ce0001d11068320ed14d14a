package com.estore.service;

import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estore.domain.StoreData;
import com.estore.repository.StoreRepository;

@Service
public class StoreServiceImpl implements StoreService {
	
	@Autowired
	StoreRepository storeRepository;

	@Override
	public StoreData createNewStore(StoreData storeData) {
		return storeRepository.save(storeData);
	}

}
