package com.estore.endpoint;

import java.util.List;

import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estore.domain.Product;
import com.estore.domain.StoreData;
import com.estore.repository.ProductsRepository;
import com.estore.service.StoreService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class EstorePrimaryEndpoint {
	
	@Autowired
	ProductsRepository productsRepository;
	
	@Autowired
	StoreService storeService;
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts(){
		return productsRepository.findAll();
	}
	
	@PostMapping("/saveNewStore")
	public StoreData saveNewStore(@RequestBody StoreData storeData) {
		return storeService.createNewStore(storeData);
	}
}
